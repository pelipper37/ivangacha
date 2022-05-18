"use strict";
exports.__esModule = true;
exports.Steppable = void 0;
var Steppable = /** @class */ (function () {
    function Steppable() {
    }
    Steppable.prototype.setNext = function (next) {
        this.next = next;
    };
    Steppable.prototype.getNext = function () {
        return this.next;
    };
    return Steppable;
}());
exports.Steppable = Steppable;
