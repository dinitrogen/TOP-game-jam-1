
const staffDiv = document.querySelector('.staffDiv');
const gameMap = document.querySelector('.gameMap');
const levelDisplay = document.querySelector('#levelDisplay');
const levelNameDisplay = document.querySelector('#levelNameDisplay');
const resultDisplay = document.querySelector('#resultDisplay');
const scoreDisplay = document.querySelector('#scoreDisplay');
const lifeDisplay = document.querySelector('#lifeDisplay');
const keyDisplay = document.querySelector('#keyDisplay');
const endGameOverlay = document.querySelector('#endGameOverlay');
const gameOver = document.querySelector('#gameOver');
const replayButton = document.querySelector('#replayButton');
replayButton.addEventListener('click', () => {
    startNewGame();
    playAudioTrack('new-game', false);
    bgMusicDelay = 0.5;
});

const nextLevelButton = document.querySelector('#nextLevelButton');
nextLevelButton.addEventListener('click', goToNextLevel);


const notesLibrary = [
    // bass clef notes
    { note: 'Gb', octave: 2, noteRef: 'Gb2', svgName: 'bass-g2-flat' },
    { note: 'G', octave: 2, noteRef: 'G2', svgName: 'bass-g2' },
    { note: 'G#', octave: 2, noteRef: 'G#2', svgName: 'bass-g2-sharp' }, 
    { note: 'Ab', octave: 2, noteRef: 'Ab2', svgName: 'bass-a2-flat' },
    { note: 'A', octave: 2, noteRef: 'A2', svgName: 'bass-a2' },
    { note: 'A#', octave: 2, noteRef: 'A#2', svgName: 'bass-a2-sharp' },
    { note: 'Bb', octave: 2, noteRef: 'Bb2', svgName: 'bass-b2-flat' },
    { note: 'B', octave: 2, noteRef: 'B2', svgName: 'bass-b2' },
    { note: 'C', octave: 3, noteRef: 'C3', svgName: 'bass-c3' },
    { note: 'C#', octave: 3, noteRef: 'C#3', svgName: 'bass-c3-sharp' },
    { note: 'Db', octave: 3, noteRef: 'Db3', svgName: 'bass-d3-flat' },
    { note: 'D', octave: 3, noteRef: 'D3', svgName: 'bass-d3' },
    { note: 'D#', octave: 3, noteRef: 'D#3', svgName: 'bass-d3-sharp' },
    { note: 'Eb', octave: 3, noteRef: 'Eb3', svgName: 'bass-e3-flat' },
    { note: 'E', octave: 3, noteRef: 'E3', svgName: 'bass-e3' },
    { note: 'F', octave: 3, noteRef: 'F3', svgName: 'bass-f3' },
    { note: 'F#', octave: 3, noteRef: 'F#3', svgName: 'bass-f3-sharp' },
    { note: 'Gb', octave: 3, noteRef: 'Gb3', svgName: 'bass-g3-flat' },
    { note: 'G', octave: 3, noteRef: 'G3', svgName: 'bass-g3' },
    { note: 'G#', octave: 3, noteRef: 'G#3', svgName: 'bass-g3-sharp' },   
    { note: 'Ab', octave: 3, noteRef: 'Ab3', svgName: 'bass-a3-flat' },
    { note: 'A', octave: 3, noteRef: 'A3', svgName: 'bass-a3' },
    { note: 'A#', octave: 3, noteRef: 'A#3', svgName: 'bass-a3-sharp' }, 

    // TODO: Missing these svgs
    { note: 'Bb', octave: 3, noteRef: 'Bb3', svgName: '#' },
    { note: 'B', octave: 3, noteRef: 'B3', svgName: '#' },
    

    // treble clef notes
    { note: 'C', octave: 4, noteRef: 'C4', svgName: 'treble-c4' },
    { note: 'C#', octave: 4, noteRef: 'C#4', svgName: 'treble-c4-sharp' },
    { note: 'Db', octave: 4, noteRef: 'Db4', svgName: 'treble-d4-flat' },
    { note: 'D', octave: 4, noteRef: 'D4', svgName: 'treble-d4' },
    { note: 'D#', octave: 4, noteRef: 'D#4', svgName: 'treble-d4-sharp' },
    { note: 'Eb', octave: 4, noteRef: 'Eb4', svgName: 'treble-e4-flat' },
    { note: 'E', octave: 4, noteRef: 'E4', svgName: 'treble-e4' },
    { note: 'F', octave: 4, noteRef: 'F4', svgName: 'treble-f4' },
    { note: 'F#', octave: 4, noteRef: 'F#4', svgName: 'treble-f4-sharp' },
    { note: 'Gb', octave: 4, noteRef: 'Gb4', svgName: 'treble-g4-flat' },
    { note: 'G', octave: 4, noteRef: 'G4', svgName: 'treble-g4' },
    { note: 'G#', octave: 4, noteRef: 'G#4', svgName: 'treble-g4-sharp' },
    { note: 'Ab', octave: 4, noteRef: 'Ab4', svgName: 'treble-a4-flat' },
    { note: 'A', octave: 4, noteRef: 'A4', svgName: 'treble-a4' },
    { note: 'A#', octave: 4, noteRef: 'A#4', svgName: 'treble-a4-sharp' },
    { note: 'Bb', octave: 4, noteRef: 'Bb4', svgName: 'treble-b4-flat' },
    { note: 'B', octave: 4, noteRef: 'B4', svgName: 'treble-b4' },
    { note: 'C', octave: 5, noteRef: 'C5', svgName: 'treble-c5' },
    { note: 'C#', octave: 5, noteRef: 'C#5', svgName: 'treble-c5-sharp' },
    { note: 'Db', octave: 5, noteRef: 'Db5', svgName: 'treble-d5-flat' },
    { note: 'D', octave: 5, noteRef: 'D5', svgName: 'treble-d5' },
    { note: 'D#', octave: 5, noteRef: 'D#5', svgName: 'treble-d5-sharp' },
    
];


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
let haveKey = false;

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

