class Homepage {
    //#region 'Homepage Elements'
    get homepageFoodLink() {
        return $('li:nth-of-type(4) > .js-ga-publisher.swipey__anchor > span');
    }

    get startSearchBox() {
        return $('#js-typeahead-search');
    }
    //#endregion

    clickSectionLink(sectionType) {
        if (sectionType === 'food') {
            this.homepageFoodLink.waitForClickable();
            this.homepageFoodLink.click();
        }
    }
}

module.exports = new Homepage();
