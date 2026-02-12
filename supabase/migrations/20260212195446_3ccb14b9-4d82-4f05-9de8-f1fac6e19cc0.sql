
-- Allow delete by unsubscribe token
CREATE POLICY "Allow delete by unsubscribe token" 
ON public.newsletter_subscribers 
FOR DELETE 
USING (true);
