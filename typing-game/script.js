const displayDetails = document.getElementById('display-details');
const correctWords = document.getElementById('correctWords')
const timer = document.getElementById('timer');
const textPart = document.getElementById('text-part');
const wordContainer = document.getElementById('wordContainer');
const userInput = document.getElementById('input-part');
const textArea = document.getElementById('textArea');
const enterBtn = document.getElementById('enter');
const optionPart = document.getElementById('option-part');
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');
const thirtySec = document.getElementById('30sec');
const sixtySec = document.getElementById('60sec');
const startBtn = document.getElementById('start');
const scoreBoard = document.getElementById('scoreBoard');
const myCorrectWords = document.getElementById('myCorrectWords');
const myWrongWords = document.getElementById('myWrongWords');
const showLeaderBoard = document.getElementById('showLeaderBoard');
const leaderBoard = document.getElementById('leaderBoard');
const showProfile = document.getElementById("showProfile");
const userProfile = document.getElementById("userProfile");
const play = document.getElementById("play");

let level = 0;
let sec = 0;
let correct = 0;
let wrong = 0;
let wordArray = [];
let index = 0;
let arr = [];

let easyWords = ["a", "about", "above", "across", "act", "add", "afraid", "after", "again", "age", "ago", "agree", "air", "all", "alone", "along", "always", "am", "amount", "an", "and", "angry", "another", "answer", "any", "anyone", "appear", "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask", "at", "aunt", "away", "baby", "back", "bad", "bag", "ball", "bank", "base", "bath", "be", "bean", "bear", "bed", "beer", "before", "begin", "bell", "below", "best", "big", "bird", "birth", "bit", "bite", "black", "bleed", "block", "blood", "blow", "blue", "board", "boat", "body", "boil", "bone", "book", "border", "born", "both", "bowl", "box", "boy", "branch", "brave", "bread", "break", "breathe", "bridge", "bright", "bring", "brother", "brown", "brush", "build", "burn", "bus", "busy", "but", "buy", "by", "cake", "call", "can", "cap", "car", "card", "care", "carry", "case", "cat", "catch", "chair", "chase", "cheap", "cheese", "child", "choice", "circle", "city", "class", "clever", "clean", "clear", "climb", "clock", "cloth", "cloud", "close", "coffee", "coat", "coin", "cold", "colour", "comb", "common", "compare", "come", "control", "cook", "cool", "copper", "corn", "corner", "correct", "cost", "count", "cover", "crash", "cross", "cry", "cup", "cut", "dance", "dark", "day", "dead", "decide", "deep", "deer", "desk", "die", "dirty", "dish", "do", "dog", "door", "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", "duck", "dust", "duty", "each", "ear", "early", "earn", "earth", "east", "easy", "eat", "effect", "egg", "eight", "else", "empty", "end", "enemy", "enjoy", "enter", "equal", "even", "event", "ever", "every", "exact", "except", "expect", "explain", "eye", "face", "fact", "fail", "fall", "false", "family", "famous", "far", "farm", "fast", "fat", "fault", "fear", "feed", "feel", "fever", "few", "fight", "fill", "film", "find", "fine", "fire", "first", "fish", "fit", "five", "fix", "flag", "flat", "float", "floor", "flour", "fly", "fold", "food", "fool", "foot", "for", "force", "forest", "forget", "fork", "form", "fox", "four", "free", "freeze", "fresh", "friend", "from", "front", "fruit", "full", "fun", "funny", "future", "game", "gate", "get", "gift", "give", "glad", "glass", "go", "goat", "god", "gold", "good", "grass", "grave", "great", "green", "gray", "group", "grow", "gun", "hair", "half", "hall", "hand", "happy", "hard", "hat", "hate", "have", "he", "head", "hear", "heavy", "heart", "hello", "help", "hen", "her", "here", "hers", "hide", "high", "hill", "him", "his", "hit", "hobby", "hold", "hole", "home", "hope", "horse", "hot", "hotel", "house", "how", "hour", "hurry", "hurt", "I", "ice", "idea", "if", "in", "into", "invent", "iron", "is", "island", "it", "its", "jelly", "job", "join", "juice", "jump", "just", "keep", "key", "kill", "kind", "king", "knee", "knife", "knock", "know", "lady", "lamp", "land", "large", "last", "late", "laugh", "lazy", "lead", "leaf", "learn", "leave", "leg", "left", "lend", "length", "less", "lesson", "let", "letter", "lie", "life", "light", "like", "lion", "lip", "list", "live", "lock", "lonely", "long", "look", "lose", "lot", "love", "low", "lower", "luck", "main", "make", "male", "man", "many", "map", "mark", "may", "me", "meal", "mean", "meat", "meet", "milk", "mind", "miss", "mix", "model", "money", "month", "moon", "more", "most", "mouth", "move", "much", "music", "must", "my", "name", "near", "neck", "need", "needle", "net", "never", "new", "news", "next", "nice", "night", "nine", "no", "noble", "noise", "none", "nor", "north", "nose", "not", "notice", "now", "obey", "ocean", "of", "off", "offer", "office", "often", "oil", "old", "on", "one", "only", "open", "or", "orange", "order", "other", "our", "out", "over", "own", "page", "pain", "paint", "pair", "pan", "paper", "park", "part", "party", "pass", "past", "path", "pay", "peace", "pen", "per", "piano", "pick", "piece", "pig", "pin", "pink", "place", "plane", "plant", "plate", "play", "please", "plenty", "point", "polite", "pool", "poor", "pour", "power", "press", "pretty", "price", "prince", "prison", "prize", "pull", "punish", "pupil", "push", "put", "queen", "quick", "quiet", "radio", "rain", "rainy", "raise", "reach", "read", "ready", "real", "red", "rent", "reply", "rest", "rice", "rich", "ride", "right", "ring", "rise", "road", "rob", "rock", "room", "round", "rude", "rule", "ruler", "run", "rush", "sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school", "search", "seat", "second", "see", "seem", "sell", "send", "serve", "seven", "sex", "shade", "shake", "shape", "share", "sharp", "she", "sheep", "sheet", "shine", "ship", "shirt", "shoe", "shoot", "shop", "short", "shout", "show", "sick", "side", "silly", "silver", "simple", "single", "since", "sing", "sink", "sister", "sit", "six", "size", "skill", "skin", "skirt", "sky", "sleep", "slip", "slow", "small", "smell", "smile", "smoke", "snow", "so", "soap", "sock", "soft", "some", "son", "soon", "sorry", "sound", "soup", "south", "space", "speak", "speed", "spell", "spend", "spoon", "sport", "spread", "spring", "square", "stamp", "stand", "star", "start", "stay", "steal", "steam", "step", "still", "stone", "stop", "store", "storm", "story", "street", "study", "stupid", "such", "sugar", "sun", "sunny", "sure", "sweet", "swim", "sword", "table", "take", "talk", "tall", "taste", "taxi", "tea", "teach", "team", "tear", "tell", "ten", "tennis", "test", "than", "that", "the", "their", "then", "there", "these", "thick", "thin", "thing", "think", "third", "this", "threat", "three", "tidy", "tie", "title", "to", "today", "toe", "too", "tool", "tooth", "top", "total", "touch", "town", "train", "tram", "tree", "true", "trust", "twice", "try", "turn", "type", "ugly", "uncle", "under", "unit", "until", "up", "use", "useful", "usual", "usually", "very", "voice", "visit", "wait", "wake", "walk", "want", "warm", "was", "wash", "waste", "watch", "water", "way", "we", "weak", "wear", "week", "weight", "were", "well", "west", "wet", "what", "wheel", "when", "where", "which", "while", "white", "who", "why", "wide", "wife", "wild", "will", "win", "wind", "wine", "wire", "wise", "wish", "with", "woman", "word", "work", "world", "worry", "yard", "yell", "yet", "you", "young", "your", "zero", "zoo"];

