import { expect, test } from "@playwright/test";

test.describe("Campanhas - Listar", () => {
  test("verifica lista de campanhas", async ({ page }) => {
    await page.goto("/dashboard/campaigns");
    await expect(page).toHaveTitle(/Campaigns Dashboard/);
  });

  test("verifica se a tabela de campanhas está preenchida", async ({
    page,
  }) => {
    await page.goto("/dashboard/campaigns");
    await expect(page.locator("tbody tr")).toHaveCount(14);
  });
});

test.describe("Campanhas - Criar", () => {
  test("test", async ({ page }) => {
    await page.goto("http://localhost:3000/dashboard/campaigns");
    await page.getByRole("button", { name: "Nova Campanha" }).click();
    await page.getByPlaceholder("Nome da campanha").click();
    await page
      .getByPlaceholder("Nome da campanha")
      .fill("Campanha teste playwright");
    await page
      .locator("div")
      .filter({ hasText: /^Data início:29\/06\/2024$/ })
      .getByRole("button")
      .click();
    await page.locator("td").filter({ hasText: /^28$/ }).nth(1).click();
    await page.getByRole("gridcell", { name: "30" }).nth(1).click();
    await page.getByRole("button", { name: "29/06/" }).click();
    await page.locator("td").filter({ hasText: /^28$/ }).nth(1).click();
    await page.getByRole("gridcell", { name: "2", exact: true }).nth(1).click();
    await page.getByLabel("Categoria").click();
    await page.getByLabel("Categoria 1").click();
    await page.getByRole("button", { name: "Adicionar" }).click();
    await page.getByRole("status").click();
  });
});
