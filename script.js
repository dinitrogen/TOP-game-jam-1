const staffDiv = document.querySelector('.staffDiv');
const gameMap = document.querySelector('.gameMap');
const resultDisplay = document.querySelector('#resultDisplay');
const scoreDisplay = document.querySelector('#scoreDisplay');
const lifeDisplay = document.querySelector('#lifeDisplay');
const endGameOverlay = document.querySelector('#endGameOverlay');
const gameOver = document.querySelector('#gameOver');
const replayButton = document.querySelector('#replayButton');
replayButton.addEventListener('click', startNewGame);

const notesLibrary = ['A','B','C','D','E','F','G'];
let notesList = [];
let correctAnswer = getRandomNote();
let gridSize = 10;
let gridArea = gridSize ** 2;
let activeTileIndex = 0;
let activeTile;
let enemyTileIndex = gridArea - 1
let enemyTile;
let score = 0;
let life = 5;


// const newQuestionButton = document.querySelector('#newQuestion');
// newQuestionButton.addEventListener('click', function() {
//     correctAnswer = getRandomNote();
//     generateNotesList(gridArea);
//     populateMap(gridArea);
//     staffDiv.textContent = `Find this note: "${correctAnswer}"`
//     console.log(correctAnswer);
// });

document.addEventListener('keydown', movePlayer)


function movePlayer(event) {
    if (event.code === "ArrowLeft") {
        console.log("left");
        if (activeTileIndex === 0 || activeTileIndex % gridSize === 0) {
            return;
        } else {
            activeTile.classList.remove('activeTile');
            activeTileIndex--;
        }
    } else if (event.code === "ArrowRight") {
        console.log("right");
        if (activeTileIndex === gridArea - 1 || (activeTileIndex + 1) % gridSize === 0) {
            return;
        } else {
            activeTile.classList.remove('activeTile');
            activeTileIndex++;
        }
    } else if (event.code === "ArrowUp") {
        console.log("up");
        if (activeTileIndex < gridSize) {
            return;
        } else {
            activeTile.classList.remove('activeTile');
            activeTileIndex = activeTileIndex - gridSize;
        }
    } else if (event.code === "ArrowDown") {
        console.log("down");
        if (activeTileIndex >= gridArea - gridSize) {
            return;
        } else {
            activeTile.classList.remove('activeTile');
            activeTileIndex = activeTileIndex + gridSize;
        }
    } else if (event.code === "Space") {
        console.log(activeTile.textContent);
        if (activeTile.textContent === " ") {
            return;
        } else if (activeTile.textContent === correctAnswer) {
            activeTile.textContent = 'Correct!'; // Doesn't show, try timeout?
            resultDisplay.textContent = 'Correct!';
            let note = `${correctAnswer}4`;
            playNote(note);
            increaseScore();
            correctAnswer = getRandomNote();
            generateNotesList(gridArea);
            populateMap(gridArea);
            staffDiv.textContent = `Find this note: "${correctAnswer}"`
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

        gameTile.addEventListener('click', function() {
            if (this.textContent === correctAnswer) {
                resultDisplay.textContent = 'Correct!';
                increaseScore();
                let note = `${correctAnswer}4`;
                playNote(note);
                correctAnswer = getRandomNote();
                generateNotesList(gridArea);
                populateMap(gridArea);
                staffDiv.textContent = `Find this note: "${correctAnswer}"`
            } else {
                this.textContent = 'X';
                resultDisplay.textContent = 'Wrong!';
            }
            // TODO: remove the event listener to disable further clicks 
        });
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


function getRandomNote() {
    let randomNote = notesLibrary[Math.floor(Math.random() * 7)];
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
    // TODO Game over screen
}

function playNote(note) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "4n");
}

function startNewGame() {
    endGameOverlay.style.display = 'none';
    staffDiv.textContent = `Find this note: "${correctAnswer}"`
    drawGrid();
    generateNotesList(gridArea);
    populateMap(gridArea);
    life = 5;
    lifeDisplay.textContent = `Life: ${life}`;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    resultDisplay.textContent = '';
    resetEnemyPosition();
}

// staffDiv.textContent = `Find this note: "${correctAnswer}"`
// drawGrid();
// generateNotesList(gridArea);
// populateMap(gridArea);

startNewGame();