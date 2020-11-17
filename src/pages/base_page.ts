import { ClientFunction } from "testcafe";

export default class BasePage {
    public getPageUrl() {
        return ClientFunction(() => window.location.href);
      }
    
      public getPageTitle() {
        return ClientFunction(() => document.title);
      }
}