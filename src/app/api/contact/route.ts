import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "dyhn4@naver.com";

function buildHtml(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  assignee?: string;
  message: string;
}) {
  const rows = [
    ["이름", data.name],
    ["이메일", data.email],
    ["연락처", data.phone || "-"],
    ["회사·기관명", data.company || "-"],
    ["관심 서비스", data.service || "-"],
    ["담당자 요청", data.assignee || "-"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;background:#f1f5f9;font-weight:600;white-space:nowrap;">${label}</td><td style="padding:6px 12px;">${value}</td></tr>`
    )
    .join("");

  return `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
  <h2 style="background:#1d4ed8;color:#fff;padding:16px 20px;margin:0;border-radius:8px 8px 0 0;">탱고인사이트 홈페이지 문의</h2>
  <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-top:none;">
    ${tableRows}
  </table>
  <div style="margin-top:16px;padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:0 0 8px 8px;">
    <p style="margin:0 0 8px;font-weight:600;">문의 내용</p>
    <p style="margin:0;white-space:pre-wrap;">${data.message}</p>
  </div>
</div>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, assignee, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "필수 항목(이름, 이메일, 문의 내용)을 입력해주세요." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NAVER_USER,
        pass: process.env.NAVER_PASS,
      },
    });

    await transporter.sendMail({
      from: `"탱고인사이트 문의" <${process.env.NAVER_USER}>`,
      to: TO_EMAIL,
      subject: `[문의] ${name} / ${company || email}`,
      html: buildHtml({ name, email, phone, company, service, assignee, message }),
      replyTo: email,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
