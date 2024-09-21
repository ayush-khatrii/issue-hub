import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/validationSchemas";
import { auth } from "@/auth";

// Create New Issue Route
export async function POST(req: NextRequest) {
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

    const newIssue = await prisma.issue.create({
      data: { title: body.title, description: body.description },
    });
    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
