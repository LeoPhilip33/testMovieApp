import { test, expect } from '@playwright/test';
import { PLAYWRIGHT_USER } from '../constantes/global';
import { login } from '../functions/global';

const YOUR_ACCOUNT = 'Your account';
const CHANGE_EMAIL_ADRESSE = "Change your email adress";

test('logout from setting page', async ({ page }) => {
    await login(page);
    await page.locator('img[alt="Profile Icon"]').click()
    await page.getByText(YOUR_ACCOUNT).click();
    await page.getByText(PLAYWRIGHT_USER).click();
    await page.getByText(CHANGE_EMAIL_ADRESSE)
});
