"use strict";
exports.__esModule = true;
exports.Game = void 0;
var StepLog_1 = require("./StepLog");
var Game = /** @class */ (function () {
    function Game(stepTime, init) {
        this.stepTime = stepTime;
        this.firstNode = init;
        this.lastNode = init;
    }
    Game.getInstance = function () {
        if (Game.instance)
            return Game.instance;
        return new Game(0.5, new StepLog_1.StepLog("init step"));
    };
    Game.prototype.addObject = function (steppable) {
        this.lastNode.setNext(steppable);
        this.lastNode = steppable;
        return this;
    };
    Game.prototype.step = function () {
        var nextNode = this.firstNode;
        while (nextNode != null) {
            nextNode.step();
            nextNode = nextNode.getNext();
        }
    };
    return Game;
}());
exports.Game = Game;
