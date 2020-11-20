"use strict";

const BasePage = require("../baseObjects/base-page");
const Element = require("../baseObjects/base-element");


class TutorialPage extends BasePage {
    constructor() {
        super();
        this.URL = "https://docs.angularjs.org/tutorial";

        this.pageElements = [
            new Element("Search Field", by.model('q')),
            new Element("ngBindHtml Link",
                                    by.xpath("//h4/..//a[text()='ngBindHtml']"))
        ]
    }
}

module.exports = TutorialPage;