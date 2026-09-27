import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) return NextResponse.json({ error: "Invalid enquiry" }, { status: 400 });
  return NextResponse.json({ received: true }, { status: 202 });
}