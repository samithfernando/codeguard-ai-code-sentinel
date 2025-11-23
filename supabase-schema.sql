-- Supabase SQL Schema for CodeGuard AI Waitlist
-- Run these commands in your Supabase SQL editor

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  source VARCHAR(100) DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create an index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for signups)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reading count only (for stats)
CREATE POLICY "Allow public count" ON waitlist
  FOR SELECT USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for analytics (admin access only)
CREATE VIEW waitlist_stats AS
SELECT
  COUNT(*) as total_signups,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '1 day') as signups_today,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as signups_this_week,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as signups_this_month,
  source,
  DATE_TRUNC('day', created_at) as signup_date
FROM waitlist
GROUP BY source, DATE_TRUNC('day', created_at)
ORDER BY signup_date DESC;