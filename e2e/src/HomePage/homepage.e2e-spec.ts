import { HomePage } from './homepage.po';

describe('Home page Test', () => {
    let home: HomePage;

    beforeAll(() => {
        home = new HomePage();
        home.navigateTo();
    });

    it('Test Header and Logo', () => {
        expect(home.getHeaderText().isPresent()).toBeTruthy();
        expect(home.getHomeLogo().isPresent()).toBeTruthy();
    });
});
