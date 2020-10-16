let hangman = ['media/PaperSheet/paperSheet.jpg',
					  'media/PaperSheet/paperSheetHead.jpg',
					  'media/PaperSheet/paperSheetBody.jpg',
					  'media/PaperSheet/paperSheetHand1.jpg',
					  'media/PaperSheet/paperSheetHand2.jpg',
					  'media/PaperSheet/paperSheetLeg1.jpg',
					  'media/PaperSheet/paperSheetLeg2.jpg'];
let paperSheet = document.getElementById('paperSheet');
let description = document.getElementById('description');
let text = document.getElementById('text');
let playButton = document.getElementById('playButton');
let word, guess = '';
let keyBoard = 'qwertyuiopasdfghjklzxcvbnm';
let numberOfAttempts = 0, numberOfGuessed = 0;
let screenPrint = document.createElement('h1');
let keyBoardSection = document.createElement('div');
paperSheet.src = hangman[numberOfAttempts];

function preload(){
	
	wordList = ["arch", "attack", "absolute", "abundant", "anticipation", "axis", "advocate", "autonomy", "activate", "asylum", "access", "agreement", "act", "angle", "avant-garde", "admire", "applied", "acceptable", "allow", "absorb", "appendix", "agent", "advice", "amber", "ankle", "accurate", "agency", "avenue", "afford", "aid", "admiration", "addition", "arise", "alcohol", "animal", "article", "appeal", "attention", "adjust", "affinity", "ambiguous", "absorption", "aspect", "astonishing", "analysis", "assignment", "acid", "addicted", "archive", "account", "broadcast", "blue", "building", "biology", "belong", "back", "bargain", "berry", "breakdown", "border", "bag", "bacon", "bus", "bulletin", "blackmail", "bite", "blame", "breast", "beam", "brilliance", "basis", "beginning", "brand", "bury", "block", "buttocks", "beach", "bald", "beer", "bottle", "brave", "banquet", "beard", "basket", "bolt", "buy", "bloody", "Bible", "burial", "baby", "board", "break", "boy", "black", "brown", "bleed", "betray", "budge", "bloodshed", "bland", "cover", "commission", "clerk", "civilization", "communication", "circulation", "claim", "comprehensive", "confusion", "compete", "cluster", "curtain", "city", "count", "cotton", "captivate", "car", "composer", "communist", "consultation", "contraction", "cream", "crown", "collect", "crosswalk", "consideration", "conspiracy", "chase", "champagne", "champion", "color", "confuse", "cousin", "cylinder", "confine", "confrontation", "crime", "curve", "channel", "comfort", "constitution", "chop", "clearance", "cathedral", "common", "climate", "camp", "cater", "conception", "complete", "dough", "drug", "demonstrator", "debate", "dump", "dorm", "dome", "diameter", "denial", "deny", "dream", "doctor", "dictionary", "donor", "depart", "do", "deliver", "disturbance", "door", "describe", "draw", "deputy", "distribute", "dimension", "disagree", "division", "drink", "designer", "drum", "dressing", "dangerous", "dismissal", "dignity", "dragon", "deficit", "dribble", "diagram", "design", "destruction", "disposition", "dilute", "despise", "deprive", "dull", "deer", "detector", "drive", "defend", "dialect", "drill", "essential", "executrix", "enter", "eliminate", "electronics", "end", "embox", "exclusive", "extinct", "efflux", "effective", "employee", "export", "engineer", "expansion", "environmental", "exposure", "eagle", "election", "elapse", "era", "elephant", "exceed", "entitlement", "exchange", "escape", "extension", "energy", "excitement", "entertain", "engine", "empirical", "endure", "extend", "enjoy", "easy", "exaggerate", "exclude", "equip", "explicit", "Europe", "expenditure", "enfix", "east", "electron", "economist", "exhibition", "establish", "excess", "exercise", "formal", "fox", "feed", "film", "future", "feather", "flatware", "faithful", "forge", "feature", "forget", "food", "first", "feeling", "finance", "forest", "frown", "fate", "function", "find", "fit", "feminist", "fee", "flow", "franchise", "few", "funeral", "factory", "fashion", "frozen", "force", "full", "funny", "faint", "formula", "freeze", "fairy", "fat", "fashionable", "fold", "flex", "finish", "flavor", "fisherman", "falsify", "federation", "flower", "foundation", "fuss", "flash", "grandfather", "guide", "graphic", "ghostwriter", "goat", "gap", "glow", "gasp", "gregarious", "garlic", "groan", "gaffe", "growth", "giant", "guerrilla", "goalkeeper", "gutter", "guard", "grateful", "general", "grass", "glimpse", "glove", "guess", "glass", "glasses", "governor", "girlfriend", "grudge", "global", "ground", "grace", "glare", "glacier", "gown", "girl", "gallery", "guarantee", "glue", "grave", "grind", "generation", "greet", "gear", "grand", "grandmother", "gesture", "gallon", "gradient", "garage", "hero", "hut", "horizon", "helmet", "homosexual", "hit", "hallway", "handy", "husband", "huge", "headquarters", "hen", "harbor", "hunting", "hotdog", "hot", "hemisphere", "horn", "hobby", "harass", "herd", "high", "honor", "hypnothize", "holiday", "hurt", "hay", "hide", "hostage", "hip", "hall", "hole", "hour", "housing", "hammer", "hand", "hook", "hate", "hair", "humanity", "home", "harsh", "heavy", "hurl", "haunt", "house", "highway", "he", "heart", "happen", "invite", "idea", "inappropriate", "ideology", "ivory", "improve", "inspiration", "initial", "indulge", "integrated", "incident", "inhabitant", "if", "instal", "irony", "insure", "island", "injury", "infect", "intervention", "investment", "infinite", "initiative", "intensify", "insurance", "ignore", "inside", "issue", "integration", "ignite", "install", "identity", "intention", "incongruous", "industry", "incredible", "invasion", "ideal", "implication", "include", "important", "improvement", "interactive", "infrastructure", "immune", "incentive", "impound", "incapable", "influence", "inspector", "justice", "joint", "jacket", "jewel", "just", "job", "jet", "jockey", "justify", "jest", "jump", "judicial", "junior", "jury", "journal", "jail", "jaw", "joy", "judge", "jealous", "joystick", "jurisdiction", "jam", "judgment", "jungle", "jelly", "joke", "kettle", "knife", "key", "kidney", "killer", "kneel", "kitchen", "kidnap", "kit", "kill", "knot", "knowledge", "keep", "kid", "knock", "Koran", "kinship", "kick", "king", "knit", "know", "knee", "look", "listen", "loud", "large", "loyalty", "lamp", "lack", "leader", "lick", "left", "loose", "lie", "loop", "literacy", "lung", "lesson", "leak", "lace", "liver", "linger", "linen", "licence", "leaflet", "lease", "lock", "limited", "leaf", "leg", "lid", "low", "loan", "lonely", "labour", "lip", "landowner", "lemon", "legend", "limit", "leave", "light", "lily", "lazy", "lot", "lunch", "leash", "long", "laborer", "laboratory", "love", "linear", "marriage", "meadow", "moving", "monster", "mutation", "market", "mix", "midnight", "margin", "magnetic", "myth", "mainstream", "machinery", "monarch", "motorist", "minority", "mislead", "mind", "motivation", "middle", "majority", "muscle", "missile", "murder", "move", "miracle", "mug", "motorcycle", "marketing", "ministry", "mother", "mastermind", "memorial", "minute", "mosque", "matter", "magazine", "menu", "my", "meaning", "mixture", "mark", "merchant", "mouse", "miscarriage", "manager", "morning", "main", "marine", "minor", "notebook", "neutral", "needle", "north", "nut", "nest", "nomination", "notion", "network", "nap", "native", "node", "negotiation", "nightmare", "nun", "neighbour", "nose", "norm", "night", "negligence", "nominate", "narrow", "novel", "no", "nerve", "negative", "normal", "nonremittal", "net", "nationalism", "nursery", "nervous", "note", "nationalist", "number", "neck", "news", "nonsense", "nail", "neglect", "name", "nuance", "neighborhood", "need", "nuclear", "notice", "navy", "nature", "necklace", "notorious", "onion", "owner", "oak", "offset", "of", "or", "organize", "ordinary", "order", "outlet", "output", "opponent", "oil", "object", "opposition", "ostracize", "offense", "obstacle", "occupy", "opinion", "offensive", "owe", "oven", "original", "outer", "outline", "offender", "overcharge", "option", "opera", "officer", "obese", "overeat", "occupation", "overwhelm", "open", "offer", "old", "observer", "omission", "oppose", "other", "opposed", "overlook", "outfit", "organ", "oh", "overall", "origin", "overview", "premature", "punish", "point", "persist", "privilege", "patent", "palm", "prison", "paralyzed", "presentation", "prosecute", "powder", "pick", "picture", "partner", "pure", "painter", "pocket", "period", "pastel", "pen", "publication", "peace", "pier", "prejudice", "photocopy", "pest", "pedestrian", "performance", "perforate", "perfect", "pledge", "peanut", "peak", "peel", "prefer", "proof", "pioneer", "pursuit", "prisoner", "protest", "petty", "praise", "party", "printer", "penalty", "proper", "primary", "parade", "pair", "quest", "quantity", "qualify", "queue", "queen", "quotation", "qualified", "quiet", "quit", "quote", "quota", "quarrel", "question", "quarter", "quaint", "quality", "qualification", "roll", "reception", "regulation", "recording", "reliance", "resort", "roar", "reveal", "resident", "recommend", "refer", "rugby", "remain", "robot", "refrigerator", "rub", "rest", "retain", "relationship", "railroad", "river", "rhythm", "revolution", "routine", "room", "recycle", "random", "rain", "retirement", "round", "reflection", "ratio", "reporter", "rotate", "rhetoric", "rule", "reason", "restrain", "resource", "role", "relative", "ride", "reverse", "roof", "rush", "reform", "reader", "revise", "reinforce", "race", "sister", "sniff", "stitch", "sketch", "slice", "soar", "salt", "school", "sacrifice", "student", "shot", "supplementary", "sympathetic", "split", "spin", "studio", "settle", "situation", "solid", "strip", "survival", "sulphur", "spirit", "salmon", "small", "slip", "script", "speed", "seize", "slot", "science", "sense", "sick", "side", "soul", "supply", "sheep", "struggle", "soap", "spontaneous", "store", "shape", "stress", "summer", "stick", "sharp", "stereotype", "satisfied", "skin", "sticky", "trait", "tear", "toss", "taste", "tail", "threat", "tap", "trip", "tolerant", "treaty", "twilight", "testify", "triangle", "try", "tumble", "timber", "tin", "tune", "tip", "tired", "tenant", "train", "tropical", "transparent", "thesis", "tract", "trunk", "thread", "turkey", "trouble", "tissue", "thoughtful", "tube", "therapist", "thank", "tick", "tease", "torch", "texture", "tourist", "tender", "terrify", "terminal", "thirsty", "teacher", "tiger", "tumour", "treat", "teach", "total", "unfair", "urgency", "undress", "underline", "update", "up", "unfortunate", "utter", "umbrella", "unique", "urine", "uniform", "unit", "unity", "us", "upset", "useful", "unpleasant", "user", "unlawful", "undertake", "understand", "unaware", "undermine", "unrest", "uncle", "unanimous", "uncertainty", "unlike", "understanding", "unlikely", "use", "union", "urge", "vain", "voucher", "variable", "vacuum", "van", "vegetarian", "video", "vein", "variant", "voice", "vat", "volume", "veteran", "version", "view", "visit", "voter", "virgin", "verdict", "virus", "visible", "valid", "variety", "Venus", "vision", "venture", "valley", "vigorous", "vehicle", "vegetation", "veil", "vague", "volunteer", "vegetable", "visual", "victory", "village", "viable", "vote", "velvet", "vertical", "variation", "violation", "volcano", "virtue", "vessel", "value", "voyage", "waist", "wave", "worth", "work", "win", "waste", "wear", "worry", "wisecrack", "wonder", "weed", "wall", "worm", "weigh", "world", "warn", "whisper", "widen", "winter", "wheel", "wage", "week", "white", "wrestle", "witness", "whole", "wander", "wrong", "west", "worker", "walk", "water", "wardrobe", "wilderness", "width", "witch", "wing", "weight", "writer", "want", "we", "weave", "wood", "winner", "withdrawal", "welcome", "withdraw", "wedding", "will", "weakness", "young", "year", "youth", "yard", "yearn", "zone", "zero"];
	
	word = wordList[Math.floor(Math.random() * 1055)];
	
	//API doesen't work properly so i commented the word selection:
	//word = loadJSON('https://random-word-api.herokuapp.com/word?number=1');
}

