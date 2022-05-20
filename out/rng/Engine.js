"use strict";
exports.__esModule = true;
exports.Random = void 0;
var Random = /** @class */ (function () {
    function Random(returnTable) {
        var sum = 0;
        var compiledTable = [];
        for (var i = 0; i < returnTable.length; ++i) {
            var cTable = returnTable[i];
            sum += cTable.weight;
            compiledTable[i] =
                {
                    min: sum,
                    returns: cTable.returns
                };
        }
        this.rngMultiplier = sum;
        this.returnMap = compiledTable;
    }
    Random.prototype.getRandom = function () {
        var rng = Math.random() * this.rngMultiplier; //create a random number between 0 and the sum of the weights
        var returnMap = this.returnMap;
        for (var i = 0; i < returnMap.length; ++i) //since returnMap is sorted by ascending order, this won't find the wrong "less than"
         {
            var cMap = returnMap[i];
            if (rng < cMap.min) {
                return cMap.returns;
            }
        }
    };
    Random.randomNumber = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    return Random;
}());
exports.Random = Random;
