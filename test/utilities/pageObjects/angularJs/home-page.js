"use strict";

const BasePage = require("../baseObjects/base-page");
const Element = require("../baseObjects/base-element");


class HomePage extends BasePage {
    constructor() {
        super();
        this.URL = "https://angularjs.org/";

        this.pageElements = [
            new Element("Learn Button", by.xpath("//a[text()='Learn']")),
            new Element("Tutorial Link", by.xpath("//a[text()='Tutorial']"))
        ]
    }

    openPage() {
        return super.openPage(this.URL);
    }

    getTitleOfPage() {
        return super.getTitleOfPage();
    }
}

module.exports = HomePage;