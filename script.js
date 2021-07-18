import { levels } from './levels.js';
import { notesLibrary } from './note-library.js';
import { maps } from './maps.js';



// Main game screen loader
function loadGameScreen() {

    const levelDisplay = document.createElement('div');
    levelDisplay.setAttribute('id', 'levelDisplay');
    levelDisplay.textContent = 'Level:';
    
    const levelNameDisplay = document.createElement('div');
    levelNameDisplay.setAttribute('id', 'levelNameDisplay');

    const lifeDisplay = document.createElement('div');
    lifeDisplay.setAttribute('id', 'lifeDisplay');
    lifeDisplay.textContent = 'Life: 5';

    const scoreDisplay = document.createElement('div');
    scoreDisplay.setAttribute('id', 'scoreDisplay');
    scoreDisplay.textContent = 'Score: 0';

    const resultDisplay = document.createElement('div');
    resultDisplay.setAttribute('id', 'resultDisplay');
    resultDisplay.textContent = '[result]';

    const keyDisplay = document.createElement('div');
    keyDisplay.setAttribute('id', 'keyDisplay');

    const staffDiv = document.createElement('div');
    staffDiv.setAttribute('class', 'staffDiv');
    
    const gameMap = document.createElement('div');
    gameMap.setAttribute('class', 'gameMap');
    
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(levelDisplay);
    content.appendChild(levelNameDisplay);
    content.appendChild(lifeDisplay);
    content.appendChild(scoreDisplay);
    content.appendChild(resultDisplay);
    content.appendChild(keyDisplay);
    content.appendChild(staffDiv);
    content.appendChild(gameMap);

     
    const endGameOverlay = document.querySelector('#endGameOverlay');
    const gameOver = document.querySelector('#gameOver');
    const replayButton = document.querySelector('#replayButton');
    replayButton.addEventListener('click', () => {
        startNewGame();
        // if (bgMusicTrack) {
        //     bgMusicTrack.stop();
        // }
        playAudioTrack('new-game', false);
    });

    const nextLevelButton = document.querySelector('#nextLevelButton');
    nextLevelButton.addEventListener('click', goToNextLevel);

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
    //let bgMusicTrack;

    let levelIndex = 0;
    let noteIndex = 0;
    let noteDelay = 2;
    correctAnswer = levels[0].notes[noteIndex].letter;



    document.addEventListener('keydown', movePlayer)

      
    function movePlayer(event) {
        let previousTileIndex = activeTileIndex;
      
        if (event.code === "ArrowLeft") {
            if (activeTileIndex === 0 || activeTileIndex % gridSize === 0 || activeTile.classList.contains('wall-left')) {
                return;
            } else {
                activeTile.classList.remove('activeTile');
                activeTileIndex--;
            }
        } else if (event.code === "ArrowRight") {
            if (activeTileIndex === gridArea - 1 || (activeTileIndex + 1) % gridSize === 0 || activeTile.classList.contains('wall-right')) {
                return;
            } else {
                activeTile.classList.remove('activeTile');
                activeTileIndex++;
            }
        } else if (event.code === "ArrowUp") {
            if (activeTileIndex < gridSize || activeTile.classList.contains('wall-top')) {
                return;
            } else {
                activeTile.classList.remove('activeTile');
                activeTileIndex = activeTileIndex - gridSize;
            }
        } else if (event.code === "ArrowDown") {
            if (activeTileIndex >= gridArea - gridSize || activeTile.classList.contains('wall-bottom')) {
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
                let note = `${correctAnswer}${levels[levelIndex].notes[noteIndex].octave}`;
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
                    let octave = `${levels[levelIndex].notes[noteIndex].octave}`;
                    updateStaffDiv(correctAnswer, octave);
                }
            } else {
                activeTile.textContent = 'X';
                resultDisplay.textContent = 'Wrong!';
                decreaseLife();
            }
          
            // Prevent "hero" class from being removed after space is pressed.
            return;
        } else {
            return;
        }
        activeTile = document.querySelector(`#tile${activeTileIndex}`);
        activeTile.classList.add('activeTile');
        renderHeroSprite(activeTileIndex, previousTileIndex);
        decideEnemyMove();
    }

  

    function moveEnemyLeft() {
        let previousEnemyTileIndex = enemyTileIndex;
        if (enemyTileIndex === 0 || enemyTileIndex % gridSize === 0) {
            console.log('here');
            return;
        } else {
            enemyTile.classList.remove('enemyTile');
            enemyTileIndex--;
        }
        enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
        enemyTile.classList.add('enemyTile');
        renderEnemySprite(enemyTileIndex, previousEnemyTileIndex);
    }

    function moveEnemyRight() {
        let previousEnemyTileIndex = enemyTileIndex;
        if (enemyTileIndex === gridArea - 1 || (enemyTileIndex + 1) % gridSize === 0) {
            return;
        } else {
            enemyTile.classList.remove('enemyTile');
            enemyTileIndex++;
        }
        enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
        enemyTile.classList.add('enemyTile');
        renderEnemySprite(enemyTileIndex, previousEnemyTileIndex);
    }

    function moveEnemyUp() {
        let previousEnemyTileIndex = enemyTileIndex;
        if (enemyTileIndex < gridSize) {
            return;
        } else {
            enemyTile.classList.remove('enemyTile');
            enemyTileIndex = enemyTileIndex - gridSize;
        }
        enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
        enemyTile.classList.add('enemyTile');
        renderEnemySprite(enemyTileIndex, previousEnemyTileIndex);
    }

    function moveEnemyDown() {
        let previousEnemyTileIndex = enemyTileIndex;
        if (enemyTileIndex >= gridArea - gridSize) {
            return;
        } else {
            enemyTile.classList.remove('enemyTile');
            enemyTileIndex = enemyTileIndex + gridSize;
        }
        enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
        enemyTile.classList.add('enemyTile');
        renderEnemySprite(enemyTileIndex, previousEnemyTileIndex);
    }

    // Enemy movement alogorithm -- needs work!
    function decideEnemyMove() {
        let currentEnemyTile = document.querySelector(`#tile${enemyTileIndex}`),
            blockedTop = currentEnemyTile.classList.contains('wall-top'),
            blockedBottom = currentEnemyTile.classList.contains('wall-bottom'),
            blockedLeft = currentEnemyTile.classList.contains('wall-left'),
            blockedRight = currentEnemyTile.classList.contains('wall-right');

        if (activeTileIndex < enemyTileIndex) {
            if ((activeTileIndex + gridSize < enemyTileIndex) && !blockedTop) {
                moveEnemyUp();
            } else if (!blockedLeft){
                moveEnemyLeft();
            } else if (!blockedRight){
                moveEnemyRight();
            } else {
                moveEnemyDown();
            }
        } else if (activeTileIndex > enemyTileIndex) {
            if ((activeTileIndex - gridSize > enemyTileIndex) && !blockedBottom) {
                moveEnemyDown();
            } else if (!blockedRight){
                moveEnemyRight();
            } else if (!blockedLeft) {
                moveEnemyLeft();
            } else {
                moveEnemyUp();
            }
        }
        if (activeTileIndex === enemyTileIndex) {
            decreaseLife();
            resetEnemyPosition();
        }
    }



    function drawGrid() {
        while (gameMap.firstChild) {
            gameMap.removeChild(gameMap.lastChild);
        }

        for  (let i = 0; i < gridArea; i++) {
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
        
        for (let i = 3; i < numTiles; i++) {
            notesList[i] = " ";
        }
        
        // Change the i increment to adjust how populated the map is
        for (let i = 3; i < numTiles; i = i + 7) {
            notesList[i] = getRandomNote();
        }

        notesList = shuffleNotesArray(notesList);
        return notesList;
    }

    function resetEnemyPosition() {
        let previousEnemyTileIndex = enemyTileIndex;
        enemyTile.classList.remove('enemyTile');
        enemyTileIndex = gridArea - 1;
        enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
        enemyTile.classList.add('enemyTile');
        renderEnemySprite(enemyTileIndex, previousEnemyTileIndex);
    }


    function populateMap(numTiles) {
        for (let i = 0; i < numTiles; i++) {
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
          
    function renderHeroSprite(tileIndex, previousTileIndex) {
        let tile = document.getElementById(`tile${tileIndex}`);
        let previousTile = document.getElementById(`tile${previousTileIndex}`);
        tile.classList.add('hero');
        if (previousTile) previousTile.classList.remove('hero');
    }

    function renderEnemySprite(tileIndex, previousTileIndex) {
        let tile = document.getElementById(`tile${tileIndex}`);
        let previousTile = document.getElementById(`tile${previousTileIndex}`);
        tile.classList.add('enemy');
        if (previousTile) previousTile.classList.remove('enemy');
    }

    function removeSprite(tileIndex, spriteClass) {
        document.getElementById(`tile${tileIndex}`).classList.remove(spriteClass);
    }

    function getNextNote(level, currentNoteIndex) {
        if (currentNoteIndex >= level.notes.length - 1) {
            return;
        } else {
            let nextNote = level.notes[currentNoteIndex + 1].letter;
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
        playAudioTrack('end-credits', true);
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
            let note = `${level.notes[i].letter}${level.notes[i].octave}`;
            let duration = level.notes[i].duration;
            playNote(note, duration, now + noteDelay);
            noteDelay = noteDelay + level.notes[i].duration;
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
        return svgStaffNote;
    }

    // TODO: combine this function with the above one
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

    function startNewLevel(level) {
        endGameOverlay.style.display = 'none';
        activeTileIndex = 0;
        enemyTileIndex = gridArea - 1;
        noteIndex = 0;
        correctAnswer = level.notes[noteIndex].letter;
        let octave = level.notes[noteIndex].octave;
        updateStaffDiv(correctAnswer, octave);
        drawGrid();
        loadMap(1);
        generateNotesList(gridArea);
        populateMap(gridArea);
        resultDisplay.textContent = '';
        haveKey = false;
        keyDisplay.innerHTML = '';
        //resetEnemyPosition();
        renderEnemySprite(enemyTileIndex);
        renderHeroSprite(activeTileIndex);
        
        playAudioTrack('dungeon-a', true);
    }

    function startNewGame() {
        endGameOverlay.style.display = 'none';
        activeTileIndex = 0;
        enemyTileIndex = gridArea - 1;
        noteIndex = 0;
        levelIndex = 0;
        correctAnswer = levels[0].notes[noteIndex].letter;
        let octave = levels[0].notes[noteIndex].octave;
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
        // resetEnemyPosition();
        renderEnemySprite(enemyTileIndex);
        renderHeroSprite(activeTileIndex);
        
        playAudioTrack('new-game', false);
        setTimeout(function() { playAudioTrack('dungeon-a', true)}, 5000);
    }



  startNewGame();

}

// Title and start screen functions
function createStartButton() {
    const startButton = document.createElement('button');
    startButton.setAttribute('id', 'startButton');
    startButton.setAttribute('class', 'gameButton');
    const startButtonText = document.createElement('span');
    startButtonText.textContent = 'Start';
    startButton.appendChild(startButtonText);
    return startButton;
}

function createNewGameButton() {
    const newGameButton = document.createElement('button');
    newGameButton.setAttribute('id', 'newGameButton');
    newGameButton.setAttribute('class', 'gameButton');
    const newGameButtonText = document.createElement('span');
    newGameButtonText.textContent = 'Enter the Dungeon';
    newGameButton.appendChild(newGameButtonText);
    return newGameButton;



}

function loadTitleScreen() {
    const content = document.getElementById('content');
    content.textContent = '';
    const startButton = createStartButton();
    startButton.addEventListener('click', () => {
        loadNewGameScreen();
        playAudioTrack('title-screen', true);
    });
    
    content.appendChild(startButton);

    const tempPara = document.createElement('p');
    tempPara.textContent = 'Initial landing page for game. Clicking button will trigger title music.';
    content.appendChild(tempPara);
}


function loadNewGameScreen() {
    const content = document.getElementById('content');
    content.textContent = '';
    const newGameButton = createNewGameButton();
    newGameButton.addEventListener('click', () => {
        loadGameScreen();
    });
    content.appendChild(newGameButton);

    const tempPara = document.createElement('p');
    tempPara.textContent = 'Options, Instructions, etc. will appear on this screen. Title music will also play here.';
    content.appendChild(tempPara);
}

loadTitleScreen();



// TODO : refactor code to move this variable and function back into a local scope.
let bgMusicTrack;

// Plays background music/sounds from .wav files
function playAudioTrack(trackName, loopStatus) {
    if(bgMusicTrack) {
        bgMusicTrack.stop();
    }
    bgMusicTrack = new Tone.Player(`./music/${trackName}.wav`).toDestination();
    bgMusicTrack.autostart = true;
    bgMusicTrack.loop = loopStatus; // boolean
}





