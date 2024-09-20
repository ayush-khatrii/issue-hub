import { createIssueSchema } from "@/app/validationSchemas";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Patch route for updating an issue
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const validatedData = createIssueSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(validatedData.error.format(), { status: 400 });
    }
    const issue = await prisma.issue.findUnique({
      where: {
        id: parseInt(params.id)
      }
    });
    if (!issue) {
      return NextResponse.json({ error: "Issue not found" }, { status: 404 });
    }

    // update issue
    const updatedIssue = await prisma.issue.update({
      where: {
        id: issue.id
      },
      data: {
        title: body.title,
        description: body.description
      }
    });
    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}

// Delete route for deleting an issue
export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const deletedIssue = await prisma.issue.delete({
      where: {
        id: body.id
      }
    });
    return NextResponse.json(deletedIssue, { status: 200 });
  } catch (error) {
    return NextResponse.json(`Server Error: ${error}`, {
      status: 500,
    })
  }
}