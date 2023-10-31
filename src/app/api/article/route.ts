import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const article = await prisma.article.findMany();
  let response = {
    status: "success",
    results: article.length,
    article,
  };
  return NextResponse.json(response);
}
