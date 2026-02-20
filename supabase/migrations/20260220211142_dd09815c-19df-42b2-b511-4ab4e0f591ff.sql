
-- Add token-scoped RLS policies for newsletter_subscribers
-- Allow users to read their own subscription by confirmation or unsubscribe token
CREATE POLICY "Allow read by unsubscribe token"
ON public.newsletter_subscribers
FOR SELECT
USING (
  unsubscribe_token::text = current_setting('request.jwt.claims', true)::json->>'token'
  OR confirmation_token::text = current_setting('request.jwt.claims', true)::json->>'token'
);

-- Allow users to delete (unsubscribe) by unsubscribe token
CREATE POLICY "Allow delete by unsubscribe token"
ON public.newsletter_subscribers
FOR DELETE
USING (
  unsubscribe_token::text = current_setting('request.jwt.claims', true)::json->>'token'
);
