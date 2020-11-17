import HomePage from "../src/pages/home_page";
import { waitForReact } from "testcafe-react-selectors";

// Page-Object instances
const homePage: HomePage = new HomePage();

// Test constants
const expectedMainTitle: string = 'citii.io';
const BASE_URL: string = 'https://citii-io.herokuapp.com/';
const expectedPageTitle: string = 'Citii - Cost of Living Comparison';

fixture`Verify components in home page`
    .page(BASE_URL).meta('app', 'citii.io').meta('feature', 'home').beforeEach(async (t) => {
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
})