"use strict";

const {When, setDefaultTimeout} = require("cucumber");
setDefaultTimeout(60 * 1000);
const PageFactory = require("../../utilities/pageObjects/page-factory");
const pageFactory = new PageFactory();


When("I wait {int} second(s)", async function(secondsToWait) {
    const page = await pageFactory.getPage();
    return page.wait(secondsToWait * 1000);
});