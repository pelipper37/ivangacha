"use strict";
exports.__esModule = true;
var Game_1 = require("./base/Game");
var Engine_1 = require("./rng/Engine");
var Save_1 = require("./base/Save");
var StepLog_1 = require("./base/StepLog");
function startGame() {
    Game_1.Game.getInstance().start();
}
function testEngine(map) {
    var eng = new Engine_1.Random(map);
    console.log(eng.getRandom());
}
var save = new Save_1.Save();
save.set("ivan", new StepLog_1.StepLog("a"));
console.log(save.get("ivan"));
var ivan = JSON.stringify(save);
console.log(ivan);
var parsedIvan = JSON.parse(ivan);
parsedIvan.get("ivan").step();
