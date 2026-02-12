
-- Remove overly permissive SELECT and DELETE policies
DROP POLICY IF EXISTS "Allow read by token" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Allow delete by unsubscribe token" ON public.newsletter_subscribers;
