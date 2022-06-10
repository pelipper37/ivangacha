// population refers to the number of individuals in the society
var population = 0;
var popGain = 0.0;

// enlightenment refers to the integration of ivan in the society, boosting resource gains?
var enlightenment = 0.0;

// knowledge is used for research and upgrading the tech tree
var knowledge = 0;
var knowledgeGain = 0.0;

// a high morale can increase the productivity of the workforce
var morale = 100.0; // morale base is 100 - modifies all production according to loss or gain
var stress = 0.0; // stress can be obtained from work or traumatic events and can lower productivity

// the presence of ryan and ivan can improve certain aspects of the game
var ivanPresence = false; // refers to the presence of ivan (gacha results) - can cause base gains to some resources
var ryanPresence = false; // ryan can boost ivan production or modifiers for an amount of time (random event)

// currency is used for its purchasing power
var currency = 0.0; // incremental currency, used to buy certain resource gains
var currencyGain = 0.0;
var ivanPins = 0; // currency used to pull for ivan

// no food means starvation and population decline
// varying consumption based on age?
var vFood = 0.0; // vegetation food - acquired through foraging and agriculture
var mFood = 0.0; // meat food - acquired through hunting and farming
var mFoodGain = 0.0;
var vFoodGain = 0.0;

// wood products can be used as building material or as a crude fuel
var wood = 0; // tier 1 wood product - can be collected from foraging or cutting down trees
var forestStatus = 100.0; // the forest is a place that can be used to collect wood, but it can be depleted and requires time to replenish
var forestAvailable = true; // false if forestStatus reaches 0 and only goes back to true when it reaches a certain level
var lumber = 0; // tier 2 wood product - wood can be converted into lumber, which is more efficient as a building material

// stone products can be used as building material or used to craft objects
var stone = 0; // tier 1 mining product - can be carved, refined, or used as basic building material

// tier 2 mining product - stone can be refined further into ores, which can be used to enhance gains
var genericOre = 0; // is not specified until method is researched (tech tree)
var ironOre = 0;
var copperOre = 0;
var goldOre = 0;
var aluminumOre = 0;
var titaniumOre = 0;

// tier 1 forging product - forges turn ore into more efficient material
var iron = 0;
var copper = 0;
var gold = 0;
var aluminum = 0;
var titanium = 0;

// miscellaneous items

// water products are used in some reactions and is also potentially a source for food
var water = 0; // tier 1 water product - can be used to help in some reactions
var oceanStatus = 100.0; // the ocean is a source for fish and saltwater, but it can be depleted
var oceanAvailable = true; // false if oceanStatus reaches 0 and only goes back to true whhen it reaches a certain limit

var carbon = 0; // byproduct of burning wood

var steel = 0; // steel is the result of smelting iron and carbon


