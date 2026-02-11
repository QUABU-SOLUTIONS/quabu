
-- Tighten UPDATE policy: only allow confirming unconfirmed subscriptions
DROP POLICY "Allow update by token" ON public.newsletter_subscribers;
CREATE POLICY "Allow confirm by token" 
ON public.newsletter_subscribers 
FOR UPDATE 
USING (confirmed = false);

-- Tighten INSERT to prevent overwriting confirmed subscribers
DROP POLICY "Allow anonymous insert" ON public.newsletter_subscribers;
CREATE POLICY "Allow anonymous insert" 
ON public.newsletter_subscribers 
FOR INSERT 
WITH CHECK (confirmed = false);
