"use strict";

const SearchResultPage = require("./search-result-page");


class ChosenVersionPage extends SearchResultPage {
    constructor() {
        super();
        this.URL = "https://code.angularjs.org/1.6.10/docs/api/ng/"
                                                       + "directive/ngBindHtml";
    }
}

module.exports = ChosenVersionPage;