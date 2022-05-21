"use strict";
exports.__esModule = true;
var typescript_json_serializer_1 = require("typescript-json-serializer");
var Game_1 = require("./base/Game");
var Engine_1 = require("./rng/Engine");
var Car_1 = require("./test/Car");
function startGame() {
    Game_1.Game.getInstance().start();
}
function testEngine(map) {
    var eng = new Engine_1.Random(map);
    console.log(eng.getRandom());
}
var car = new Car_1.Car("ivanmobile", new Car_1.Manufacturer("billy"));
var serializer = new typescript_json_serializer_1.JsonSerializer();
var string = JSON.stringify(serializer.serialize(car));
var reserialized = serializer.deserializeObject(car, Car_1.Car);
reserialized.honk();
