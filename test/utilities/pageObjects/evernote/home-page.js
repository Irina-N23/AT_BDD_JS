"use strict";

const Page = require("../baseObjects/base-page");


class HomePage extends Page {
    constructor() {
        super();
        this.URL = "https://evernote.com/";
    }

    openPage() {
        return super.openPage(this.URL);
    }

    getTitleOfPage() {
        return super.getTitleOfPage();
    }
}

module.exports = HomePage;