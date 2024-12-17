import { NextResponse } from "next/server";

export function successResponse(data: any, statusCode = 200) {
  return NextResponse.json({ success: true, data }, { status: statusCode });
}

export function errorResponse(message: string, statusCode: number, details?: any) {
  return NextResponse.json(
    { success: false, message, details },
    { status: statusCode }
  );
}