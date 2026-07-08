/*
  # Create contact_messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, not null) - sender's name
      - `email` (text, not null) - sender's email
      - `message` (text, not null) - message content
      - `created_at` (timestamptz) - timestamp of submission
      - `is_read` (boolean) - whether the message has been read

  2. Security
    - Enable RLS on `contact_messages` table
    - Allow anonymous INSERT for contact form submissions (public can submit messages)
    - Restrict SELECT, UPDATE, DELETE to authenticated users only (site owner can manage messages)

  3. Notes
    - This table stores incoming contact form submissions from the portfolio website
    - Messages are inserted by anonymous visitors and managed by the authenticated site owner
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public (anonymous) to insert contact messages
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all messages
CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update messages (e.g., mark as read)
CREATE POLICY "Authenticated users can update contact messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete messages
CREATE POLICY "Authenticated users can delete contact messages"
  ON contact_messages FOR DELETE
  TO authenticated
  USING (true);

-- Add index for sorting by created_at
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages(created_at DESC);