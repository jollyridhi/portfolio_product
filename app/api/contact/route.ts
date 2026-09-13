import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.company?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!validEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }
  if (message.length > 4000) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
  }

  const subject = `Portfolio inquiry from ${name}`;
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;

  if (!web3Key) {
    return NextResponse.json({ ok: false, fallback: true });
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3Key,
        name,
        email,
        message,
        subject,
        from_name: "ridhijolly.com",
        replyto: email,
      }),
    });
    const result = (await response.json()) as { success?: boolean; message?: string };
    if (!response.ok || !result.success) {
      throw new Error(result.message || "Web3Forms rejected the send.");
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, fallback: true });
  }
}
