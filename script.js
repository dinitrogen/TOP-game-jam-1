
const staffDiv = document.querySelector('.staffDiv');
const gameMap = document.querySelector('.gameMap');
const levelDisplay = document.querySelector('#levelDisplay');
const levelNameDisplay = document.querySelector('#levelNameDisplay');
const resultDisplay = document.querySelector('#resultDisplay');
const scoreDisplay = document.querySelector('#scoreDisplay');
const lifeDisplay = document.querySelector('#lifeDisplay');
const endGameOverlay = document.querySelector('#endGameOverlay');
const gameOver = document.querySelector('#gameOver');
const replayButton = document.querySelector('#replayButton');
replayButton.addEventListener('click', () => {
    startNewGame();
    playBGMusic(bgMusic[0]);
    bgMusicDelay = 0.5;
});

const nextLevelButton = document.querySelector('#nextLevelButton');
nextLevelButton.addEventListener('click', goToNextLevel);

const notesLibrary = ['A','Ab','A#','B','Bb','C','C#','D','Db','D#','E','Eb','F','F#','G','Gb','G#'];
console.log(notesLibrary.length);
let notesList = [];
let correctAnswer;
let gridSize = 10;
let gridArea = gridSize ** 2;
let activeTileIndex = 0;
let activeTile;
let enemyTileIndex = gridArea - 1
let enemyTile;
let score = 0;
let life = 5;

let bgMusicDelay = 0.5;
let bgMusic = [
    {
        name: "Level start",
        notes: ['B2', 'B3', 'A3', 'B3', 'B2', 'B3', 'A3', 'F#3', 'B3', 'F#4', 'D#4'],
        durations: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5]
    }
];

let levels = [
    {
        name: "C triad",
        notes: ['C', 'E', 'G'],
        octaves: ['4', '4', '4'],
        durations: [1, 1, 2] // in seconds
    },
    {
        name: "Easy as 1-2-3",
        notes: ['A', 'B', 'C'],
        octaves: ['3', '3', '4'],
        durations: [1, 1, 2]
    },
    {
        name: "Mary Had a Little Lamb",
        notes: ['E', 'D', 'C', 'D', 'E', 'E', 'E', 'D', 'D', 'D', 'E', 'G', 'G'],
        octaves: ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        durations: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 1]
    },
    {
        name: "Song of Storms",
        notes: ['G', 'Bb', 'G', 'G', 'Bb', 'G', 'A', 'Bb', 'A', 'Bb', 'A', 'F', 'D'],
        octaves: ['3', '3', '4', '3', '3', '4', '4', '4', '4', '4', '4', '4', '4'],
        durations: [0.25, 0.25, 1, 0.25, 0.25, 1, 0.75, 0.25, 0.25, 0.25, 0.25, 0.25, 1]
    }

];

let levelIndex = 0;
let noteIndex = 0;
let noteDelay = 2;
correctAnswer = levels[0].notes[noteIndex];



document.addEventListener('keydown', movePlayer)

function movePlayer(event) {
    if (event.code === "ArrowLeft") {
        if (activeTileIndex === 0 || activeTileIndex % gridSize === 0) {
            return;
        } else {
            activeTile.classList.remove('activeTile');
            activeTileIndex--;
        }
    } else if (event.code === "ArrowRight") {
        if (activeTileIndex === gridArea - 1 || (activeTileIndex + 1) % gridSize === 0) {
            return;
        } else {
            activeTile.classList.remove('activeTile');
            activeTileIndex++;
        }
    } else if (event.code === "ArrowUp") {
        if (activeTileIndex < gridSize) {
            return;
        } else {
            activeTile.classList.remove('activeTile');
            activeTileIndex = activeTileIndex - gridSize;
        }
    } else if (event.code === "ArrowDown") {
        if (activeTileIndex >= gridArea - gridSize) {
            return;
        } else {
            activeTile.classList.remove('activeTile');
            activeTileIndex = activeTileIndex + gridSize;
        }
    } else if (event.code === "Space") {
        if (activeTile.textContent === ' ') {
            return;
        } else if (activeTile.textContent === correctAnswer) {
            resultDisplay.textContent = 'Correct!';
            let note = `${correctAnswer}${levels[levelIndex].octaves[noteIndex]}`;
            playNote(note, 1);
            increaseScore();
            // correctAnswer = getRandomNote();
            correctAnswer = getNextNote(levels[levelIndex], noteIndex);
            if (noteIndex >= levels[levelIndex].notes.length - 1) {
                levelComplete(levels[levelIndex]);
            } else {
                noteIndex++;
                generateNotesList(gridArea);
                populateMap(gridArea);
                staffDiv.textContent = `Find this note: "${correctAnswer}"`
            }
        } else {
            activeTile.textContent = 'X';
            resultDisplay.textContent = 'Wrong!';
            decreaseLife();
        }
    } else {
        return;
    }
    activeTile = document.querySelector(`#tile${activeTileIndex}`);
    activeTile.classList.add('activeTile');
    decideEnemyMove();
}

