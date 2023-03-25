import { test, expect } from '@playwright/test';
import { A_LA_UNE, COMMENCER, CONTINUER_A_REGARDER, ENVOYER, GENRE, Genres } from './constantes/global';
import { login } from './functions/global';

test('Profile Page', async ({ page }) => {
  await login(page);
  await page.locator('footer > ul > li').last().click();
  await page.locator('img[alt="user-image"]');

  await page.locator('img[alt="bookmark"]');
  await page.locator('img[alt="history"]');
  await page.locator('img[alt="statistic"]');
});