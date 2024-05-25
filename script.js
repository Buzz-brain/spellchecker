const oldTestamentBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", 
    "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", 
    "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", 
    "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"
];

const newTestamentBooks = [
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", 
    "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", 
    "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"
];

const kingsOfIsrael = [
    "Jeroboam I", "Nadab", "Baasha", "Elah", "Zimri", "Omri", "Ahab", "Ahaziah", "Jehoram", "Jehu", "Jehoahaz", 
    "Jehoash", "Jeroboam II", "Zechariah", "Shallum", "Menahem", "Pekahiah", "Pekah", "Hoshea"
];

const kingsOfJudah = [
    "Rehoboam", "Abijah", "Asa", "Jehoshaphat", "Jehoram", "Ahaziah", "Athaliah", 
    "Joash", "Amaziah", "Uzziah", "Jotham", "Ahaz", "Hezekiah", "Manasseh", "Amon", "Josiah", 
    "Jehoahaz", "Jehoiakim", "Jehoiachin", "Zedekiah"
];

const queensInTheBible = [
    "Queen of Sheba", "Queen Vashti", "Queen Esther", "Queen Jezebel", "Queen Maacah", "Queen Athaliah", "Queen Candace"
];

const tribesOfIsrael = [
    "Reuben", "Simeon", "Levi", "Judah", "Dan", "Naphtali", "Gad", "Asher", "Issachar", "Zebulun", "Ephraim", "Manasseh"
];

const animalsInTheBible = [
    "Sheep", "Goats", "Cattle", "Donkeys", "Camels", "Horses", "Lions", "Leviathan", "Behemoth", "Eagles", "Ravens", 
    "Doves", "Oxen", "Fish", "Deer", "Ants", "Lambs", "Serpents", "Dogs", "Bees", "Wolves", "Foxes", "Bears", 
    "Leopards", "Crows", "Gazelles", "Unicorns", "Dragons", "Whales", "Dromedaries"
];

const rivers = [
    "Nile River", "Jordan River", "Euphrates River", "Tigris River", "Pishon River", "Gihon River", "Hiddekel (Tigris) River", 
    "Chebar River", "Brook Kidron", "Brook Besor", "Arnon River", "Besor River", "Kishon River", "Sihor River", 
    "The River of God", "The River of Life"
];

const cities_towns = [
    "Jerusalem", "Bethlehem", "Nazareth", "Jericho", "Capernaum", "Samaria", "Bethany", "Hebron", "Gaza", 
    "Tyre and Sidon", "Nineveh", "Babylon", "Damascus", "Shiloh", "Ai", "Gibeon", "Sodom and Gomorrah", "Tarsus", 
    "Antioch", "Ephesus"
];

const stones = [
    "Foundation Stones", "Memorial Stones", "Altar Stones", "Stones of Judgment", "Precious Stones", "Cornerstones", 
    "Smooth Stones", "White Stones", "Rock", "Pillar Stones", "Lapidary Stones", "Grinding Stones", "Stones of Remembrance", 
    "Precious Cornerstones", "Stones of Sacrifice", "Hewn Stones", "Living Stones", "Fiery Stones", "Burial Stones", 
    "Stones of Rejection"
];

const prophets = [
    "Isaiah", "Jeremiah", "Lamentations (Traditionally attributed to Jeremiah)", "Ezekiel", "Daniel", "Hosea", "Joel", 
    "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Moses", 
    "Samuel", "Elijah", "Elisha", "Nathan", "Gad", "Shemaiah", "Iddo"
];

const judges = [
    "Othniel", "Ehud", "Shamgar", "Deborah", "Gideon", "Abimelech", "Tola", "Jair", "Jephthah", "Ibzan", "Elon", "Abdon"
];

const mountains_mounts_hills = [
    "Mount Sinai", "Mount Moriah", "Mount Zion", "Mount Carmel", "Mount Hermon", "Mount Nebo", 
    "Mount of Olives", "Mount Ebal and Mount Gerizim", "Mount Ararat", "Mount Sinai", "Mount Seir", 
    "Mount Gilboa", "Mount Gilead", "Mount Tabor", "Mount Ephraim", "Mount Hor", "Mount Seir", "Mount Paran", 
    "Mount Lebanon", "Mount Sion", "Mount Bashan", "Mount Sinai"
];

