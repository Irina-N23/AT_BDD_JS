"use strict";

const {Then, setDefaultTimeout} = require("cucumber");
setDefaultTimeout(60 * 1000);
const {expect} = require("chai");
const PageFactory = require("../../utilities/pageObjects/page-factory");
const pageFactory = new PageFactory();


Then(/^Page title should (not )?include text "([^"]*)"$/,
                                               async (notArg, expectedText) => {
    const currentPage = await pageFactory.getPage();
    const titleOfPage = await currentPage.getTitleOfPage();
    if (notArg) {
        expect(titleOfPage).to.not.include(expectedText);
    } else {
        expect(titleOfPage).to.include(expectedText);
    }
});

Then(/^Current URL should (be equal to|include text) "([^"]*)"$/,
                                          async (shouldBe, expectedVersion) => {
    const currentPage = await pageFactory.getPage();
    const tutorialUrl = await currentPage.getCurrentUrl();
    if (shouldBe === "be equal to") {
        expect(tutorialUrl).to.be.eql(expectedVersion);
    } else {
        expect(tutorialUrl).to.include(expectedVersion);
    }
});

Then(/^Text of "([^"]*)" should be equal to "([^"]*)"$/,
                                          async (elementName, expectedText) => {
    const currentPage = await pageFactory.getPage();
    const requiredElement = await currentPage.getElement(elementName)
    const textOfElement = await requiredElement.getTextFromElement();
    expect(textOfElement).to.include(expectedText);
});