let mediumWords = ["ability", "able", "about", "above", "accept", "according", "account", "across", "action", "activity", "actually", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "agency", "agent", "ago", "agree", "agreement", "ahead", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "around", "arrive", "article", "artist", "assume", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "ball", "bank", "beat", "beautiful", "because", "become", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "bill", "billion", "black", "blood", "blue", "board", "body", "book", "born", "both", "break", "bring", "brother", "budget", "build", "building", "business", "call", "camera", "campaign", "cancer", "candidate", "capital", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "dark", "data", "daughter", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "doctor", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "general", "generation", "girl", "give", "glass", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "head", "health", "hear", "heart", "heat", "heavy", "help", "here", "herself", "high", "him", "himself", "his", "history", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "item", "it's", "itself", "join", "just", "keep", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lead", "leader", "learn", "least", "leave", "left", "legal", "less", "letter", "level", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "love", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "maybe", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "news", "newspaper", "next", "nice", "night", "none", "north", "note", "nothing", "notice", "number", "occur", "off", "offer", "office", "officer", "official", "often", "once", "only", "onto", "open", "operation", "opportunity", "option", "order", "organization", "other", "others", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "peace", "people", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "safe", "same", "save", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "situation", "size", "skill", "skin", "small", "smile", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "tend", "term", "test", "than", "thank", "that", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "today", "together", "tonight", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV", "type", "under", "understand", "unit", "until", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "watch", "water", "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white", "whole", "whom", "whose", "wide", "wife", "will", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "young", "your", "yourself"];

