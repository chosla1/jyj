import { NextResponse } from "next/server";
import { submitConsultation } from "@/lib/consultation";
import type { ConsultationPayload } from "@/types/consultation";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ConsultationPayload>;
    const payload: ConsultationPayload = {
      name: String(body.name ?? ""),
      phone: String(body.phone ?? ""),
      email: String(body.email ?? ""),
      area: String(body.area ?? ""),
      message: String(body.message ?? ""),
      consent: Boolean(body.consent),
    };

    if (process.env.NODE_ENV !== "production") {
      console.log("[consultation] body", body);
    }

    const result = await submitConsultation(payload);
    if (process.env.NODE_ENV !== "production") {
      console.log("[consultation] result", result);
    }
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
  } catch {
    return NextResponse.json(
      { ok: false, message: "신청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
