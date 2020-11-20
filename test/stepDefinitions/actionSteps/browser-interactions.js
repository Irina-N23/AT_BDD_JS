"use strict";

const PageFactory = require("../../utilities/pageObjects/page-factory");
const pageFactory = new PageFactory();
const {When, setDefaultTimeout} = require("cucumber");
setDefaultTimeout(60 * 1000);


When(/^I open "([^"]*)" home page$/, async pageName => {
    const chosenPage = await pageFactory.getPage(pageName);
    return chosenPage.openPage();
});

When(/^I'm on the AngularJS "([^"]*)" page$/, async pageName => {
    const foundPage = await pageFactory.getAngularJsPage(pageName);
    const currentUrl = await browser.getCurrentUrl();
    if (foundPage.URL !== currentUrl) {
        throw new Error(`(!) current URL doesn't match to found page URL:`
        + `\n- current URL: ${currentUrl};`
        + `\n- found page URL: ${foundPage.URL}.`)
    }
});