let hardWords = "Cell phones have gone from a sought-after luxury to a daily necessity. While these devices provide convenient access to the outside world, they can be problematic for educators. High school teachers can tell children in their classes to put their phones away, but shouldprofessors have the same control over adult men and women ? The key is to create cellphone usage policies that limit distractions without hindering student rights. The primary argument supporting cell phone control in the classroom is the fact that phones can be distracting.Not only do cell phones distract instructors, but they may also distract students trying to pay attention to the lecture.This is the same effect as a moviegoer looking at his phone in a theater.Even if the phone makes no noise, the light from the screen is enough to catch someone's attention. Arguments against cell phone control typically focus on safety concerns.Should a crisis occur in the classroom, students should have their phones on hand to make a call.If a student has a child, he or she may need a phone in case of a medical emergency.If the student is on call for work, he or she will need access to a phone.The list of exception worthy scenarios is endless. The best solution is to create cell phone usage rules that allow devices to be accessible without disturbing other students' educational opportunities. Students should be permitted to keep their phones in their bags, pockets, or other belongings as long as the phones are on silent in class.Vibrate settings may be permitted if the instructor does not believe it will distract him or her, since the noise of the vibration may not be noticeable in a large classroom.If a student needs to answer the phone during an emergency, he or she can step out of the classroom to do so.This setup would give the students and the instructor peace of mind. Cell phone restrictions in classrooms should also include specific disciplinary actions for breaking the rules.If a student is caught using the phone in class, he or she should be excused for the rest of the day.Professors should refrain from physically taking possession of a student's phone because of liability conflicts. If the phone is damaged while in the professor's possession, the school or the instructor could be held responsible for the repairs. It is safer to ask the student to leave the classroom than it is to take the phone away completely. Each school, professor and student body is different.Colleges must adapt their rules and discipline efforts to reflect the current needs of their students.Eliminating cell phones in college classrooms is an overstretch, but there are ways to balance students' rights and instructors' rights. With the right amount of control and flexibility, colleges can create a pleasant learning environment with maximum safety and minimal interruptions."


let strArray = hardWords.split(" ");


(() => {
    displayDetails.style.display = 'none';
    textPart.style.display = 'none';
    scoreBoard.style.display = 'none';
    optionPart.style.display = 'flex';
})()

easy.addEventListener('click', () => {
    easy.style.background = '#ffffff5f'
    medium.style.background = 'transparent';
    hard.style.background = 'transparent';
    level = 0;
})
medium.addEventListener('click', () => {
    medium.style.background = '#ffffff5f'
    easy.style.background = 'transparent';
    hard.style.background = 'transparent';
    level = 2;
})
hard.addEventListener('click', () => {
    hard.style.background = '#ffffff5f'
    easy.style.background = 'transparent';
    medium.style.background = 'transparent';
    level = 3;
})