let maps = [
    {
        id: 1,
        walls: [
            {
                type: 'vertical',
                length: 4,
                startX: 3,
                startY: 2
            },
            {
                type: 'horizontal',
                length: 4,
                startX: 4,
                startY: 1
            },
            {
                type: 'vertical',
                length: 3,
                startX: 7,
                startY: 5
            }
        ]
    }
]

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
        } else if (activeTile.classList.contains('hasHeart')) {
            increaseLife();
            activeTile.classList.remove('hasHeart');
            activeTile.innerHTML = '';
            // activeTile.removeChild(firstChild);
        } else if (activeTile.classList.contains('hasKey')) {
            getKey();
            activeTile.classList.remove('hasKey');
            activeTile.innerHTML = '';
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
                let octave = `${levels[levelIndex].octaves[noteIndex]}`;
                updateStaffDiv(correctAnswer, octave);
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
    }

    activeTile = document.querySelector('#tile0');
    activeTile.classList.add('activeTile');
    enemyTile = document.querySelector(`#tile${gridArea - 1}`);
    enemyTile.classList.add('enemyTile');
}

function loadMap(mapId) {
    // retrieve the map from the map collection which matches the requested map ID
    let map = maps.filter(obj => {
        return obj.id === mapId
    })[0];

    // process each wall in the map
    map.walls.forEach(wall => {

        // vertical walls advance along the Y axis
        if (wall.type === 'vertical') {
            for (let i=wall.startY; i<wall.startY+wall.length; i++) {

                // find and apply the CSS classes to the borders in between the correct tiles
                let rightWallTile = document.querySelector(`#tile${(i * gridSize) + wall.startX}`),
                    leftWallTile = document.querySelector(`#tile${(i * gridSize) + wall.startX + 1}`);
                    
                    rightWallTile.classList.add('wall-right');
                    leftWallTile.classList.add('wall-left');
            }
        }

        // horizontal walls advance along the X axis
        else if (wall.type === 'horizontal') {
            for (let i=wall.startX; i<wall.startX+wall.length; i++) {

                // find and apply the CSS classes to the borders in between the correct tiles
                let topWallTile = document.querySelector(`#tile${((wall.startY + 1) * gridSize) + i}`),
                    bottomWallTile = document.querySelector(`#tile${(wall.startY * gridSize) + i}`);
                
                    topWallTile.classList.add('wall-top');
                    bottomWallTile.classList.add('wall-bottom');
            }
        }
    });
}

function generateNotesList(numTiles) {
    notesList[0] = correctAnswer;
    notesList[1] = 'H';
    notesList[2] = 'K';
    
    for (i = 3; i < numTiles; i++) {
        notesList[i] = " ";
    }
    
    // Change the i increment to adjust how populated the map is
    for (i = 3; i < numTiles; i = i + 7) {
        notesList[i] = getRandomNote();
    }

    notesList = shuffleNotesArray(notesList);
    return notesList;
}


