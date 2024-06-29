import { expect, test } from "@playwright/test";

test.describe("Campanhas - Listar", () => {
  test("verifica lista de campanhas", async ({ page }) => {
    await page.goto("/dashboard/campaigns");
    await expect(page).toHaveTitle(/Campaigns Dashboard/);
  });
});
