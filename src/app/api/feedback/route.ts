
import { prisma } from "@/db/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.feedback.create({
    data: {
      name: body.name,
      siteUrl: body.siteUrl,
      imageUrl: body.imageUrl,
      message: body.message.replace(/\n/g, "<br />"),
    },
  });

  return NextResponse.json({}, { status: 201 });
}
