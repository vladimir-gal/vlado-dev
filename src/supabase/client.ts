import type { RequestEventLoader } from "@builder.io/qwik-city";
import { createServerClient } from "supabase-auth-helpers-qwik";

const client = (event: RequestEventLoader) =>
  createServerClient(
    event.env.get("PUBLIC_SUPABASE_URL")!,
    event.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
    event
  );

export default client;
