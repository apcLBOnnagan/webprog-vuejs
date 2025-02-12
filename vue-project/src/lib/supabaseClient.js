import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://pywcxtouxgqmynvmptln.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5d2N4dG91eGdxbXludm1wdGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTY2MDksImV4cCI6MjA1MzgzMjYwOX0.1f7quvANv1Hbfj80d_P8uAFRzVlRtIo-TgG6Crmdg9Y')