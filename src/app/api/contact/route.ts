import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Campos obrigatórios." }, { status: 400 });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL ?? "sedenirvitorino@gmail.com",
      replyTo: email.trim(),
      subject: `Nova mensagem de ${name.trim()} — Portfólio`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:1px solid #e5e7eb;padding-bottom:16px;margin-bottom:24px;">
            Nova mensagem do portfólio
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:6px 0;color:#6b7280;width:80px;font-size:13px;">Nome</td>
              <td style="padding:6px 0;font-weight:600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#6b7280;font-size:13px;">E-mail</td>
              <td style="padding:6px 0;">
                <a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
            <p style="margin:0 0 8px;color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">
              Mensagem
            </p>
            <p style="margin:0;line-height:1.7;">${safeMessage}</p>
          </div>
          <p style="margin-top:32px;color:#9ca3af;font-size:11px;">
            Enviado via sedenir.dev
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] email error:", err);
    return NextResponse.json(
      { error: "Falha ao enviar. Tente novamente." },
      { status: 500 }
    );
  }
}