// Get the user input
let totalCount = document.getElementById('total');
let userInput = document.getElementById('wordInput');
let correctCount = document.getElementById('correct');
let wrongCount = document.getElementById('wrong');
let percentage = document.getElementById('percentage');
let ratingMessage = document.getElementById('rating');
let checkSpelling = document.getElementById('checkSpelling');
let scoreSheet = document.getElementById('scoreSheet');
let showScoreSheet = document.getElementById('showScoreSheet');
let closeScoreSheet = document.getElementById('closeScoreSheet');

correct = [];
wrong = [];
total = [];


checkSpelling.addEventListener("click", (e) => {
    
    // Initialize result message
    let resultMessage = "";

    const allWords = [
        ...oldTestamentBooks, ...newTestamentBooks, ...kingsOfIsrael, ...kingsOfJudah, ...queensInTheBible, 
        ...tribesOfIsrael, ...animalsInTheBible, ...rivers, ...cities_towns, ...stones, ...prophets, 
        ...judges, ...mountains_mounts_hills
    ];
    
    if (userInput.value == "") {
        resultMessage = "Input a word";
        document.getElementById('message').innerText = resultMessage;
        document.getElementById('message').style.color = "red";
    } else {
    // Convert both user input and stored words to lowercase
    const lowerCaseInput = userInput.value.toLowerCase();
    const lowerCaseWords = allWords.map(word => word.toLowerCase());
    
    total.push("total")

    // Check if the user input matches any of the stored words
    if (lowerCaseWords.includes(lowerCaseInput)) {
        resultMessage = "Correct!";
        correct.push("correct")
        document.getElementById('message').innerText = resultMessage;
        document.getElementById('message').style.color = "green";
    } else {
        resultMessage = "Wrong!";
        wrong.push("wrong")
        document.getElementById('message').innerText = resultMessage;
        document.getElementById('message').style.color = "red";
    }
    correctCount.innerHTML = correct.length;
    wrongCount.innerHTML = wrong.length;
    totalCount.innerHTML = total.length;


    const percent = (correct.length / total.length) * 100;

    let rating;
    if (percent >= 70) {
        rating = "Excellent";
    } else if (percent >= 60) {
        rating = "Very Good";
    } else if (percent >= 50) {
        rating = "Good";
    } else if (percent >= 40) {
        rating = "Poor";
    } else {
        rating = "Very Poor";
    }
    percentage.innerHTML = percent
    ratingMessage.innerHTML = rating
    logInput(userInput.value, resultMessage);
    userInput.value = "";
}
})


function logInput(word, resultMessage) {
    
    // Add the list item to the history list
    let result = document.getElementsByClassName("result");

    if (resultMessage == "Wrong!") {
        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `<p class="word">${word}</p>
        <p class="result" style="color:red">${resultMessage}</p>`
        document.getElementById('historyList').appendChild(li);
    } 
    if (resultMessage == "Correct!") {
        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `<p class="word">${word}</p>
        <p class="result" style="color:green">${resultMessage}</p>`
        document.getElementById('historyList').appendChild(li);
    }
}


showScoreSheet.addEventListener("click", ()=> {
    scoreSheet.style.display = "block"
    closeScoreSheet.style.display = "block"
    showScoreSheet.style.display = "none"
    closeScoreSheet.style.backgroundColor = "blue"
    correctCount.style.color = "green"
    wrongCount.style.color = "red"
    percentage.style.color = "blue"
})
closeScoreSheet.addEventListener("click", ()=> {
    scoreSheet.style.display = "none"
    closeScoreSheet.style.display = "none"
    showScoreSheet.style.display = "block"
    correctCount.style.color = "green"
    wrongCount.style.color = "red"
    percentage.style.color = "blue"
})