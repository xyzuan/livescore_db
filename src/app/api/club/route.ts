import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const club = await prisma.club.findMany();
  let response = {
    status: "success",
    results: club.length,
    club,
  };
  return NextResponse.json(response);
}
