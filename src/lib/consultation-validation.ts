import { practiceAreas } from "@/data/practiceAreas";
import type { ConsultationPayload, ConsultationResult } from "@/types/consultation";

function isNonEmpty(value: string) {
  return value.trim().length > 0;
}

export function validateConsultation(
  payload: ConsultationPayload,
): ConsultationResult | null {
  if (!isNonEmpty(payload.name)) {
    return { ok: false, field: "name", message: "이름을 입력해 주세요." };
  }
  if (!isNonEmpty(payload.phone)) {
    return { ok: false, field: "phone", message: "연락처를 입력해 주세요." };
  }
  if (!isNonEmpty(payload.email) || !payload.email.includes("@")) {
    return { ok: false, field: "email", message: "이메일을 정확히 입력해 주세요." };
  }
  const validArea = practiceAreas.some((area) => area.id === payload.area);
  if (!validArea) {
    return { ok: false, field: "area", message: "상담 분야를 선택해 주세요." };
  }
  if (!isNonEmpty(payload.message) || payload.message.trim().length < 10) {
    return {
      ok: false,
      field: "message",
      message: "상담 내용을 10자 이상 입력해 주세요.",
    };
  }
  if (!payload.consent) {
    return {
      ok: false,
      field: "consent",
      message: "개인정보 수집 및 이용에 동의해 주세요.",
    };
  }
  return null;
}
