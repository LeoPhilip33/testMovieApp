import { test, expect } from '@playwright/test';
import { PLAYWRIGHT_USER } from '../constantes/global';
import { login } from '../functions/global';

test('change profile image', async ({ page }) => {
    // await login(page);
    // await page.locator('img[alt="Profile Icon"]').click();
    // await page.getByText(PLAYWRIGHT_USER);
    // await page.locator('img[alt="user-image"]').setInputFiles('../fixtures/profile1.jpg');
});
