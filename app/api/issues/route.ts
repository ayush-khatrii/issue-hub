import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/validationSchemas";

// Create New Issue Route
export async function POST(req: NextRequest) {
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
}
