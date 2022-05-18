"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.StepLog = void 0;
var Steppable_1 = require("./Steppable");
var StepLog = /** @class */ (function (_super) {
    __extends(StepLog, _super);
    function StepLog(logMessage) {
        var _this = _super.call(this) || this;
        _this.logMessage = logMessage;
        return _this;
    }
    StepLog.prototype.step = function () {
        console.log(this.logMessage);
    };
    return StepLog;
}(Steppable_1.Steppable));
exports.StepLog = StepLog;
