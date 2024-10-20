import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uwatvykbqdllecajraxa.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3YXR2eWticWRsbGVjYWpyYXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MDkyMTYsImV4cCI6MjA0NDk4NTIxNn0.8_NVPD1F8TR8Xa0pNh74col99TJBvbbnSZj6nQJGajo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
