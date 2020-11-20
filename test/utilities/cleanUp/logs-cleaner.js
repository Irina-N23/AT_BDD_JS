"use strict";

const fsExtra = require("fs-extra");
const path = require("path");

const logsLocation = path.resolve("./combined.log");
fsExtra.removeSync(logsLocation);