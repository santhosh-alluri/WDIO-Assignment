export class BasePage {
    open(url: string) {
        browser.url(url);
    }
}