function setLevel(level) {
    switch (level) {
        case "Easy": {
            let word;
            for (let i = 0; i < easyWords.length; i++) {
                word = easyWords[i];
                createSpan(`word ${i}`, word);
            }

            break;
        }
        case "Medium": {
            let word;
            for (let i = 0; i < mediumWords.length; i++) {
                word = mediumWords[i];
                createSpan(`word ${i}`, word);
            }
            break;
        }
        case "Hard": {
            let word;
            for (let i = 0; i < strArray.length; i++) {
                word = strArray[i];
                createSpan(`word ${i}`, word);
            }
            break;
        }
    }
}

thirtySec.addEventListener('click', () => {
    thirtySec.style.background = '#ffffff5f'
    sixtySec.style.background = 'transparent';
    timer.innerHTML = "30s"
    sec = 30;
})
sixtySec.addEventListener('click', () => {
    sixtySec.style.background = '#ffffff5f'
    thirtySec.style.background = 'transparent';
    timer.innerHTML = "60s"
    sec = 60;
})

function setTimer(sec) {
    let time = setInterval(function () {
        sec--;
        timer.innerHTML = sec + "s";
        if (sec === 0) {
            clearInterval(time);
            displayMyScore();
            alert("Time's up!");
        }
    }, 1000)
}

startBtn.addEventListener("click", () => {
    displayDetails.style.display = 'block';
    textPart.style.display = 'block';
    optionPart.style.display = 'none';

    if (level === 0) {
        setLevel("Easy");
        arr = easyWords;

    }
    else if (level === 2) {
        setLevel("Medium");
        arr = mediumWords;
    }

    else if (level === 3) {
        setLevel("Hard");
        arr = strArray;
    }
    if (sec === 30) setTimer(30);
    else if (sec === 60 || sec === 0) setTimer(60);
})

function createSpan(id, word) {
    let span = document.createElement("span");
    let node = document.createTextNode(word);
    span.appendChild(node);
    let rndm = wordContainer.appendChild(span)
    rndm.setAttribute("id", id);
    rndm.setAttribute("class", "current")

}

function getUserInput() {
    let userWord = textArea.value;
    userWord = userWord.replace("\n", "");
    userWord = userWord.replace(" ", "");
    wordArray.push(userWord);

    if (wordArray[index] === arr[index]) {
        correct++;
        document.getElementById("word " + index).style.color = "green";
        correctWords.innerHTML = correct;
        index++;
    }
    else {
        document.getElementById("word " + index).style.color = "red";
        wrong++;
        index++;
    }

}


textArea.addEventListener("keypress", (a) => {
    // console.log(a.key);
    if (a.key === "Enter" || a.key === " ") {
        getUserInput();
        textArea.value = null;
    }
})



function displayMyScore() {
    scoreBoard.style.display = "flex";
    displayDetails.style.display = 'none';
    textPart.style.display = 'none';
    optionPart.style.display = 'none';
    myCorrectWords.innerHTML = correct;
    myWrongWords.innerHTML = wrong;
}


showLeaderBoard.addEventListener("click", () => {
    leaderBoard.style.display = "flex";
    userProfile.style.display = "none";
    scoreBoard.style.display = "none";
    displayDetails.style.display = 'none';
    textPart.style.display = 'none';
    optionPart.style.display = 'none';
})

showProfile.addEventListener("click", () => {
    userProfile.style.display = "block";
    leaderBoard.style.display = "none";
    scoreBoard.style.display = "none";
    displayDetails.style.display = 'none';
    textPart.style.display = 'none';
    optionPart.style.display = 'none';
})

play.addEventListener("click", () => {
    optionPart.style.display = 'flex';
    userProfile.style.display = "none";

})

document.getElementById("showAlert").addEventListener("click", () => {
    alert("This is a mini Web Application.")
})
