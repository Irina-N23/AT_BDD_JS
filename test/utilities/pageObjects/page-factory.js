"use strict";

const EvernoteHomePage = require("./evernote/home-page");
const AngularJsHomePage = require("./angularJs/home-page");
const TutorialPage = require("./angularJs/tutorial-page");
const NgBindHtmlPage = require("./angularJs/search-result-page");
const ChosenVersionPage = require("./angularJs/version1.6.10-page");
const {logger} = require("../../config/logger-config");


class PageFactory {
    constructor() {
        this.listOfPages = [
            new EvernoteHomePage(),
            new AngularJsHomePage(),
            new TutorialPage(),
            new NgBindHtmlPage(),
            new ChosenVersionPage()
        ]
    }

    async getPage(pageName) {
        switch(pageName) {
            case "AngularJS":
                return new AngularJsHomePage();
            case "Evernote":
                logger.info("Disabling waiting for Angular...");
                browser.waitForAngularEnabled(false);
                return new EvernoteHomePage();
            case undefined:
                const currentUrl = await browser.getCurrentUrl();
                const foundPage = this.listOfPages
                                         .find(page => page.URL === currentUrl);
                return foundPage;
            default:
                throw new Error(`(!) Page '${pageName}' has not been found.`);
        }
    }

    async getAngularJsPage(pageName) {
        switch(pageName) {
            case "home":
                return new AngularJsHomePage();
            case "tutorial":
                return new TutorialPage();
            case "ngBindHtml":
                return new NgBindHtmlPage();
            case "version 1.6.10":
                return new ChosenVersionPage();
            default:
                throw new Error(`(!) Page '${pageName}' has not been found.`);
        }
    }
}

module.exports = PageFactory;