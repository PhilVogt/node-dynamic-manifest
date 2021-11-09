"use strict";
exports.__esModule = true;
exports.getCurrentPlatform = void 0;
var mock_1 = require("openfin-adapter/src/mock");
function getCurrentPlatform() {
    return mock_1.fin.Platform.getCurrent();
}
exports.getCurrentPlatform = getCurrentPlatform;
