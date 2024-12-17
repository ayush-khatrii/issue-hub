import { editIssueSchema } from "@/app/validationSchemas";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { errorResponse, successResponse } from "@/utils/apiResponse";
import { NextRequest, NextResponse } from "next/server";

// Patch route for updating an issue
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await auth();
    if (!session) {
      return errorResponse("You must be logged in to update issue", 401);
    }
    const body = await req.json();
    const validatedData = editIssueSchema.safeParse(body);
    const { assignedToUserId, title, description, status } = body;

    if (!validatedData.success) {
      return errorResponse("Invalid data", 400, validatedData.error.format());
    }

    if (assignedToUserId) {
      const foundUser = await prisma.user.findUnique({
        where: {
          id: assignedToUserId
        }
      });

      if (!foundUser) {
        return errorResponse("User not found", 404);
      }
    }

    const issue = await prisma.issue.findUnique({
      where: {
        id: parseInt(params.id)
      }
    });
    if (!issue) {
      return errorResponse("Issue not found", 404);
    }

    // update issue
    const updatedIssue = await prisma.issue.update({
      where: {
        id: issue.id
      },
      data: {
        title,
        description,
        assignedToUserId,
        status
      }
    });
    return successResponse(updatedIssue, 200);
  } catch (error) {
    console.error(error);
    return errorResponse("An unexpected server error occurred.", 500);
  }
}

// Delete route for deleting an issue
export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return errorResponse("You must be logged in to delete issue", 401);
  }
  try {
    const body = await req.json();
    const deletedIssue = await prisma.issue.delete({
      where: {
        id: body.id
      }
    });
    return successResponse(deletedIssue, 200);
  } catch (error) {
    return errorResponse("An unexpected server error occurred.", 500);
  }
}