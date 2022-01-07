import { Given, When, Then } from 'cucumber';

const Homepage = require('../page_objects/homepage')
const { config } = require('../../wdio.conf');

Given(/^the user navigates to the website$/, () => {
    browser.url(config.baseUrl);
});

When(/^the user selects "([^"]*)" section$/, (sectionType) => {
    Homepage.clickSectionLink(sectionType);
});

Then(/^the start searching box should be disabled$/, () => {
    expect(Homepage.startSearchBox).toBeDisabled();

});
