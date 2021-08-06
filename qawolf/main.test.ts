import { launch } from 'qawolf';

const { URL } = process.env;

test('', async () => {
  const { context } = await launch();
  const page = await context.newPage();
  await page.goto(String(URL));
});
