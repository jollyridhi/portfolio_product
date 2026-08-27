import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const outDir = resolve("public/case-studies/accessibility");
mkdirSync(outDir, { recursive: true });

const urls = [
  { file: "01-hero.png", url: "https://accessibility.kadeep.ai/", y: 0 },
  { file: "02-product.png", url: "https://accessibility.kadeep.ai/", y: 900 },
  { file: "03-mid.png", url: "https://accessibility.kadeep.ai/", y: 2000 },
  { file: "04-plan.png", url: "https://accessibility.kadeep.ai/", y: 3200 },
  { file: "05-pricing.png", url: "https://accessibility.kadeep.ai/", y: 4800 },
  { file: "06-footer.png", url: "https://accessibility.kadeep.ai/", y: 6200 },
];

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("https://accessibility.kadeep.ai/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);

for (const shot of urls) {
  await page.evaluate((y) => window.scrollTo(0, y), shot.y);
  await page.waitForTimeout(500);
  await page.screenshot({ path: resolve(outDir, shot.file), type: "png" });
  console.log("wrote", shot.file);
}

await browser.close();
