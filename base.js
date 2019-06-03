/*
* FUNCTION: bindLeftClick (jQuery Selector),(callback funcion),([optional] parameterArray)
* DESCRIPTION:
* Bind the left click of the mouse to the defined element. Used for anything that is to be clicked on.
* I wrote this for Project Petsite but I think you will find it very useful :)
*/
var bindLeftClick = function(e,f,a){
	$(document).off("click",e);
	$(document).on("click",e,function(evt){
		if(evt.which == 1){
			evt.preventDefault();
			f($(evt.currentTarget),a);
		}
	});
}

//Begin arrays

var speciesArray = [
	"Cat",
	"Deer",
	"Dragon",
	"Kitsune",
	"Lion",
	"Raptor",
	"Wolf"
]

var genderArray = [
	"Girl",
	"Boy",
	"Demigirl",
	"Demiboy",
	"Agender",
	"Androgynous",
	"Bigender",
	"Genderfluid",
	"Neutrois",
	"Nonbinary",
	"Genderqueer",
	"Genderflux",
	"Genderless",
	"Intersex",
	"Questioning"
]

var jobArray = [
	"Scholar",
	"Hunter",
	"Treasure Hunter",
	"Teacher",
	"Negotiator",
	"Seer",
	"Doctor",
	"Astronomer",
	"Geologist",
	"Grocer",
	"Alchemist",
	"Writer",
	"Journalist",
	"Thief",
	"Craftsman",
	"Explorer",
	"Warrior",
	"Priest(ess)",
	"Artist",
	"Naturalist",
	"Merchant",
	"Herbalist",
	"Assassin",
	"Fisherman",
	"Scout",
	"Historian",
	"Navigator",
	"Bandit",
	"Architect",
	"Psychiatrist",
	"Interpreter",
	"Weaver",
	"Smith",
	"Farmer",
	"Miner",
	"Gemcutter",
	"Stonecutter",
	"Botanist",
	"Banker",
	"Butcher",
	"Gravekeeper",
	"Tinkerer",
	"Lookout",
	"Guard",
	"Singer",
	"Bard",
	"Gatherer",
	"Scribe",
	"Beekeeper",
	"Carpenter",
	"Chef",
	"Cleric",
	"Composer",
	"Courier",
	"Housekeeper",
	"Innkeeper",
	"Knight",
	"Librarian",
	"Pirate",
	"Potter",
	"Sage",
	"Seamstress",
	"Trainer",
	"Philosopher",
	"Scavenger",
	"Thatcher",
	"Mercenary",
	"Biologist",
	"Detective",
	"Forester",
	"Templar",
	"Mechanic",
	"Body Guard",
	"Actor",
	"Poet",
	"Novelist",
	"Apothecary",
	"Armorer",
	"Bookbinder",
	"Cartographer",
	"Diviner",
	"Jeweler",
	"Woodcutter",
	"Trapper",
	"Survivalist",
	"Witch Doctor",
	"Con Artist",
	"Diplomat",
	"Linguist",
	"Athlete",
	"Sailor"
]

var alignArray = [
	"Lawful Good",
	"Neutral Good",
	"Chaotic Good",
	"Lawful Neutral",
	"True Neutral",
	"Chaotic Neutral",
	"Lawful Evil",
	"Neutral Evil",
	"Chaotic Evil"
]

var rpgArray = [
	"Rogue",
	"Bard",
	"Wizard",
	"Warlock",
	"Mage",
	"Summoner",
	"Thief",
	"Druid",
	"Warrior",
	"Priest",
	"Cleric",
	"Knight",
	"Paladin",
	"Dragoon",
	"Monk",
	"Sorcerer",
	"Ranger",
	"Fighter",
	"Barbarian",
	"Ninja",
	"Assassin",
	"Templar",
	"Sniper",
	"Alchemist"
]

var valuesArray = [
		"Self",
		"Friends",
		"Family",
		"Career",
		"Wealth",
		"Authority",
		"Power",
		"Honor",
		"Faith",
		"Loyalty",
		"Justice",
		"Tradition",
		"Charity",
		"Freedom",
		"Community",
		"Equality",
		"Logic",
		"Nature",
		"Law",
		"Industry",
		"Peace",
		"Fairness",
		"Destiny",
		"Glory",
		"Knowledge",
		"Revenge",
		"Survival",
		"Adventure"
]

var fearsArray = [
	"Death",
	"Loneliness",
	"Failure",
	"Losing",
	"Abandonment",
	"Rejection",
	"Pain",
	"Judgment",
	"Being Inadequate",
	"Being Disliked",
	"Being Useless",
	"Being Unimportant"
]

