import { createClient } from '@supabase/supabase-js';

const URL = 'https://nfawzhyflwypaeacbseu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mYXd6aHlmbHd5cGFlYWNic2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwODYwMDEsImV4cCI6MjA2MDY2MjAwMX0.i04GG0X5HaHE2UMqebfSRcaQEl7VFLT6nl9b1U6ohn4';

export const supabase = createClient(URL, API_KEY);