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

var getItem = function(clickbtn){
	var item = "ERROR 1";

	if (clickbtn.attr("data-rnd") === "all"){
		rndAll();
	}
	else if (clickbtn.attr("data-rnd") === "species"){
		passItem(speciesArray,$("#rndbtnspecies"));
	}
	else if (clickbtn.attr("data-rnd") === "gender"){
		passItem(genderArray,$("#rndbtngender"));
	}
	else if (clickbtn.attr("data-rnd") === "mbti"){
		passItem(mbtiArray,$("#rndbtnmbti"));
	}
	else if (clickbtn.attr("data-rnd") === "job"){
		passItem(jobArray,$("#rndbtnjob"));
	}
	else if (clickbtn.attr("data-rnd") === "align"){
		passItem(alignArray,$("#rndbtnalign"));
	}
	else if (clickbtn.attr("data-rnd") === "rpg"){
		passItem(rpgArray,$("#rndbtnrpg"));
	}
	else if (clickbtn.attr("data-rnd") === "values"){
		passItem(valuesArray,$("#rndbtnvalues1"));
		passItem(valuesArray,$("#rndbtnvalues2"));

		if ($("#rndbtnvalues1").html() === $("#rndbtnvalues2").html()
		|| $("#rndbtnvalues2").html() === $("#rndbtnvalues3").html()){
			getItem(clickbtn)
		}
			passItem(valuesArray,$("#rndbtnvalues3"));

		if ($("#rndbtnvalues2").html() === $("#rndbtnvalues3").html()
		|| $("#rndbtnvalues3").html() === $("#rndbtnvalues1").html()){
			getItem(clickbtn)
		}
	}
	else if (clickbtn.attr("data-rnd") === "fears"){
		passItem(fearsArray,$("#rndbtnfears"));
	}
	else if (clickbtn.attr("data-rnd") === "hobby"){
		passItem(hobbyArray,$("#rndbtnhobby1"));
		passItem(hobbyArray,$("#rndbtnhobby2"));

		if ($("#rndbtnhobby1").html() === $("#rndbtnhobby2").html()
		|| $("#rndbtnhobby2").html() === $("#rndbtnhobby3").html()){
			getItem(clickbtn)
		}

		rnd = getRnd(hobbyArray.length);
		item = hobbyArray[rnd];
		passItem(hobbyArray,$("#rndbtnhobby3"));

		if ($("#rndbtnhobby2").html() === $("#rndbtnhobby3").html()
		|| $("#rndbtnhobby3").html() === $("#rndbtnhobby1").html()){
			getItem(clickbtn)
	}
	else {
	}
}
}

var getRnd = function(max){
	var min = 0;
	return Math.floor(Math.random() * (max - min) ) + min;
}

var passItem = function(array, btn){
	var rnd = getRnd(array.length);
	var item = array[rnd];
	$(btn).html(item);
}

var rndAll = function(){
		passItem(speciesArray,$("#rndbtnspecies"));
		passItem(genderArray,$("#rndbtngender"));
		passItem(mbtiArray,$("#rndbtnmbti"));
		passItem(jobArray,$("#rndbtnjob"));
		passItem(alignArray,$("#rndbtnalign"));
		passItem(rpgArray,$("#rndbtnrpg"));

		passItem(valuesArray,$("#rndbtnvalues1"));
		passItem(valuesArray,$("#rndbtnvalues2"));
		while ($("#rndbtnvalues1").html() === $("#rndbtnvalues2").html()
		|| $("#rndbtnvalues2").html() === $("#rndbtnvalues3").html()){
			passItem(valuesArray,$("#rndbtnvalues2"));}
			passItem(valuesArray,$("#rndbtnvalues3"));
		while ($("#rndbtnvalues2").html() === $("#rndbtnvalues3").html()
		|| $("#rndbtnvalues3").html() === $("#rndbtnvalues1").html()){
		passItem(valuesArray,$("#rndbtnvalues3"));
		}
			passItem(fearsArray,$("#rndbtnfears"));

			passItem(hobbyArray,$("#rndbtnhobby1"));
			passItem(hobbyArray,$("#rndbtnhobby2"));

			if ($("#rndbtnhobby1").html() === $("#rndbtnhobby2").html()
			|| $("#rndbtnhobby2").html() === $("#rndbtnhobby3").html()){
			passItem(hobbyArray,$("#rndbtnhobby2"));
			}

			rnd = getRnd(hobbyArray.length);
			item = hobbyArray[rnd];
			passItem(hobbyArray,$("#rndbtnhobby3"));

			if ($("#rndbtnhobby2").html() === $("#rndbtnhobby3").html()
			|| $("#rndbtnhobby3").html() === $("#rndbtnhobby1").html()){
			passItem(hobbyArray,$("#rndbtnhobby3"));
		}else {}
}

$(document).ready(function(){
//This is "wait until the entire HTML content has appeared on the users browser before processing"
//Up until this point in this JS file, the functions have been declared but have NOT be triggered.
	bindLeftClick("button",getItem);
});
