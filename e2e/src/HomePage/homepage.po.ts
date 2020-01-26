import {browser, element, by} from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/');
    }

    getHomeLogo() {
        return element(by.xpath('/html/body/app-root/div/img'));
    }

    getHeaderText() {
        return element(by.xpath('/html/body/app-root/div/h1'));
    }
}