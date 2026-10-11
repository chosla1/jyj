import "server-only";
import { createClient } from "@supabase/supabase-js";

const MISSING_ENV_MESSAGE =
  "Supabase 환경변수가 설정되지 않았습니다. .env.local의 NEXT_PUBLIC_SUPABASE_URL과 SUPABASE_SERVICE_ROLE_KEY를 입력한 뒤 개발 서버를 다시 시작해 주세요.";

export class MissingSupabaseEnvError extends Error {
  constructor() {
    super(MISSING_ENV_MESSAGE);
    this.name = "MissingSupabaseEnvError";
  }
}

/**
 * 서버 전용 Supabase 클라이언트.
 * 서비스 롤 키를 쓰므로 라우트 핸들러 등 서버 코드에서만 import 한다.
 * `server-only`가 클라이언트 컴포넌트 번들에 포함되면 빌드를 실패시킨다.
 */
export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url || !serviceRoleKey) {
    throw new MissingSupabaseEnvError();
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
