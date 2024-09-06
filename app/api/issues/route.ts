import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

// zod schema body validation
const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validatedData = createIssueSchema.safeParse(body);
  if (!validatedData.success) {
    return NextResponse.json(validatedData.error.errors, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
