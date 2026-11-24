"""Partner priority rules, checked against the running preview."""
import unittest
from playwright.sync_api import sync_playwright


class PartnerOrderTest(unittest.TestCase):
    def test_requested_partner_priorities(self):
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 1800})
            page.goto("http://localhost:8080/partners", wait_until="networkidle")
            names = page.locator("section").last.locator("h3").all_text_contents()
            with self.subTest("low-priority partners are last"):
                self.assertEqual(names[-2:], ["MetaFrazo", "getCodeLess"])
            with self.subTest("Revyz precedes Nuvolar"):
                self.assertEqual(names[names.index("Nuvolar") - 1], "Revyz")
            card = page.locator('a[href="https://www.revyz.io/"]')
            card.scroll_into_view_if_needed()
            page.wait_for_timeout(1800)
            self.assertEqual(card.count(), 1)
            self.assertTrue(card.locator("img").evaluate("i => i.complete && i.naturalWidth > 0"))
            card.screenshot(path="/tmp/browser/revyz-partner.png")
            browser.close()

    def test_hycu_follows_tempo(self):
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            for viewport in ({"width": 1019, "height": 855}, {"width": 390, "height": 844}):
                with self.subTest(viewport=viewport):
                    page = browser.new_page(viewport=viewport)
                    page.goto("http://localhost:8080/partners?lang=en", wait_until="networkidle")
                    names = page.locator("section").last.locator("h3").all_text_contents()
                    self.assertEqual(names[names.index("Tempo") + 1], "HYCU")
                    card = page.get_by_role("link").filter(has=page.get_by_role("heading", name="HYCU", exact=True))
                    self.assertEqual(card.get_attribute("href"), "https://www.hycu.com/")
                    card.scroll_into_view_if_needed()
                    page.wait_for_timeout(1800)
                    self.assertTrue(card.locator("img").evaluate("i => i.complete && i.naturalWidth > 0"))
                    card.screenshot(path=f"/tmp/browser/hycu-{viewport['width']}.png")
                    page.close()
            browser.close()


if __name__ == "__main__":
    unittest.main()