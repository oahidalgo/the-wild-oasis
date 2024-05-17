import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://bdhrbxeengfzehiltbsm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkaHJieGVlbmdmemVoaWx0YnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4ODUxNDgsImV4cCI6MjAzMTQ2MTE0OH0.njDNwPMlZmF7_LRJfzZS657D6WtbJNVlHKgMDLPUqi8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
