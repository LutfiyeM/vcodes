import { When, Then } from 'cucumber';

const Restaurant_Voucher = require('../page_objects/restaurant_voucher_page');

When(/^the user filters location "([^"]*)" and day "([^"]*)" and people "([^"]*)"$/, (locationType, dayType, numberOfPeople) => {
    Restaurant_Voucher.setFilterLocationForRestaurantVoucher(locationType);
    Restaurant_Voucher.setDayFilterForRestaurantVoucher(dayType);
    Restaurant_Voucher.setNumberOfPeopleFilterForRestaurantVoucher(numberOfPeople);
    Restaurant_Voucher.clickFindRestaurantVoucherButton();
});

Then(/^the search results are listed in the page$/, () => {
    expect(Restaurant_Voucher.checkSearchLocationFilter()).toBe(true);
});
