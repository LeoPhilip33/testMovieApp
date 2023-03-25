import { COMMENCER, ENVOYER, playwrightAccount } from "../constantes/global";

export async function login(page): Promise<void>{
    await page.goto('https://movieapp-ca36e.web.app/');
    await page.locator('.child-welcome-page').getByText(COMMENCER).click();
    await page.locator('input[type="email"]').fill(playwrightAccount.email);
    await page.locator('input[type="password"]').fill(playwrightAccount.password);
    await page.locator('.first-page').getByText(ENVOYER).click();
    await page.locator('tp-movies-search-container');
}