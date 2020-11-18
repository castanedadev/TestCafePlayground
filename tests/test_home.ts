import HomePage from '../src/pages/home_page';
import { waitForReact } from 'testcafe-react-selectors';
import DetailsPage from '../src/pages/details_page';

// Page-Object instances
const homePage: HomePage = new HomePage();
const detailsPage: DetailsPage = new DetailsPage();

// Test constants
const expectedMainTitle: string = 'citii.io';
const BASE_URL: string = 'https://citii-io.herokuapp.com/';
const expectedPageTitle: string = 'Citii - Cost of Living Comparison';

fixture`When app navigates to Home page`
  .meta('app', 'citii.io')
  .meta('feature', 'home')
  .page(BASE_URL)
  .beforeEach(async (t) => {
    await waitForReact();
  });

test(`It should contain expected components`, async (t) => {
  await t
    .expect(await homePage.getPageTitle().apply(this))
    .eql(expectedPageTitle, 'Page title matches expected value')
    .expect(homePage.appLogo.visible)
    .ok()
    .expect(homePage.mainTitle.visible)
    .ok()
    .expect(homePage.welcomeDescription.visible)
    .ok()
    .expect(homePage.detailsButton.visible)
    .ok()
    .expect(homePage.startButton.visible)
    .ok()
    .expect(homePage.mainTitle.innerText)
    .eql(expectedMainTitle);
});

fixture`When button(s) is clicked from Home page`
  .meta('app', 'citii.io')
  .meta('feature', 'home-buttons')
  .page(BASE_URL)
  .beforeEach(async (t) => {
    await waitForReact();
  });

test('It should navigate to details page', async (t) => {
  await t
    .hover(homePage.detailsButton)
    .click(homePage.detailsButton)
    .expect(detailsPage.projectLogo.visible)
    .ok()
    .expect(detailsPage.teleportLogo.visible)
    .ok()
    .expect(detailsPage.reactLogo.visible)
    .ok()
    .expect(detailsPage.returnButton.visible)
    .ok();
});