var hobbyArray = [
	"Writing",
	"Poetry",
	"Reading",
	"Singing",
	"Playing Music",
	"Gardening",
	"Spelunking",
	"Swimming",
	"Fishing",
	"Illusions",
	"Storytelling",
	"Collecting",
	"Battle",
	"Debate",
	"Foreign Languages",
	"Woodworking",
	"Weaving",
	"Climbing",
	"Hunting",
	"Decorating",
	"Bug Catching",
	"Mycology",
	"Foraging",
	"History",
	"Dance",
	"Meditation",
	"Occult",
	"Mythology",
	"Tracking",
	"Weaponry",
	"Wilderness Survival",
	"Tea",
	"Lock Picking",
	"Jewelry",
	"Archaeology",
	"Philosophy",
	"Conspiracies",
	"Puzzles",
	"Geology",
	"Alchemy",
	"Puns",
	"Astronomy",
	"Local Folklore",
	"Mathematics",
	"Hiking",
	"Treasure Hunting",
	"Calligraphy",
	"Cryptozoology",
	"Sculpture",
	"Cooking",
	"Acting",
	"Baking",
	"Ciphers",
	"Sewing",
	"Embroidery",
	"Dowsing",
	"Travel",
	"Fashion",
	"Pets",
	"Card Games",
	"Board Games",
	"Dice Games",
	"Sports",
	"Divination",
	"Journaling",
	"Conservation",
	"Martial Arts"
]

var mbtiArray = [
	"ISTJ", "ISFJ", "INFJ", "INTJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"
]



//End arrays

var getRnd = function(max){
	return Math.floor(Math.random() * (max) );
}



var getAll = function(){
	getSpecies();
	getGender();
	getMbti();
	getJob();
	getHobby();
	getAlign();
	getValues();
	getFears();
	getRpg();
}

//begin array functions
var getSpecies = function(){
	var rnd = getRnd(speciesArray.length);
	var item = speciesArray[rnd];
	if (!$("#cboxspecies").is(':checked')){
	$("#rndbtnspecies").html(item);}
}
var getGender = function(){
	var rnd = getRnd(genderArray.length);
	var item = genderArray[rnd];
	if (!$("#cboxgender").is(':checked')){
	$("#rndbtngender").html(item);}
}
var getMbti = function(){
	var rnd = getRnd(mbtiArray.length);
	var item = mbtiArray[rnd];
	if (!$("#cboxmbti").is(':checked')){
	$("#rndbtnmbti").html(item);}
}
var getJob = function(){
	var rnd = getRnd(jobArray.length);
	var item = jobArray[rnd];
	if (!$("#cboxjob").is(':checked')){
	$("#rndbtnjob").html(item);}
}
var getHobby = function(){
//hobby1
	var rnd = getRnd(hobbyArray.length);
	var item = hobbyArray[rnd];
	if (!$("#cboxhobby1").is(':checked')){
	$("#rndbtnhobby1").html(item);}
//hobby2
		rnd = getRnd(valuesArray.length);
		item = hobbyArray[rnd];
	if (!$("#cboxhobby2").is(':checked')){
	$("#rndbtnhobby2").html(item);}
	if ($("#rndbtnhobby2").html() === $("#rndbtnhobby1").html()){
		getHobby();
	}
//hobby3
		rnd = getRnd(valuesArray.length);
		item = hobbyArray[rnd];
	if (!$("#cboxhobby3").is(':checked')){
	$("#rndbtnhobby3").html(item);}
	if ($("#rndbtnhobby2").html() === $("#rndbtnhobby3").html()){
		getHobby();
	}
	if ($("#rndbtnhobby1").html() === $("#rndbtnhobby3").html()){
		getHobby();
	}
}
var getAlign = function(){
	var rnd = getRnd(alignArray.length);
	var item = alignArray[rnd];
	if (!$("#cboxalign").is(':checked')){
	$("#rndbtnalign").html(item);}
}
var getValues = function(){
	//values1
	var rnd = getRnd(valuesArray.length);
	var item = valuesArray[rnd];
	if (!$("#cboxvalues1").is(':checked')){
	$("#rndbtnvalues1").html(item);}
	//values2
		rnd = getRnd(valuesArray.length);
		item = valuesArray[rnd];
	if (!$("#cboxvalues2").is(':checked')){
	$("#rndbtnvalues2").html(item);}
	if ($("#rndbtnvalues1").html() === $("#rndbtnvalues2").html()){
		getValues();
	}
	//values3
		rnd = getRnd(valuesArray.length);
		item = valuesArray[rnd];
	if (!$("#cboxvalues3").is(':checked')){
	$("#rndbtnvalues3").html(item);}
	if ($("#rndbtnvalues3").html() === $("#rndbtnvalues2").html()){
		getValues();
	}
	if ($("#rndbtnvalues1").html() === $("#rndbtnvalues3").html()){
		getValues();
	}
}
var getFears = function(){
	var rnd = getRnd(fearsArray.length);
	var item = fearsArray[rnd];
	if (!$("#cboxfears").is(':checked')){
	$("#rndbtnfears").html(item);}
}
var getRpg = function(){
	var rnd = getRnd(rpgArray.length);
	var item = rpgArray[rnd];
	if (!$("#cboxrpg").is(':checked')){
	$("#rndbtnrpg").html(item);}
}

//end array functions

$(document).ready(function(){
//This is "wait until the entire HTML content has appeared on the users browser before processing"
//Up until this point in this JS file, the functions have been declared but have NOT be triggered.

});
