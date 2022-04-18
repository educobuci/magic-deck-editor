import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:4000/editor')
  const item = page.locator('li:nth-child(2)')
  await expect(item).toContainText('Delver of Secrets')
})
