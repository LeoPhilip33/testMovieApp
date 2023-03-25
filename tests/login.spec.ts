import { test, expect } from '@playwright/test';
import { COMMENCER, ENVOYER } from './constantes/global';

const wrongAccount = {
  email: 'test',
  password: 'test'
}
const goodAccount = {
  email: 'playwright@playwright.fr',
  password: 'playwright'
}

test('Wrong Login', async ({ page }) => {
  await page.goto('https://movieapp-ca36e.web.app/');
  await page.locator('.child-welcome-page').getByText(COMMENCER).click();
  await page.locator('input[type="email"]').fill(wrongAccount.email);
  await page.locator('input[type="password"]').fill(wrongAccount.password);
  await page.locator('.first-page').getByText(ENVOYER).isDisabled();
  await expect(page).toHaveURL('https://movieapp-ca36e.web.app/');
});

test('Good Login', async ({ page }) => {
  await page.goto('https://movieapp-ca36e.web.app/');
  await page.locator('.child-welcome-page').getByText(COMMENCER).click();
  await page.locator('input[type="email"]').fill(goodAccount.email);
  await page.locator('input[type="password"]').fill(goodAccount.password);
  await page.locator('.first-page').getByText(ENVOYER).click();
  await page.locator('tp-movies-search-container');
});
