import { NextResponse } from "next/server";
import {
  createSupabaseServerClient,
  MissingSupabaseEnvError,
} from "@/lib/supabase";

const ENV_KEYS = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
] as const;

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ ok: false, message: "Not found" }, { status: 404 });
  }

  const env = Object.fromEntries(
    ENV_KEYS.map((key) => [key, Boolean(process.env[key]?.trim())]),
  ) as Record<(typeof ENV_KEYS)[number], boolean>;

  const missing = ENV_KEYS.filter((key) => !env[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: `환경변수가 비어 있습니다: ${missing.join(", ")}. .env.local에 값을 입력한 뒤 개발 서버를 다시 시작해 주세요.`,
        env,
      },
      { status: 500 },
    );
  }

  try {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.from("consultations").select("id").limit(1);

    if (error) {
      console.error("[consultation test]", error.message);
      return NextResponse.json(
        {
          ok: false,
          message: error.message,
          env,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Supabase 연결에 성공했습니다.",
      env,
    });
  } catch (cause) {
    console.error("[consultation test]", cause);
    const message =
      cause instanceof MissingSupabaseEnvError
        ? cause.message
        : cause instanceof Error
          ? cause.message
          : "Supabase 연결에 실패했습니다.";
    return NextResponse.json({ ok: false, message, env }, { status: 500 });
  }
}
