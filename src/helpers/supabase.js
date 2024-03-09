import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://igzzuqpxoynpmrddzrly.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnenp1cXB4b3lucG1yZGR6cmx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMjc4NzUsImV4cCI6MjAyNDYwMzg3NX0.AJ234XAiloRx4cWaXmcZw3k7kvhAphiw7GXP977zj4E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
