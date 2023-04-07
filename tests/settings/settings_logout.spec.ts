import { test, expect } from '@playwright/test';
import { DECONNECTER, PLAYWRIGHT_USER } from '../constantes/global';
import { login } from '../functions/global';

test('logout from setting page', async ({ page }) => {
    await login(page);
    await page.locator('img[alt="Profile Icon"]').click()
    await page.getByText(PLAYWRIGHT_USER);
    await page.getByText(DECONNECTER).click();
    await expect(page).toHaveURL('https://movieapp-ca36e.web.app/');
});
