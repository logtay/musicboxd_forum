import { createClient } from '@supabase/supabase-js';

const URL = 'https://your-supabase-url.supabase.co';
const API_KEY = 'your-supabase-api-key';

export const supabase = createClient(URL, API_KEY);