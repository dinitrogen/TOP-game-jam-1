
let gameState = {
    playerName: 'Player',
    easyModeStatus: false,
    levelIndex: 1,
    life: 5,
    score: 0,
    multiplier: 1,
    multiplierCharge: 0,
    consecutiveAnswers: 0,
    longestNoteStreak: 0,
    bossNoteIndices: []
};

let highScores = [
    {name: 'AAA', score: 100000},
    {name: 'BBB', score: 75000},
    {name: 'CCC', score: 50000},
    {name: 'DDD', score: 25000},
    {name: 'EEE', score: 10000}
];

let highNoteStreaks = [
    {name: 'AAA', score: 100},
    {name: 'BBB', score: 75},
    {name: 'CCC', score: 50},
    {name: 'DDD', score: 25},
    {name: 'EEE', score: 10}
];


// Reset everything except player name
function resetGameState() {
        gameState.easyModeStatus = false;
        gameState.levelIndex = 1;
        gameState.score = 0;
        gameState.life = 5;
        gameState.multiplier = 1;
        gameState.multiplierCharge = 0;
        gameState.consecutiveAnswers = 0;
        gameState.longestNoteStreak = 0;
        gameState.bossNoteIndices = [];
}

function resetScores() {
    highScores = [
        {name: 'AAA', score: 100000},
        {name: 'BBB', score: 75000},
        {name: 'CCC', score: 50000},
        {name: 'DDD', score: 25000},
        {name: 'EEE', score: 10000}
    ];

    highNoteStreaks = [
        {name: 'AAA', score: 100},
        {name: 'BBB', score: 75},
        {name: 'CCC', score: 50},
        {name: 'DDD', score: 25},
        {name: 'EEE', score: 10}
    ];
    saveHighScores();
}

function loadGameState() {
    gameState = JSON.parse(localStorage.getItem("myGameState"));
}

function loadHighScores() {
    highScores = JSON.parse(localStorage.getItem("myHighScores"));
    console.log('Loaded high scores');
}

function loadHighNoteStreaks() {
    highNoteStreaks = JSON.parse(localStorage.getItem("myHighNoteStreaks"));
    console.log('Loaded high note streaks');
}

function saveGameState() {
    localStorage.setItem("myGameState", JSON.stringify(gameState));
}

function saveHighScores() {
    localStorage.setItem("myHighScores", JSON.stringify(highScores));
    localStorage.setItem("myHighNoteStreaks", JSON.stringify(highNoteStreaks));
    console.log('Saved high scores');
}


function saveGameData(easyModeStatus, index, life, score, multiplier, multiplierCharge, consecAns, noteStreak, bossNoteIndices) {
    gameState.easyModeStatus = easyModeStatus
    gameState.levelIndex = index;
    gameState.life = life;
    gameState.score = score;
    gameState.multiplier = multiplier;
    gameState.multiplierCharge = multiplierCharge;
    gameState.consecutiveAnswers = consecAns;
    gameState.longestNoteStreak = noteStreak;
    gameState.bossNoteIndices = bossNoteIndices;
    saveGameState();
    console.log('Game saved');
}


function updateHighScores(score) {
    if (localStorage.getItem('myHighScores')) {
        loadHighScores();  
    }
    for (let i = 0; i < highScores.length; i++) {
        if (score >= highScores[i].score) {
            let newHighScore = {name: gameState.playerName, score: score};
            highScores.splice(i, 0, newHighScore);
            highScores.pop();
            console.log('High score!');
            return;
        }
    }
}

function updateHighNoteStreaks(noteStreak) {
    if (localStorage.getItem('myHighNoteStreaks')) {
        loadHighNoteStreaks();  
    }
    for (let i = 0; i < highNoteStreaks.length; i++) {
        if (noteStreak >= highNoteStreaks[i].score) {
            let newHighNoteStreak = {name: gameState.playerName, score: noteStreak};
            highNoteStreaks.splice(i, 0, newHighNoteStreak);
            highNoteStreaks.pop();
            console.log('High note streak!');
            return;
        }
    }
}