function setup(){
	word = word[0];
}

function gameOver(win){
	description.removeChild(keyBoardSection);
	guess = word;
	screenPrint.textContent = guess;
	let endMessage = document.createElement('h1');
	endMessage.id = 'endMessage';
	description.appendChild(endMessage);

	if(win){
		endMessage.textContent = 'You won.'
		endMessage.style.color = 'green';
	}

	else{
		endMessage.textContent = 'You lost.'
		endMessage.style.color = 'red';
	}

	let endText = document.createElement('p');
	endText.id = 'endText';
	endText.textContent = "Now, the computer:";
	description.appendChild(endText);

	setTimeout(function(){description.id = 'descriptionFade'; 

		setTimeout(function(){
			description.removeChild(endMessage);
			description.removeChild(endText);
			description.removeChild(screenPrint);
			startComputerGuess();},2000);
			
			}, 3000);
	}

function letterGuess(letter, currentButton){
	let ok = false;
	for(let i = 0; i < word.length; i++)
		if(word[i] == letter){
			ok = true; 

			if(guess[2*i] == '_')
			numberOfGuessed++;
		
			currentButton.style.background = 'green';
			guess = guess.slice(0, 2*i) + letter + guess.slice(2*i + 1);
			screenPrint.textContent = guess;
		}

	if(ok == false){
		numberOfAttempts++;
		currentButton.style.background = 'red';
	}
	paperSheet.src = hangman[numberOfAttempts];

	if(numberOfAttempts == 6 || numberOfGuessed == word.length)
		gameOver(ok);
}

function startGame(){
	description.removeChild(text);
	description.removeChild(playButton);
	numberOfAttempts = 0;

	for(let i = 0; i < word.length; i++)
		guess += '_ ';

	screenPrint.textContent = guess;
	screenPrint.id = 'screenPrint';
	description.appendChild(screenPrint);

	description.appendChild(keyBoardSection);
	let nrDiv = 0, currentDiv;
	for(i = 0; i < 26; i++){
		if(i == 0 || i == 10 || i == 19){
			currentDiv = document.createElement('div');
			keyBoardSection.appendChild(currentDiv);
		}
		let letter = keyBoard[i];
		let currentButton = document.createElement('button');
		currentButton.textContent = letter;
		currentButton.id = 'keyButton';
		currentButton.addEventListener('click', function(){letterGuess(letter, currentButton);});
		currentDiv.appendChild(currentButton);
	}
}
