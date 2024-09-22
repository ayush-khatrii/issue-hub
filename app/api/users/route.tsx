import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const foundUsers = await prisma.user.findMany({
      orderBy: { name: "asc" }
    });
    if (!foundUsers) {
      return NextResponse.json({ error: "Users not found" }, { status: 404 });
    }
    return NextResponse.json(foundUsers, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }

}