function moveEnemyLeft() {
    if (enemyTileIndex === 0 || enemyTileIndex % gridSize === 0) {
        return;
    } else {
        enemyTile.classList.remove('enemyTile');
        enemyTileIndex--;
    }
    enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
    enemyTile.classList.add('enemyTile');
}

function moveEnemyRight() {
    if (enemyTileIndex === gridArea - 1 || (enemyTileIndex + 1) % gridSize === 0) {
        return;
    } else {
        enemyTile.classList.remove('enemyTile');
        enemyTileIndex++;
    }
    enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
    enemyTile.classList.add('enemyTile');
}

function moveEnemyUp() {
    if (enemyTileIndex < gridSize) {
        return;
    } else {
        enemyTile.classList.remove('enemyTile');
        enemyTileIndex = enemyTileIndex - gridSize;
    }
    enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
    enemyTile.classList.add('enemyTile');
}

function moveEnemyDown() {
    if (enemyTileIndex >= gridArea - gridSize) {
        return;
    } else {
        enemyTile.classList.remove('enemyTile');
        enemyTileIndex = enemyTileIndex + gridSize;
    }
    enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
    enemyTile.classList.add('enemyTile');
}

// Enemy movement alogorithm -- needs work!
function decideEnemyMove() {
    if (activeTileIndex < enemyTileIndex) {
        if (activeTileIndex + gridSize < enemyTileIndex) {
            moveEnemyUp();
        } else {
            moveEnemyLeft();
        }
    } else if (activeTileIndex > enemyTileIndex) {
        if (activeTileIndex - gridSize > enemyTileIndex) {
            moveEnemyDown();
        } else {
            moveEnemyRight();
        }
    }
    if (activeTileIndex === enemyTileIndex) {
        decreaseLife();
        resetEnemyPosition();
    }
}

function resetEnemyPosition() {
    enemyTile.classList.remove('enemyTile');
    enemyTileIndex = gridArea -1;
    enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
    enemyTile.classList.add('enemyTile');
}

function drawGrid() {
    while (gameMap.firstChild) {
        gameMap.removeChild(gameMap.lastChild);
    }

    for  (i = 0; i < gridArea; i++) {
        const gameTile = document.createElement('div');
        gameTile.classList = 'gameTile';
        gameTile.setAttribute('id',`tile${i}`)
        gameMap.appendChild(gameTile);

        // gameTile.addEventListener('click', function() {
        //     if (this.textContent === correctAnswer) {
        //         resultDisplay.textContent = 'Correct!';
        //         increaseScore();
        //         let note = `${correctAnswer}4`;
        //         playNote(note);
        //         correctAnswer = getRandomNote();
        //         generateNotesList(gridArea);
        //         populateMap(gridArea);
        //         staffDiv.textContent = `Find this note: "${correctAnswer}"`
        //     } else if (this.textContent === ' ') {
        //         return;
        //     } else {
        //         this.textContent = 'X';
        //         resultDisplay.textContent = 'Wrong!';
        //         decreaseLife();
        //     }
        //     // TODO: remove the event listener to disable further clicks 
        // });
    }
    activeTile = document.querySelector('#tile0');
    activeTile.classList.add('activeTile');
    enemyTile = document.querySelector(`#tile${gridArea - 1}`);
    enemyTile.classList.add('enemyTile');
}

