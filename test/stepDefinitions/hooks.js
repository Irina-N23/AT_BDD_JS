"use strict";

const {After, setDefaultTimeout, Status} = require("cucumber");
setDefaultTimeout(60 * 1000);

After(async function(testCase) {
    if (testCase.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        const decodedImage = new Buffer.from(screenshot, "base64");
        return this.attach(decodedImage, "image/png");
    }
});