"use strict";

const yargs = require("yargs").argv;
const path = require("path");
const reporter = require("cucumber-html-reporter");
const {logger} = require("./logger-config");


const reportOptions = {
    theme: "bootstrap",
    jsonFile: path.join(__dirname, "../reports/report.json"),
    output: path.join(__dirname, "../reports/cucumber-report.html"),
    reportSuitesAsScenarios: true,
    launchReport: true
}


exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [path.resolve("./test/features/*.feature")],

    capabilities: {
        browserName: yargs.browser || "chrome",
        chromeOptions: {
            args: ["--no-sandbox"]
        },
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1
    },

    disableChecks: true,
    directConnect: true,

    cucumberOpts: {
        require: [path.resolve("./test/stepDefinitions/**/*.js")],
        ignoreUncaughtExceptions: true,
        format: [
            "json:./test/reports/report.json",
            "./node_modules/cucumber-pretty"
        ],
        tags: yargs.tags || "@common"
    },

    onPrepare: () => {
        logger.info("Enabling waiting for Angular...");
        browser.waitForAngularEnabled(true);
        return browser.manage().window().setSize(1920, 1080);
    },

    afterLaunch: () => {
        return reporter.generate(reportOptions);
    },

    onComplete: () => {
        logger.info("Closing browser...");
        return browser.close();
    }
}