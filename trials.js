/* ---------- GLOBAL CONSTANTS ---------- */

const TRIALS_DATA_SRC = [
	{ // Trial 0 (AAAB vs CDDC), same length and symbol cardinality, different complexity:
		learning_pos_items: [
			"CDDCEAAABBCDEBC",
			"CCAAABBECDDCCCD",
			"AAAABBAEBCCDDCC",
			"CEDDDDAAABDCDDC",
			"BECDDCCBDAAABBE",
			"AEAAABCDDCBBEAA",
			"AAABBCCDDCDDDCB",
			"ADAAABADCDDCCAA",
			"AABCDDCCEDDAAAB",
			"CABDBCDDCAAABDC",
			"CDDCBEEAAABBEBA",
			"DCDDCAAABCBEBDD",
			"ACDDCACACAAABEE",
			"AAAABCCDCDDCDAE",
			"CDDCDEAAABBAEDB"
		],
		learning_neg_items: [
			"DBBEBEDDCCDDDCC",
			"BBEBBCAACBABBDD",
			"EBAEDEDDEDABCDC",
			"ADCDCECCBDABDAC",
			"BEDCEEEDCBAABEA",
			"EBACABCDADDBECD",
			"BCADCDAACBCEEAD",
			"EDEBEBBABCEAEAC",
			"DEBACDBEDBAAECB",
			"BCACBADEDABCDDA",
			"DDDDEBBAAAACEEC",
			"CEBABDCCCACCBBE",
			"ACCBDCBADBECCCD",
			"AEECBAEDDBAECAB",
			"CEBBAACDABBECBD"
		],
		generalization_p1_items: [ // p1 = AAAB
			"AAABBDBADDCCBDB",
			"BBCDDDAAABABAAD",
			"CCAABBDDEEEAAAB",
			"DEEDCDCCAAAABDE",
			"EECAAABBCDACBAE"
		],
		generalization_p2_items: [ // p2 = CDDC
			"ABAEEEBCDDCDBAC",
			"BBEAECDDCABDECD",
			"CDDCECEAADEBEEC",
			"DDACABCBBDCDDCE",
			"EDEEBAABCDDCCBB"
		],
		generalization_neg_items: [
			"AACDABAABCDEBAE",
			"BBEEECAECBEDAED",
			"CEBABEDDEEABAAC",
			"DEACBCEECCEEADA",
			"EBAEDCDDBDDCEAB"
		]
	},
	{ // Trial 1 (ABAA vs CDEE), same length and complexity, different symbol cardinality:
		learning_pos_items: [
			"EDECDEEEEABAAED",
			"ABAAEBDACDEEBDD",
			"AABAAACAEACDEEB",
			"CDACDEEDBABAADD",
			"BEBABAAEEBCCDEE",
			"CDEECEEBBABAADD",
			"BDEAEDABAACDEEC",
			"DCCDEEDBBAABAAB",
			"ABAABBCDBCDEECE",
			"ACDEEDABAACCEBC",
			"CBDABAACDEECDBB",
			"AADABAABCDCDEED",
			"ABAACDEEEDAEBCE",
			"CABCCEABAAACDEE",
			"DCDEEBDDCABAABC"
		],
		learning_neg_items: [
			"CBCCAACECEADDCB",
			"EBCAACCDEACBBAA",
			"EEDEDEECEBEEDAD",
			"ADDCCAAEEEBBABD",
			"ECACDECADACAADA",
			"DAEADEEEEBABADC",
			"CDDDADDCACBBBBB",
			"BBDDABDDEBADEAE",
			"AEEBBBDBEAACAAA",
			"DBCEABBCBCCEABC",
			"CACDDEDABACDCAB",
			"DABCACDADEBDCCD",
			"DEDDDCAACDDACCE",
			"BCDBDBDEBBBCACB",
			"DDEDCCEDDEAEAAB"
		],
		generalization_p1_items: [ // p1 = ABAA
			"ABAAEDEECBDDCBC",
			"BABAAEBDDECEEDD",
			"CDDEBCBECEABAAA",
			"DDBCABAADECDBBA",
			"EACDECEDABAABDE"
		],
		generalization_p2_items: [ // p2 = CDEE
			"ABDACDEECCDDCAA",
			"BABBAEBDDECDEED",
			"CCDEEBAAABBCBCC",
			"DDBCBBAACDEEDEA",
			"EDABBACDEEEDDAC"
		],
		generalization_neg_items: [
			"AADDBACDCBAEAED",
			"BBDEEDDCDBBADAD",
			"CAEDABBBBACECAD",
			"DECDECBDABEBBBD",
			"EDBBACDABDCADDA"
		]
	},
	{ // Trial 2 (ABB vs CDDD), same complexity and symbol cardinality, different length:
		learning_pos_items: [
			"CDDDCEEABBACDCE",
			"EEDABBECDDDEAAD",
			"ECCCDABBCDDDACA",
			"CBEDCDDDABBCACD",
			"CABBDCCDDDBADCD",
			"EAABBBCDDDCCEEC",
			"CDDDABBEDECBBEE",
			"ABBBDEACCDDDBDB",
			"ABDCEECDDDAABBD",
			"BBEBEDCABBCCDDD",
			"CEEDCBDCDDDDABB",
			"BACDDDEBCAEEABB",
			"CDDDABEABBADECE",
			"DECCCABBCDDDCAC",
			"EEBBCDDDABBCCCC"
		],
		learning_neg_items: [
			"BECAAECEBCDAABD",
			"DCECCDBDEBBEEBD",
			"DCBBAACECEABDEC",
			"BDDAABCBDDEACEB",
			"BABEDBAAACADEAA",
			"CDDCBCCDAAADCAA",
			"CABCEEDBABCAEAC",
			"BDBDCECCEAECDAA",
			"BDADAECDBACECDC",
			"CBBECABACAABCDE",
			"DEDECEDCDDBEECA",
			"ADBDBDACDCDCECD",
			"DBDEDADACAAADED",
			"BDEBDBECDECEAAD",
			"AEACDEEABCEDBCA"
		],
		generalization_p1_items: [ // p1 = ABB
			"ABBBDCDDCBACCBE",
			"BBECCDEDABBAAAB",
			"CDDEBAACEBABBED",
			"DCAABABBEEDDCAD",
			"EABBBACEEDDDCEC"
		],
		generalization_p2_items: [ // p2 = CDDD
			"ABADBBBBCDDDADD",
			"BCDCACDDDEBABEE",
			"CCABDBACDDDEEBE",
			"DECDDDACEBAABCB",
			"EDCBCCDABCDDDBE"
		],
		generalization_neg_items: [
			"AADAABAEDEAEDEB",
			"BECDBAEACEECEDD",
			"CCEDACBCACCBAEB",
			"DDAECEBADBDDEAE",
			"EBDDDCAEAAEAAAD"
		]
	}
]; // Comments for TRIAL_DATA_SRC should be stripped to avoid cheating by snooping the script.
// Do note that neither TRIALS_DATA_SRC nor its elements have been frozen (via Object.freeze),   
// so they could be accidentally modified (they shouldn't).
const TOTAL_TRIALS = TRIALS_DATA_SRC.length; // Number of trials to run.
const TOTAL_STAGES = 5; // The stages for the trials go from 0 (Learning) to 4 (Explanation).
const CANVAS_ERROR_MSG = "Your browser does not support canvas elements."
const CANVAS_TEXT_FONT = "22px Arial"; // 22px
const ALPHABET = [ // Array of unicode characters (suffix '\uFE0E' avoids "emojification").
	'B',
	'5',
	'?',
	'$',
	'&',
	"\u00D7\uFE0E", // MULTIPLICATION SIGN
	"\u2193\uFE0E", // DOWNWARDS ARROW
	"\u221E\uFE0E", // INFINITY
	"\u25A8\uFE0E", // SQUARE WITH UPPER RIGHT TO LOWER LEFT FILL
	"\u25B3\uFE0E", // WHITE UP-POINTING TRIANGLE
	"\u2606\uFE0E", // WHITE STAR
	"\u2609\uFE0E", // SUN
	"\u2661\uFE0E", // WHITE HEART SUIT
	"\u266A\uFE0E", // EIGHT NOTE
	"\u2690\uFE0E", // WHITE FLAG
];

