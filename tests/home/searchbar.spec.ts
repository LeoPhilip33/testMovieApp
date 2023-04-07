import { test, expect } from '@playwright/test';
import { login } from '../functions/global';

const SEARCH:string = 'test';
const RESULTATS:string = 'Résultats';

test('searchabar', async ({ page }) => {
  await login(page);
  await page.locator('.search-input-container input').fill(SEARCH);
  await page.locator('img[alt="Search Icon"]').click();
  await page.getByText(`Search for: ${SEARCH}`);
  await page.getByText(RESULTATS);
});
