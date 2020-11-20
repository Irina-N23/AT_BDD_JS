"use strict";

const fsExtra = require("fs-extra");
const path = require("path");

const reportsLocation = path.resolve(__dirname, "../../reports");
fsExtra.emptydirSync(reportsLocation);