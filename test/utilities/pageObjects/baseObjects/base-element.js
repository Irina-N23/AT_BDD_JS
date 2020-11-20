"use strict";

const {logger} = require("../../../config/logger-config");
const EC = protractor.ExpectedConditions;


class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.element = element(locator);
    }

    timeout = 40 * 1000;

    async clickOn() {
        browser.wait(EC.visibilityOf(this.element), this.timeout);
        logger.debug(`Clicking on '${this.name}'.`);
        return this.element.click();
    }

    async inputText(...keys) {
        browser.wait(EC.visibilityOf(this.element), this.timeout);
        logger.debug(`Sending keys to '${this.name}'.`);
        await this.element.clear();
        await this.element.sendKeys(keys.join(""));
    }

    async getTextFromElement() {
        browser.wait(EC.presenceOf(this.element), this.timeout);
        const textFromElement = await this.element.getText();
        logger.debug(`Receiving text from '${this.name}'...\n`
                    + `Received text: '${textFromElement}'.`);
        return textFromElement;
    }
}

module.exports = Element;