// "\u260A\uFE0E", // ASCENDING NODE
// "\u2664\uFE0E", // WHITE SPADE SUIT
// "\u266F\uFE0E", // MUSIC SHARP SIGN
// "\u2699\uFE0E", // GEAR
// "\u21E7\uFE0E", // UPWARDS WHITE ARROW
// "\u25A1\uFE0E", // WHITE SQUARE
// "\u269D\uFE0E", // STRESS OUTLINED WHITE STAR
// "\u263C\uFE0E", // WHITE SUN WITH RAYS
// "\u273F\uFE0E", // BLACK FLORETTE
// "\u2715\uFE0E", // MULTIPLICATION X

/* ---------- GLOBAL VARIABLES ---------- */

let TRIALS_DATA = [];
let TRIAL = 0; // One trial per hypothesis. Every trial has 5 possible stages.
let STAGE = 0; // 0: Learning, 1: Training, 2: Feedback, 3: Generalization, 4: Explanation.
let LEARNING_ITEMS = [];
let TRAINING_ITEMS = [];
let TRAINING_TIMES = []; // Stores time taken for every attempt of every Training stage.
let TIMES = []; // Used to store time taken for every attempt in a Training Stage.
let t_start = 0, t_end = 0; // Used to calculate elapsed time.
let TRAINING_POS_SEL = []; 
// TRAINING_POS_SEL[trial][attempt][i] == true iff TRIALS_DATA[trial].learning_pos_items[i] 
// was selected. Consider that 0 <= trial < TOTAL_TRIALS, 0 <= attempt < 
// TRAINING_POS_SEL[trial].length and 0 <= i < TRIALS_DATA[trial].learning_pos_items.length.
let POS_SEL = []; // Used to store selected positives for every attempt in a Training Stage.
let TRAINING_NEG_SEL = []; 
// TRAINING_POS_SEL[trial][attempt][i] == true iff TRIALS_DATA[trial].learning_neg_items[i] 
// was selected. Consider that 0 <= trial < TOTAL_TRIALS, 0 <= attempt < 
// TRAINING_NEG_SEL[trial].length and 0 <= i < TRIALS_DATA[trial].learning_neg_items.length.
let NEG_SEL = []; // Used to store selected negatives for every attempt in a Training Stage.
let GENERALIZATION_ITEMS = [];
let GENERALIZATION_ITEMS_SRC = [];
let GENERALIZATION_SELECTED = []; // Stores selected items for every Generalization stage.
let GENERALIZATION_UNSELECTED = []; // Stores non-selected items for every Generalization stage.
let GENERALIZATION_P1 = []; // ### TEMPORARY ###
let GENERALIZATION_P2 = []; // ### TEMPORARY ###
let GENERALIZATION_NEG = []; // ### TEMPORARY ###
let EXPLANATIONS = []; // Stores text input for every Explanation stage.
let SELECTED_ITEMS = [];
let CORRECT_ITEMS = [];
let ITEMS_INDICES = [];

