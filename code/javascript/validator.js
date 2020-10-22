"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var pathToSpec = path_1.default.join(__dirname, '../../versions/1/spec.yml');
console.log({ pathToSpec: pathToSpec });
var spec = fs_1.default.readFileSync(pathToSpec, 'utf8');
function isValid(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            console.log({ pathToSpec: pathToSpec, length: spec.length, spec: spec });
            return [2 /*return*/, !!input];
        });
    });
}
exports.isValid = isValid;
