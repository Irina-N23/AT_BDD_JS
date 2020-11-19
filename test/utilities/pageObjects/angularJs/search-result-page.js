"use strict";

const BasePage = require("../baseObjects/base-page");
const Element = require("../baseObjects/base-element");


class NgBindHtmlPage extends BasePage {
    constructor() {
        super();
        this.URL = "https://docs.angularjs.org/api/ng/directive/ngBindHtml";

        this.pageElements = [
            new Element("Found Article Header",
                                         by.xpath("//h1[text()='ngBindHtml']")),
            new Element("Hide Button", by.xpath("//button[text()='Hide']")),
            new Element("Show Button", by.xpath("//button[text()='Show']")),
            new Element("Version Dropdown Menu",
                                             by.model("$ctrl.selectedVersion")),
            new Element(`Button with version 1.6.10`,
                                        by.xpath(`//optgroup[@label='Latest']//`
                                        + `option[@label='v1.6.10']`))
        ]
    }
}

module.exports = NgBindHtmlPage;