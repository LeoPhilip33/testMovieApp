import { test, expect } from '@playwright/test';
import { login } from '../functions/global';

const PLAYWRIGHT_USER = 'playwright@playwright.fr';

test('settings', async ({ page }) => {
    await login(page);
    await page.locator('img[alt="Profile Icon"]').click()
    await page.getByText(PLAYWRIGHT_USER);
});
