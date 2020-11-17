import { waitForReact } from "testcafe-react-selectors";
import HomePage from "../src/pages/home_page";

const BASE_URL: string = 'https://citii-io.herokuapp.com/';
const homePage:HomePage = new HomePage();

fixture `Verify components in home page`
    .page(BASE_URL).meta('app', 'citii.io').meta('feature', 'home').beforeEach(async (t) => {
    await waitForReact();
});

test(`It should contain components`, async (t) => {
    await t.expect(homePage.detailsButton.visible).ok();
})