import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jcawwszbctprlnalhptm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjYXd3c3piY3RwcmxuYWxocHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNTgyNjYsImV4cCI6MjA0NDczNDI2Nn0.EBq45dCcF9X-Z65VnV86spZ4s2-JKU4Io2_R7sZgBaA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
 