function generateNotesList(numTiles) {
    notesList[0] = correctAnswer;
    
    for (i = 1; i < numTiles; i++) {
        notesList[i] = " ";
    }
    
    // Change the i increment to adjust how populated the map is
    for (i = 1; i < numTiles; i = i + 7) {
        notesList[i] = getRandomNote();
    }

    notesList = shuffleNotesArray(notesList);
    return notesList;
}


function populateMap(numTiles) {
    for (i = 0; i < numTiles; i++) {
        document.getElementById(`tile${i}`).textContent = notesList[i];
    }
}

function getNextNote(level, currentNoteIndex) {
    if (currentNoteIndex >= level.notes.length - 1) {
        return;
    } else {
        let nextNote = level.notes[currentNoteIndex + 1];
        return nextNote;
    }
}

function getRandomNote() {
    let randomNote = notesLibrary[Math.floor(Math.random() * 17)];
    return randomNote;
}


function shuffleNotesArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function increaseScore() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
}

function decreaseLife() {
    life--;
    lifeDisplay.textContent = `Life: ${life}`;
    if (life <= 0) {
        displayGameOver();
    }
}

function displayGameOver() {
    resultDisplay.textContent = 'GAME OVER';
    gameOver.textContent = 'GAME OVER';
    endGameOverlay.style.display = 'block';
    nextLevelButton.style.display = 'none';
    replayButton.style.display = 'block';
    // TODO Game over screen
}

function displayWinScreen() {
    resultDisplay.textContent = 'You are a melody master!';
    gameOver.textContent = 'YOU ARE A MELODY MASTER!';
    endGameOverlay.style.display = 'block';
    nextLevelButton.style.display = 'none';
    replayButton.style.display = 'block';
    // TODO Win screen
}

function levelComplete(level) {
    resultDisplay.textContent = 'LEVEL COMPLETE';
    gameOver.textContent = 'LEVEL COMPLETE';
    endGameOverlay.style.display = 'block';
    nextLevelButton.style.display = 'block';
    replayButton.style.display = 'none';
    playMelody(level);
    noteDelay = 2;
}

function playNote(note, duration, delay) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, duration, delay);
}


function playMelody(level) {
    for (let i = 0; i < level.notes.length; i++) {
        let now = Tone.now();
        let note = `${level.notes[i]}${level.octaves[i]}`;
        let duration = level.durations[i];
        playNote(note, duration, now + noteDelay);
        noteDelay = noteDelay + level.durations[i];
    }
}


function playBGMusic(track) {
    for (let i = 0; i < track.notes.length; i++) {
        let now = Tone.now();
        let note = `${track.notes[i]}`;
        let duration = track.durations[i];
        playNote(note, duration, now + bgMusicDelay);
        bgMusicDelay = bgMusicDelay + track.durations[i];
    }
}

function goToNextLevel() {
    levelIndex++;
    if (levelIndex >= levels.length) {
        displayWinScreen();
    } else {
        levelDisplay.textContent = `Level ${levelIndex + 1}`;
        levelNameDisplay.textContent = `${levels[levelIndex].name}`
        startNewLevel(levels[levelIndex]);
    }
}

function startNewLevel(level) {
    endGameOverlay.style.display = 'none';
    activeTileIndex = 0;
    noteIndex = 0;
    correctAnswer = level.notes[noteIndex];
    staffDiv.textContent = `Find this note: "${correctAnswer}"`
    drawGrid();
    generateNotesList(gridArea);
    populateMap(gridArea);
    resultDisplay.textContent = '';
    resetEnemyPosition();
}

function startNewGame() {
    endGameOverlay.style.display = 'none';
    activeTileIndex = 0;
    noteIndex = 0;
    levelIndex = 0;
    correctAnswer = levels[0].notes[noteIndex];
    staffDiv.textContent = `Find this note: "${correctAnswer}"`;
    drawGrid();
    generateNotesList(gridArea);
    populateMap(gridArea);
    levelDisplay.textContent = `Level ${levelIndex + 1}`
    levelNameDisplay.textContent = `${levels[levelIndex].name}`;
    life = 5;
    lifeDisplay.textContent = `Life: ${life}`;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    resultDisplay.textContent = '';
    resetEnemyPosition();
}


startNewGame();
