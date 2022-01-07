class restaurant_voucher_page {
    //#region 'Restaurant Voucher Page Elements'
    get filterLocationTextBox() {
        return $('#google-autocomplete');
    }

    getFilterDayDropdown(dayType) {
        return $(`select#day-select > option[label=${dayType}]`);
    }

    getFilterNumberOfPeopleDropdown(numberOfPeople) {
        return $(`select#people-select > option[label='${numberOfPeople}']`);
    }

    get findRestaurantVouchersButton() {
        return $('form > button[role=\'button\']');
    }

    get headerSearchBox() {
        return $('.inline-flex.relative');
    }
    //#endregion

    setFilterLocationForRestaurantVoucher(locationType) {
        this.filterLocationTextBox.setValue(locationType);
        browser.pause(800);
        browser.keys("ArrowDown");
        browser.pause(100);
        browser.keys("Enter");
    }

    setDayFilterForRestaurantVoucher(dayType) {
        this.getFilterDayDropdown(dayType).click();
    }

    setNumberOfPeopleFilterForRestaurantVoucher(numberOfPeople) {
        this.getFilterNumberOfPeopleDropdown(numberOfPeople).click();
    }

    clickFindRestaurantVoucherButton() {
        this.findRestaurantVouchersButton.waitForClickable();
        this.findRestaurantVouchersButton.click();
    }

    checkSearchLocationFilter() {
        this.headerSearchBox.waitForDisplayed();
        return browser.getUrl().includes(this.filterLocationTextBox.getValue().substr(0,6));
    }
}

module.exports = new restaurant_voucher_page();
