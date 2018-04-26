"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const util_1 = require("util");
const BlueBird = require("bluebird");
exports.default = util_1.promisify && util_1.promisify(fs_1.mkdir) || BlueBird.promisify(fs_1.mkdir);
//# sourceMappingURL=index.js.map