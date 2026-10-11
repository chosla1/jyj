import { validateConsultation } from "@/lib/consultation-validation";
import {
  createSupabaseServerClient,
  MissingSupabaseEnvError,
} from "@/lib/supabase";
import type { ConsultationPayload, ConsultationResult } from "@/types/consultation";

export { validateConsultation };

const SAVE_FAILED_MESSAGE =
  "상담 신청을 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.";

export async function submitConsultation(
  payload: ConsultationPayload,
): Promise<ConsultationResult> {
  const error = validateConsultation(payload);
  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[consultation] validation failed", {
        field: error.field,
        message: error.message,
      });
    }
    return error;
  }

  try {
    const supabase = createSupabaseServerClient();
    const { error: insertError } = await supabase.from("consultations").insert({
      name: payload.name.trim(),
      phone: payload.phone.trim(),
      email: payload.email.trim(),
      area: payload.area,
      message: payload.message.trim(),
      consent: payload.consent,
    });

    if (insertError) {
      console.error("[consultation insert]", insertError.message);
      return { ok: false, message: SAVE_FAILED_MESSAGE };
    }
  } catch (cause) {
    console.error("[consultation insert]", cause);
    if (cause instanceof MissingSupabaseEnvError) {
      return { ok: false, message: cause.message };
    }
    return { ok: false, message: SAVE_FAILED_MESSAGE };
  }

  return {
    ok: true,
    message: "상담 신청이 접수되었습니다. 확인 후 연락드리겠습니다.",
  };
}
