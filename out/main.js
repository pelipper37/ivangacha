"use strict";
exports.__esModule = true;
var Game_1 = require("./base/Game");
var Engine_1 = require("./rng/Engine");
function startGame() {
    Game_1.Game.getInstance().start();
}
function testEngine(map) {
    var eng = new Engine_1.Random(map);
    console.log(eng.getRandom());
}