/* ---------- FUNCTIONS ---------- */

function shuffle(array) { // Durstenfeld shuffle for an array.
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

function multiShuffle(arrays) { // Durstenfeld shuffle for arrays of equal length.
	if (arrays.length > 0) {
		for (let i = arrays[0].length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			for (let k = 0; k < arrays.length; k++) { // Same shuffle performed for all arrays:
				let temp = arrays[k][i];
				arrays[k][i] = arrays[k][j];
				arrays[k][j] = temp;
			}
		}
	}
} // Equal length among all arrays is assumed for multiShuffle.

function assignShuffledSymbols() {
	// Initializes TRIALS_DATA as a 'translation' of TRIALS_DATA_SRC using ALPHABET.
	TRIALS_DATA = JSON.parse(JSON.stringify(TRIALS_DATA_SRC)); // Deep copy of TRIALS_DATA_SRC.
	shuffle(ALPHABET);
	// Every item for every trial is translated into a string using symbols in ALPHABET:
	for (let trial = 0; trial < TRIALS_DATA.length; trial++) {
		let keys = Object.keys(TRIALS_DATA[trial]);
		let translator = {}; // Dictionary used to translate is reset for every trial.
		for (let key_idx = 0; key_idx < keys.length; key_idx++) {
			let key = keys[key_idx];
			for (let item_idx = 0; item_idx < TRIALS_DATA[trial][key].length; item_idx++) {
				let item = TRIALS_DATA[trial][key][item_idx];
				let translation = Array(item.length);
				for (let chr_idx = 0; chr_idx < item.length; chr_idx++) {
					let chr = item[chr_idx];
					if (!(chr in translator)) { // If chr has yet to be assigned a symbol in ALPHABET:
						translator[chr] = ALPHABET.pop(); // char is assigned last ALPHABET symbol.
					}
					translation[chr_idx] = translator[chr];
				}
				// Original item is replaced by translation:
				TRIALS_DATA[trial][key][item_idx] = translation.join(" ");
			}
		}
	}
}

function updateSelItems() { // Invoked when clicking on selectable items.
	// this = <canvas class="stage-item selected-negative" data-number=(...)> (...) </canvas>
	let item_number = this.getAttribute("data-number");
	if (SELECTED_ITEMS[item_number] == false) { // If the item was not selected ...
		// ... then upon clicking it becomes selected:
		this.classList.remove("true-negative");
		this.classList.add("selected-positive");
	} else { // Otherwise (if it was selected), it becomes unselected upon clicking:
		this.classList.remove("selected-positive");
		this.classList.add("true-negative");
	}
	// Selection status for the item is updated:
	SELECTED_ITEMS[item_number] = !SELECTED_ITEMS[item_number];
}

function addCanvases(
	container, texts, class_lists, add_data_number, font, error_msg, events, event_functions
	) {
	let canvases = Array(texts.length);
	let contexts = Array(texts.length);
	let metrics = Array(texts.length);
	
	// A canvas (with classes in class_lists) is created for every text:
	for (let i = 0; i < texts.length; i++) {
		canvases[i] = document.createElement("canvas");
		for (let j = 0; j < class_lists[i].length; j++) {
			canvases[i].classList.add(class_lists[i][j]);
		}
		if (add_data_number) canvases[i].setAttribute("data-number", i.toString());
		contexts[i] = canvases[i].getContext("2d");
		contexts[i].font = font;
		contexts[i].textBaseline = "middle";
		metrics[i] = contexts[i].measureText(texts[i]);
	}
	
	// Maximum width and height among all texts are determined through metrics:
	let max_width = 0, max_height = 0;
	for (let i = 0; i < metrics.length; i++) {
		let width = metrics[i].width;
		let height = metrics[i].actualBoundingBoxAscent + metrics[i].actualBoundingBoxDescent;
		if (width > max_width) max_width = width;
		if (height > max_height) max_height = height;
	}
	
	// Canvases of size max_width * max_height are defined along with event listeners:
	for (let i = 0; i < texts.length; i++) {
		contexts[i].canvas.width = max_width;
		contexts[i].canvas.height = max_height;
		contexts[i].font = font;
		contexts[i].textBaseline = "middle";
		contexts[i].textAlign = "center";
		contexts[i].fillText(
			texts[i], canvases[i].width/2, 
			Math.max(canvases[i].height/2, metrics[i].actualBoundingBoxAscent)
		);
		canvases[i].appendChild(document.createTextNode(error_msg));
		container.appendChild(canvases[i]);
		for (let j = 0; j < events.length; j++) {
			canvases[i].addEventListener(events[j], event_functions[j]);
		}
	}
}

function showElements(element_selectors, text_contents) {
	for (let i = 0; i < element_selectors.length; i++) {
		let elem = document.querySelector(element_selectors[i]);
		elem.textContent = text_contents[i];
		elem.style.visibility = "visible";
	}
}

function hideElements(element_selectors) {
	for (let i = 0; i < element_selectors.length; i++) {
		document.querySelector(element_selectors[i]).style.visibility = "hidden";
	}
}

function startExplanation() {
	// Title (h2), subtitle (h3) and explanation (h4) for main container are updated and revealed:
	let headers = ["#title", "#subtitle", "#explanation"];
	let headers_text = [
		"Trial " + (TRIAL+1).toString(),
		"Stage " + (STAGE+1).toString() + ": Explanation",
		"Explain, in your own words, the criteria you have used to determine whether a box " + 
		"belongs to the trials' category."
	];
	showElements(headers, headers_text);
	
	// A text area is created in the stage container for an explanation to be provided:
	const elem_stage = document.querySelector("#stage");
	let new_textarea =  document.createElement("textarea");
	new_textarea.classList.add("in");
	new_textarea.classList.add("placeholder");
	new_textarea.setAttribute("placeholder","Enter your explanation here.");
	elem_stage.appendChild(new_textarea);
	
	// The button for the main container is updated and revealed:
	showElements([".stage-btn"], ["Next"]);
}

function startGeneralization() {
	// Title (h2), subtitle (h3) and explanation (h4) for main container are updated and revealed:
	let headers = ["#title", "#subtitle", "#explanation"];
	let headers_text = [
		"Trial " + (TRIAL+1).toString(),
		"Stage " + (STAGE+1).toString() + ": Generalization",
		"Select all boxes that you think belong to the trials' category. Click on a box to " + 
		"toggle its border between solid red (to indicate that the box is not in the category) " + 
		"and dashed green (to indicate that the box is in the category)."
	];
	showElements(headers, headers_text);
	
	// Much like for the training stage, GENERALIZATION_ITEMS is defined by shuffling all 
	// of the Generalization items:
	GENERALIZATION_ITEMS_SRC = 
		TRIALS_DATA_SRC[TRIAL].generalization_p1_items.concat(
			TRIALS_DATA_SRC[TRIAL].generalization_p2_items.concat(
				TRIALS_DATA_SRC[TRIAL].generalization_neg_items
			)
		);
	GENERALIZATION_ITEMS = 
		TRIALS_DATA[TRIAL].generalization_p1_items.concat(
			TRIALS_DATA[TRIAL].generalization_p2_items.concat(
				TRIALS_DATA[TRIAL].generalization_neg_items
			)
		);
	CORRECT_ITEMS = []; // ### TEMPORARY ###
	for (let i = 0; i < TRIALS_DATA[TRIAL].generalization_p1_items.length; i++) {
		CORRECT_ITEMS.push(1);
	}
	for (let i = 0; i < TRIALS_DATA[TRIAL].generalization_p2_items.length; i++) {
		CORRECT_ITEMS.push(2);
	}
	for (let i = 0; i < TRIALS_DATA[TRIAL].generalization_neg_items.length; i++) {
		CORRECT_ITEMS.push(0);
	}
	// Shuffling is optional , although preferable:
	multiShuffle([GENERALIZATION_ITEMS_SRC, GENERALIZATION_ITEMS, CORRECT_ITEMS]);
	
	// SELECTED_ITEMS is set to GENERALIZATION_ITEMS' length and filled with bool "false" values:
	// (Note: There's probably a better way to do this.)
	SELECTED_ITEMS = Array(GENERALIZATION_ITEMS.length).fill(false);
	
	// A child is created in the stage container for every generalization item:
	let class_lists = Array(GENERALIZATION_ITEMS.length).fill(["stage-item", "true-negative"]);
	addCanvases(document.querySelector("#stage"), GENERALIZATION_ITEMS, class_lists, true, 
							 CANVAS_TEXT_FONT, CANVAS_ERROR_MSG, ["click"], [updateSelItems]);
	
	// The button for the main container is updated and revealed:
	showElements([".stage-btn"], ["Next"]);
}

function startFeedback() {
	// Title (h2), subtitle (h3) and explanation (h4) for main container are updated and revealed:
	let headers = ["#title", "#subtitle", "#explanation"];
	let headers_text = [
		"Trial " + (TRIAL+1).toString(),
		"Stage " + (STAGE+1).toString() + ": Feedback",
		"Your have made one or more mistakes in your selection. Use the boxes below to assess " + 
		"your errors, considering that the style of a box's border indicates whether the box " + 
		"belongs to your selection (dashed) or not (solid), while the color indicates whether " + 
		"the box belongs to the trials' category (green) or not (red)."
	];
	showElements(headers, headers_text);
	
	// Elements in the Feedback stage will have the appropriate colors, but those selected 
	// in the Training stage will be marked as such:
	let class_lists = [];
	for (let i = 0; i < CORRECT_ITEMS.length; i++) {
		let class_list = ["stage-item", "no-hover"];
		if (CORRECT_ITEMS[i] == false) { // Color of border will correspond to "negative".
			if (SELECTED_ITEMS[i] == false) class_list.push("true-negative");
			else class_list.push("selected-negative"); // Selected items will be marked as such.
		}
		else { // Color of border will correspond to "positive".
			if (SELECTED_ITEMS[i] == false) class_list.push("true-positive");
			else class_list.push("selected-positive"); // Selected items will be marked as such.
		}
		class_lists.push(class_list);
	}
	addCanvases(document.querySelector("#stage"), TRAINING_ITEMS, class_lists, false, 
							 CANVAS_TEXT_FONT, CANVAS_ERROR_MSG, [], []);
	
	// The button for the main container is updated and revealed:
	showElements([".stage-btn"], ["Next"]);
}

function startTraining() {
	// Title (h2), subtitle (h3) and explanation (h4) for main container are updated and revealed:
	let headers = ["#title", "#subtitle", "#explanation"];
	let headers_text = [
		"Trial " + (TRIAL+1).toString(),
		"Stage " + (STAGE+1).toString() + ": Training",
		"Select all boxes that you think belong to the trials' category. Click on a box to " + 
		"toggle its border between solid red (to indicate that the box is not in the trials' " + 
		"category) and dashed green (to indicate that the box is in the trials' category)."
	];
	showElements(headers, headers_text);
	
	// TRAINING_ITEMS is defined by shuffling all items in the learning stage.
	// The shuffle is performed along a CORRECT_ITEMS array.
	TRAINING_ITEMS = TRIALS_DATA[TRIAL].learning_pos_items.concat(
									 TRIALS_DATA[TRIAL].learning_neg_items);
	CORRECT_ITEMS = [];
	for (let i = 0; i < TRIALS_DATA[TRIAL].learning_pos_items.length; i++) {
		CORRECT_ITEMS.push(true);
	}
	for (let i = 0; i < TRIALS_DATA[TRIAL].learning_neg_items.length; i++) {
		CORRECT_ITEMS.push(false);
	}
	
	ITEMS_INDICES = [];
	for (let i = 0; i < TRIALS_DATA[TRIAL].learning_pos_items.length; i++) {
		ITEMS_INDICES.push(i);
	}
	for (let i = 0; i < TRIALS_DATA[TRIAL].learning_neg_items.length; i++) {
		ITEMS_INDICES.push(i);
	}
	
	multiShuffle([TRAINING_ITEMS, CORRECT_ITEMS, ITEMS_INDICES]);
	
	// SELECTED_ITEMS is set to TRAINING_ITEMS' length and filled with bool "false" values:
	SELECTED_ITEMS = Array(TRAINING_ITEMS.length).fill(false);
	let class_lists = Array(TRAINING_ITEMS.length).fill(["stage-item", "true-negative"]);
	
	// A child is created in the stage container for every training item:
	addCanvases(document.querySelector("#stage"), TRAINING_ITEMS, class_lists, true, 
							 CANVAS_TEXT_FONT, CANVAS_ERROR_MSG, ["click"], [updateSelItems]);
	
	// The button for the main container is updated and revealed:
	showElements([".stage-btn"], ["Next"]);
}

function startLearning() {
	// Title (h2), subtitle (h3) and explanation (h4) for main container are updated and revealed:
	let headers = ["#title", "#subtitle", "#explanation"];
	let headers_text = [
		"Trial " + (TRIAL+1).toString(),
		"Stage " + (STAGE+1).toString() + ": Learning",
		"Boxes with a solid green border belong to the trials' category, while boxes with a " + 
		"solid red border do not. Find criteria that determine whether a box belongs to the " + 
		"trials' category."
	];
	showElements(headers, headers_text);
	
	// A child is created in the stage container for every learning item in the current trial:
	LEARNING_ITEMS = TRIALS_DATA[TRIAL].learning_pos_items.concat(
									 TRIALS_DATA[TRIAL].learning_neg_items)
	let class_lists = [];
	for (let i = 0; i < TRIALS_DATA[TRIAL].learning_pos_items.length; i++) {
		class_lists.push(["stage-item", "true-positive", "no-hover"]);
	}
	for (let i = 0; i < TRIALS_DATA[TRIAL].learning_neg_items.length; i++) {
		class_lists.push(["stage-item", "true-negative", "no-hover"]);
	}
	addCanvases(document.querySelector("#stage"), LEARNING_ITEMS, class_lists, false, 
							 CANVAS_TEXT_FONT, CANVAS_ERROR_MSG, [], []);
	
	// The button for the main container is updated and revealed:
	showElements([".stage-btn"], ["Next"]);
}

function endTrials() {
	// ### TEMPORARY ### :
	let headers = ["#title"];
	let headers_text = ["Results"];
	showElements(headers, headers_text);
	const elem_stage = document.querySelector("#stage");
	let article = document.createElement("article");
	for (let i = 0; i < TOTAL_TRIALS; i++) {
		let paragraph = document.createElement("p");
		paragraph.appendChild(document.createTextNode("Trial " + i.toString() + " results:"));
		let unordered_list = document.createElement("ul");
		
		let train_time = document.createElement("li");
		train_time.appendChild(document.createTextNode(
			"Times for Training attempts (seconds): " + JSON.stringify(TRAINING_TIMES[i])
		));
		let train_neg = document.createElement("li");
		train_neg.appendChild(document.createTextNode(
			"Negative items selected for Training: " + JSON.stringify(TRAINING_NEG_SEL[i])
		));
		let train_pos = document.createElement("li");
		train_pos.appendChild(document.createTextNode(
			"Positive items selected for Training: " + JSON.stringify(TRAINING_POS_SEL[i])
		));
		let gen_neg = document.createElement("li");
		gen_neg.appendChild(document.createTextNode(
			"Negative items selected for Generalization: " + GENERALIZATION_NEG[i]
		));
		let gen_p1 = document.createElement("li");
		gen_p1.appendChild(document.createTextNode(
			"Pattern 1 items selected for Generalization: " + GENERALIZATION_P1[i]
		));
		let gen_p2 = document.createElement("li");
		gen_p2.appendChild(document.createTextNode(
			"Pattern 2 items selected for Generalization: " + GENERALIZATION_P2[i]
		));
		let explanation = document.createElement("li");
		explanation.appendChild(document.createTextNode("Explanation: '" + EXPLANATIONS[i] + "'"));
		
		unordered_list.appendChild(train_time);
		unordered_list.appendChild(train_neg);
		unordered_list.appendChild(train_pos);
		unordered_list.appendChild(gen_neg);
		unordered_list.appendChild(gen_p1);
		unordered_list.appendChild(gen_p2);
		unordered_list.appendChild(explanation);
		paragraph.appendChild(unordered_list);
		article.appendChild(paragraph);
	}
	elem_stage.appendChild(article);
}

function startTrialStage() {
	// The button, title (h2), subtitle (h3) and explanation (h4) for main container are hidden: 
	hideElements([".stage-btn", "#title", "#subtitle", "#explanation"]);
	
	// All children for the stage container are removed:
	const elem_stage = document.querySelector("#stage");
	while (elem_stage.firstChild) elem_stage.removeChild(elem_stage.firstChild);
	
	if (TRIAL < TOTAL_TRIALS) {
		switch(STAGE) {
			case 0: startLearning(); break;
			case 1: startTraining(); break;
			case 2: startFeedback(); break;
			case 3: startGeneralization(); break;
			case 4: startExplanation(); break;
			//default: //error
		}
	} else endTrials();
}

function nextTrialStage() {
	switch(STAGE) {
			case 0: { // 0 = Learning.
				TIMES = [];
				POS_SEL = [];
				NEG_SEL = [];
				STAGE++; // Proceed to Training stage.
				t_start = performance.now(); // Training time begins (first attempt).
				break;
			}
			case 1: { // 1 = Training.
				t_end = performance.now(); // Training time ends for current attempt.
				TIMES.push((t_end - t_start) / 1000); // Time for current attempt is recorded.
				
				let selected_are_correct = true;
				let selected_pos = Array(TRIALS_DATA[TRIAL].learning_pos_items.length).fill(false);
				let selected_neg = Array(TRIALS_DATA[TRIAL].learning_neg_items.length).fill(false);
				for (let i = 0; i < SELECTED_ITEMS.length; i++) {
					if (SELECTED_ITEMS[i] == CORRECT_ITEMS[i]) {
						if (SELECTED_ITEMS[i] == true) { // Then CORRECT_ITEMS[i] == true (positive item).
							selected_pos[ITEMS_INDICES[i]] = true; // The corresponding positive is selected.
						}
					}
					else { // Mismatch between SELECTED_ITEMS and CORRECT_ITEMS.
						selected_are_correct = false;
						if (SELECTED_ITEMS[i] == true) { // Then CORRECT_ITEMS == false (negative item).
							selected_neg[ITEMS_INDICES[i]] = true; // The corresponding negative is selected.
						}
					}
				}
				POS_SEL.push(selected_pos); // Selected positives for attempt are recorded.
				NEG_SEL.push(selected_neg); // Selected negatives for attempt are recorded.
				
				if (selected_are_correct) { // If SELECTED_ITEMS matches CORRECT_ITEMS ...
					TRAINING_POS_SEL.push(POS_SEL); // Selected positives for Training are recorded.
					TRAINING_NEG_SEL.push(NEG_SEL); // Selected negatives for Training are recorded.
					TRAINING_TIMES.push(TIMES); // Times for Training are recorded.
					STAGE += 2; // Proceed to Generalization. 
				} else STAGE++; // Otherwise (if there was a mismatch), proceed to Feedback stage.
				break;
			}
			case 2: { // 2 = Feedback.
				STAGE--; // Return to Training stage.
				t_start = performance.now(); // Training time begins for the next attempt.
				break;
			}
			case 3: { // 3 = Generalization.
				let neg_count = 0, p1_count = 0, p2_count = 0;
				let selected_items = [], unselected_items = [];
				for (let i = 0; i < SELECTED_ITEMS.length; i++) {
					if (SELECTED_ITEMS[i] == true) {
						switch(CORRECT_ITEMS[i]) { // ### TEMPORARY ###
							case 0: neg_count++; break;
							case 1: p1_count++; break;
							case 2: p2_count++; break;
						}
						selected_items.push(GENERALIZATION_ITEMS_SRC[i]);
					}
					else unselected_items.push(GENERALIZATION_ITEMS_SRC[i]);
				}
				GENERALIZATION_NEG.push(neg_count);
				GENERALIZATION_P1.push(p1_count);
				GENERALIZATION_P2.push(p2_count);
				GENERALIZATION_SELECTED.push(selected_items);
				GENERALIZATION_UNSELECTED.push(unselected_items);
				STAGE++; // Proceed to Explanation stage.
				break;
			}
			case 4: { // 4 = Explanation.
				EXPLANATIONS.push(document.querySelector(".in").value); // Explanation is recorded.
				TRIAL++; // Proceed to next Trial ...
				STAGE = 0; // ... beginning from its Learning stage.
				break;
			}
			//default: // TODO: Handle possible errors.
	}
	startTrialStage();
}

function startTrials() {
	TRIAL = 0;
	STAGE = 0;
	assignShuffledSymbols(); // Items are translated into strings using shuffled ALPHABET.
	startTrialStage();
}

document.querySelector(".stage-btn").addEventListener("click", nextTrialStage);

// TODO: Add warning when attempting to reset experiment.
// This function is executed once when the script is first parsed:
startTrials();
