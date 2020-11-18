import BasePage from './base_page';
import { ReactSelector } from 'testcafe-react-selectors';

export default class DetailsPage extends BasePage {
  public projectLogo: Selector;
  public reactLogo: Selector;
  public returnButton: Selector;
  public teleportLogo: Selector;

  constructor() {
    super();
    this.projectLogo = ReactSelector('img').withProps({
      alt: 'Project Logo',
    });
    this.reactLogo = ReactSelector('img').withProps({ alt: 'React Logo' });
    this.returnButton = ReactSelector('button').withText(/Return/i);
    this.teleportLogo = ReactSelector('img').withProps({ alt: 'Teleport Logo' });
  }
}
