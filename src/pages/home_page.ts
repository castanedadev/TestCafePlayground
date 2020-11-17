import { ReactSelector } from 'testcafe-react-selectors';
import BasePage from './base_page';

export default class HomePage extends BasePage {
    // Following alphabetic order to easily find selectors by name
    public appLogo: Selector;
    public detailsButton: Selector;
    public mainTitle: Selector;
    public startButton: Selector;
    public welcomeBlock: Selector;
    public welcomeDescription: Selector;

    constructor() {
        super();
        this.appLogo = ReactSelector('img').withProps('alt', /Logo/i);
        this.detailsButton = ReactSelector('button').withText(/Details/i);
        this.startButton = ReactSelector('button').withText(/Start/i);
        this.mainTitle = ReactSelector('h3').withProps({'className': 'welcome-intro'});
        this.welcomeBlock = ReactSelector('div').withProps({ 'className': 'welcome-block' });
        this.welcomeDescription = ReactSelector('p').withProps({ 'className': 'welcome-description'});
    }
}