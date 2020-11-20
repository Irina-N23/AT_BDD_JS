"use strict";

const {logger} = require("../../../config/logger-config");


class Page {
    constructor() {
        this.timeout = 40 * 1000;
        this.pageElements = [];
    }

    openPage(url) {
        logger.debug(`Opening page '${url}'.`);
        return browser.get(url, this.timeout);
    }

    async getCurrentUrl() {
        const currentUrl = await browser.getCurrentUrl();
        logger.debug(`Receiving current URL...\nReceived URL: ${currentUrl}.`);
        return currentUrl;
    }

    async getTitleOfPage() {
        const titleOfPage = await browser.getTitle();
        logger.debug(`Receiving title of current page...\n`
                    + `Received title of current page: '${titleOfPage}'.`);
        return titleOfPage;
    }

    async getElement(elementName) {
        const elementToFind = this.pageElements
                                 .find(element => element.name === elementName);
        if (elementToFind) {
            return elementToFind;
        } else {
            throw new Error(`(!) Element '${element.name}' has not been found`
                                + ` on page '${await this.getTitleOfPage()}'.`);
        }
    }

    wait(milliseconds) {
        logger.debug(`Waiting ${milliseconds} milliseconds.`);
        return browser.sleep(milliseconds);
    }
}

module.exports = Page;