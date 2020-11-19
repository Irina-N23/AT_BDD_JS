"use strict";

const PageFactory = require("../../utilities/pageObjects/page-factory");
const pageFactory = new PageFactory();
const {When, setDefaultTimeout} = require("cucumber");
setDefaultTimeout(60 * 1000);


When(/^I click on "([^"]*)"$/, async (elementName) => {
    const page = await pageFactory.getPage();
    const button = await page.getElement(elementName);
    await button.clickOn();
});

When("I type {string} into the {string}",
                                        async function(typedText, elementName) {
    const page = await pageFactory.getPage();
    const searchField = await page.getElement(elementName);
    await searchField.inputText(typedText);
});