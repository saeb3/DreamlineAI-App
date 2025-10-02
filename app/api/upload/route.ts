// app/api/upload/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ensure Node runtime for formData() with larger payloads

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get("file");
    // In a real app: persist to S3/GCS/local FS/etc.
    // Here we just acknowledge receipt.
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ ok: false, error: "No file" }, { status: 400 });
    }
    return NextResponse.json({ ok: true, name: file.name, size: file.size, type: file.type });
  } catch (err) {
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}