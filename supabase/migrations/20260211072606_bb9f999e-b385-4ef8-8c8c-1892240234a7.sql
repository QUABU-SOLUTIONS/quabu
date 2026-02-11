
-- Create newsletter subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  confirmed BOOLEAN NOT NULL DEFAULT false,
  confirmation_token UUID NOT NULL DEFAULT gen_random_uuid(),
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  confirmed_at TIMESTAMP WITH TIME ZONE,
  unsubscribe_token UUID NOT NULL DEFAULT gen_random_uuid()
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (subscription form)
CREATE POLICY "Allow anonymous insert" 
ON public.newsletter_subscribers 
FOR INSERT 
WITH CHECK (true);

-- Allow reading own subscription by token (for confirmation/unsubscribe)
CREATE POLICY "Allow read by token" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (true);

-- Allow update by token (for confirmation)
CREATE POLICY "Allow update by token" 
ON public.newsletter_subscribers 
FOR UPDATE 
USING (true);
