import {
  expect,
  test,
} from '@playwright/test';

const LOGIN_URL = /.*\/api\/.*\/login/;

test.describe("Login", () => {
  /**
   * Open login/register modal
   */
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.ENVIRONMENT_URL ?? "https://gcakes-fe.vercel.app/");
    try{
      await page.locator("#sp-form-222665").getByRole("button").first().click({
        timeout: 10000
      });
    }catch(e){

    }
    await page.getByTestId("menuAccount").click();
  })

  test("Correct login credentials", async ({ page }) => {
    await page.getByTestId("inputUsername").click();
    await page.getByTestId("inputUsername").fill("SampleUser5");
    await page.getByTestId("inputPassword").click();
    await page.getByTestId("inputPassword").fill("test");

    const loginWaitResponse = page.waitForResponse(LOGIN_URL);
    await page.getByTestId("btnLogin").click();

    const loginResponse = await loginWaitResponse;

    await expect(loginResponse.status()).toBe(200);

    await expect(page).toHaveURL(/.*\/SampleUser5\/profile/);
  });

  test("Missing Password", async ({ page }) => {

    await page.getByTestId("inputUsername").click();
    await page.getByTestId("inputUsername").fill("SampleUser5");

    await page.getByTestId("btnLogin").click();
    const confirmLogin = await page.locator('input[data-testid=inputPassword]:invalid')

    await expect(confirmLogin).toBeVisible()
  });

  test("Missing Username", async ({ page }) => {

    await page.getByTestId("inputPassword").click();
    await page.getByTestId("inputPassword").fill("test");

    await page.getByTestId("btnLogin").click();
    const confirmLogin = await page.locator('input[data-testid=inputUsername]:invalid')

    await expect(confirmLogin).toBeVisible()
  });

  test("Missing login credentials", async ({ page }) => {

    await page.getByTestId("btnLogin").click();
    const confirmLogin = await page.locator('input[data-testid=inputUsername]:invalid')

    await expect(confirmLogin).toBeVisible()
  });

}) 