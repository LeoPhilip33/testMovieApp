import { test, expect } from '@playwright/test';
import { A_LA_UNE, COMMENCER, CONTINUER_A_REGARDER, ENVOYER, GENRE, Genres } from './constantes/global';
import { login } from './functions/global';

test('Home Page', async ({ page }) => {
  await login(page);
  await page.getByText(A_LA_UNE);
  await page.getByText(CONTINUER_A_REGARDER);
  await page.getByText(GENRE);
  await page.getByText(Genres.AllGenres);
  await page.getByText(Genres.Action);
  await page.getByText(Genres.Adventure);
  await page.getByText(Genres.Animation);
  await page.getByText(Genres.Comedy);
  await page.getByText(Genres.Crime);
  await page.getByText(Genres.Documentary);
  await page.getByText(Genres.Drama);
  await page.getByText(Genres.Family);
});