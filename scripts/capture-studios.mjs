import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const outDir = resolve("public/case-studies/kadeep");
mkdirSync(outDir, { recursive: true });

const shots = [
  { file: "01-create.png", y: 0 },
  { file: "02-ai-generate.png", y: 1400 },
  { file: "03-self-heal.png", y: 2800 },
  { file: "04-accessibility.png", y: 3600 },
  { file: "05-schedule.png", y: 6200 },
  { file: "06-evidence.png", y: 7000 },
];

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("https://studios.kadeep.ai", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

for (const shot of shots) {
  await page.evaluate((y) => window.scrollTo(0, y), shot.y);
  await page.waitForTimeout(400);
  await page.screenshot({
    path: resolve(outDir, shot.file),
    type: "png",
  });
  console.log("wrote", shot.file);
}

await browser.close();
