import { Browser, BrowserContext } from 'playwright';
import qawolf from 'qawolf';

let browser: Browser;
let context: BrowserContext;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test('localhost', async () => {
  const page = await context.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
});
