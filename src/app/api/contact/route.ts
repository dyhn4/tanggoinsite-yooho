import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "필수 항목(이름, 이메일, 문의 내용)을 입력해주세요." },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: { name, email, phone, company, service, message },
    });

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(contacts);
}
