import { createBrowserClient } from "@supabase/ssr";

// ponytail: عميل المتصفح فقط. أضف عميل الخادم حين يوجد مسار يحتاجه فعلاً.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
