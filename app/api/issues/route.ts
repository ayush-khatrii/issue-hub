import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/validationSchemas";

// Create New Issue Route
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = createIssueSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(validatedData.error.format(), { status: 400 });
    }
    console.log(validatedData);

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
// Get all issues
export async function GET() {
  try {
    const allIssues = await prisma.issue.findMany();
    return NextResponse.json(allIssues);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