function populateMap(numTiles) {
    for (i = 0; i < numTiles; i++) {
        if (notesList[i] === 'H') {
            let heart = document.createElement('object');
            heart.setAttribute('data', `./img/map-icons/heart.svg`);
            heart.setAttribute('type', 'image/svg+xml');
            heart.setAttribute('class', 'mapHeart');
            document.getElementById(`tile${i}`).innerHTML = '';
            document.getElementById(`tile${i}`).appendChild(heart)
            document.getElementById(`tile${i}`).classList.add('hasHeart');
        
        } else if (notesList[i] === 'K') {
            let key = document.createElement('object');
            key.setAttribute('data', `./img/map-icons/key.svg`);
            key.setAttribute('type', 'image/svg+xml');
            key.setAttribute('class', 'mapKey');
            document.getElementById(`tile${i}`).innerHTML = '';
            document.getElementById(`tile${i}`).appendChild(key)
            document.getElementById(`tile${i}`).classList.add('hasKey');

        } else {
            document.getElementById(`tile${i}`).textContent = notesList[i];
        }
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
    let randomNote = notesLibrary[Math.floor(Math.random() * 17)].note;
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
    updateLifeBar(life);
    //lifeDisplay.textContent = `Life: ${life}`;
    if (life <= 0) {
        displayGameOver();
    }
}

function increaseLife() {
    if (life < 5) {
        life++;
    }
    updateLifeBar(life);
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


// function playBGMusic(track) {
//     for (let i = 0; i < track.notes.length; i++) {
//         let now = Tone.now();
//         let note = `${track.notes[i]}`;
//         let duration = track.durations[i];
//         playNote(note, duration, now + bgMusicDelay);
//         bgMusicDelay = bgMusicDelay + track.durations[i];
//     }
// }

// Plays background music/sounds from .wav files
function playAudioTrack(trackName, loopStatus) {
    const musicTrack = new Tone.Player(`./music/${trackName}.wav`).toDestination();
    musicTrack.autostart = true;
    musicTrack.loop = loopStatus; // boolean
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
    let octave = level.octaves[noteIndex];
    updateStaffDiv(correctAnswer, octave);
    drawGrid();
    loadMap(1);
    generateNotesList(gridArea);
    populateMap(gridArea);
    resultDisplay.textContent = '';
    resetEnemyPosition();
    haveKey = false;
    keyDisplay.innerHTML = '';
    // playAudioTrack('new-game', false);
}

function startNewGame() {
    endGameOverlay.style.display = 'none';
    activeTileIndex = 0;
    
    noteIndex = 0;
    levelIndex = 0;
    correctAnswer = levels[0].notes[noteIndex];
    let octave = levels[0].octaves[noteIndex];
    updateStaffDiv(correctAnswer, octave);
    drawGrid();
    loadMap(1);
    generateNotesList(gridArea);
    populateMap(gridArea);
    levelDisplay.textContent = `Level ${levelIndex + 1}`
    levelNameDisplay.textContent = `${levels[levelIndex].name}`;
    life = 5;
    updateLifeBar(life);
    haveKey = false;
    keyDisplay.innerHTML = '';
    // lifeDisplay.textContent = `Life: ${life}`;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    resultDisplay.textContent = '';
    resetEnemyPosition();
    
}


function createTrebleStaffNote(note, octave) {
    let fullNote = `${note}${octave}`;
    let noteIndex = notesLibrary.map(function(e) {
        return e.noteRef;
    }).indexOf(fullNote);

    let svgNoteName = notesLibrary[noteIndex].svgName;

    const svgStaffNote = document.createElement('object');
    svgStaffNote.setAttribute('data', `./img/staff-notes/${svgNoteName}.svg`);
    svgStaffNote.setAttribute('type', 'image/svg+xml');
    svgStaffNote.setAttribute('class', 'svgNote');
    return svgStaffNote
}

function updateStaffDiv(note, octave) {
    staffDiv.innerHTML = '';
    staffDiv.appendChild(createTrebleStaffNote(note, octave));
}

function updateLifeBar(life) {
    lifeDisplay.textContent = 'LIFE: ';
    
    for (let i = 0; i < life; i++) {
        let heart = document.createElement('object');
        heart.setAttribute('data', `./img/map-icons/heart.svg`);
        heart.setAttribute('type', 'image/svg+xml');
        heart.setAttribute('class', 'heart');
        lifeDisplay.appendChild(heart);
    }
}

function getKey() {
    if (haveKey === false) {
        let key = document.createElement('object');
        key.setAttribute('data', `./img/map-icons/key.svg`);
        key.setAttribute('type', 'image/svg+xml');
        key.setAttribute('class', 'key');
        keyDisplay.appendChild(key);
        haveKey = true;
    }
}


startNewGame();






