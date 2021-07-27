import { loadHowToPlayScreen } from './how-to-play.js';
import { levels } from './levels.js';
import { notesLibrary } from './note-library.js';
import { maps } from './maps.js';


// Main game screen loader
function loadGameScreen() {

    const gameScreenContent = document.createElement('div');
    gameScreenContent.setAttribute('id', 'gameScreenContent');

    const leftContent = document.createElement('div');
    leftContent.setAttribute('class', 'gameScreenSection');
    leftContent.setAttribute('class', 'gameScreenSectionLeft');

    const centerContent = document.createElement('div');
    centerContent.setAttribute('class', 'gameScreenSection');
    centerContent.setAttribute('class', 'gameScreenSectionCenter');

    const rightContent = document.createElement('div');
    rightContent.setAttribute('class', 'gameScreenSection');
    rightContent.setAttribute('class', 'gameScreenSectionRight');

    let logo = document.createElement('object');
    logo.setAttribute('data', `./img/graphics/logo.svg`);
    logo.setAttribute('type', 'image/svg+xml');

    const levelDisplay = document.createElement('div');
    levelDisplay.setAttribute('id', 'levelDisplay');
    levelDisplay.textContent = 'Level:';
    
    const levelNameDisplay = document.createElement('div');
    levelNameDisplay.setAttribute('id', 'levelNameDisplay');

    const lifeDisplay = document.createElement('div');
    lifeDisplay.setAttribute('id', 'lifeDisplay');

    const scoreDisplay = document.createElement('div');
    scoreDisplay.setAttribute('id', 'scoreDisplay');
    const scoreTotal = document.createElement('div');
    scoreTotal.classList.add('scoreTotal');
    scoreTotal.textContent = 'Score: 0';
    scoreDisplay.appendChild(scoreTotal);
    
    const multiplierDiv = document.createElement('div');
    multiplierDiv.classList.add('multiplierDiv');
    const multiplierBorder = document.createElement('div');
    multiplierBorder.classList.add('multiplierBorder');
    const multiplierEmpty = document.createElement('span');
    multiplierEmpty.classList.add('multiplierEmpty');
    const multiplierFill = document.createElement('span');
    multiplierFill.classList.add('multiplierFill');
    const multiplierText = document.createElement('span');
    multiplierText.classList.add('multiplierText');
    multiplierText.textContent = '1X';

    multiplierBorder.appendChild(multiplierEmpty);
    multiplierEmpty.appendChild(multiplierFill);
    multiplierDiv.appendChild(multiplierBorder);
    multiplierDiv.appendChild(multiplierText);

    // TODO: Eventually remove result display, this is more for debugging.
    const resultDisplay = document.createElement('div');
    resultDisplay.setAttribute('id', 'resultDisplay');
    //resultDisplay.textContent = '[result]';

    const keyDisplay = document.createElement('div');
    keyDisplay.setAttribute('id', 'keyDisplay');

    const bossNoteDisplay = document.createElement('div');
    bossNoteDisplay.classList.add('bossNoteDisplay');

    const spellDisplay = document.createElement('div');
    spellDisplay.setAttribute('id', 'spellDisplay');
    spellDisplay.textContent = 'Spell charge:';

    const spellBarBorder = document.createElement('div');
    spellBarBorder.classList.add('spellBarBorder');
    const spellBarEmpty = document.createElement('span');
    spellBarEmpty.classList.add('spellBarEmpty');
    const spellBarFill = document.createElement('span');
    spellBarFill.classList.add('spellBarFill');
    const spellChargedText = document.createElement('div');
    spellChargedText.classList.add('spellChargedText');
    spellBarBorder.appendChild(spellBarEmpty);
    spellBarEmpty.appendChild(spellBarFill);
    spellDisplay.appendChild(spellBarBorder);
    spellDisplay.appendChild(spellChargedText);

    const bossDisplay = document.createElement('div');
    bossDisplay.setAttribute('id', 'bossDisplay');
    bossDisplay.textContent = 'Boss life:';

    const bossBarBorder = document.createElement('div');
    bossBarBorder.classList.add('bossBarBorder');
    const bossBarEmpty = document.createElement('span');
    bossBarEmpty.classList.add('bossBarEmpty');
    const bossBarFill = document.createElement('span');
    bossBarFill.classList.add('bossBarFill');
    
    bossBarBorder.appendChild(bossBarEmpty);
    bossBarEmpty.appendChild(bossBarFill);
    bossDisplay.appendChild(bossBarBorder); 

    const timerDisplay = document.createElement('div');
    timerDisplay.classList.add('timerDisplay');
    timerDisplay.textContent = 'Time:';
    const timerBarBorder = document.createElement('div');
    timerBarBorder.classList.add('timerBarBorder');
    const timerBarEmpty = document.createElement('span');
    timerBarEmpty.classList.add('timerBarEmpty');
    const timerBarFill = document.createElement('span');
    timerBarFill.classList.add('timerBarFill');

    timerBarBorder.appendChild(timerBarEmpty);
    timerBarEmpty.appendChild(timerBarFill);
    timerDisplay.appendChild(timerBarBorder); 

    const staffDiv = document.createElement('div');
    staffDiv.setAttribute('class', 'staffDiv');
    
    const gameMapContainer = document.createElement('div');
    gameMapContainer.classList.add('gameMapContainer');

    const gameMap = document.createElement('div');
    gameMap.setAttribute('class', 'gameMap');
    gameMapContainer.appendChild(gameMap);
    
    const content = document.getElementById('content');
    content.textContent = '';

    leftContent.appendChild(logo);
    leftContent.appendChild(levelDisplay);
    leftContent.appendChild(levelNameDisplay);
    leftContent.appendChild(scoreDisplay);
    leftContent.appendChild(multiplierDiv);
    leftContent.appendChild(staffDiv);
    leftContent.appendChild(resultDisplay);

    centerContent.appendChild(timerDisplay);
    //centerContent.appendChild(gameMap);
    centerContent.appendChild(gameMapContainer);

    rightContent.appendChild(lifeDisplay);
    rightContent.appendChild(keyDisplay);
    rightContent.appendChild(spellDisplay);
    rightContent.appendChild(bossDisplay);
    rightContent.appendChild(bossNoteDisplay);
    
    gameScreenContent.appendChild(leftContent);
    gameScreenContent.appendChild(centerContent);
    gameScreenContent.appendChild(rightContent);

    content.appendChild(gameScreenContent);
    
    const endGameOverlay = document.createElement('div');
    endGameOverlay.setAttribute('id', 'endGameOverlay');
    const gameOver = document.createElement('div');
    gameOver.setAttribute('id', 'gameOver');
    endGameOverlay.appendChild(gameOver);

    const continueButtonDiv = document.createElement('div');
    continueButtonDiv.classList.add('continueButtonDiv');

    const continueButton = document.createElement('button');
    continueButton.classList.add('gameOverButton');
    continueButton.textContent = 'Continue?';    
    continueButton.addEventListener('click', () => {
        let currentWorld = Math.floor((levels[levelIndex].id - 1) / 10);
        let continueLevel = (currentWorld * 10) + 1;
        score = score / 2;
        levelIndex = levels.findIndex(level => level.id === continueLevel);
        life = 5;
        startNewLevel(levels[levelIndex]);
    });
    continueButtonDiv.appendChild(continueButton);
    
    const continueNote = document.createElement('p');
    continueNote.classList.add('continueNote');
    continueNote.textContent = 'Your score will be halved.';
    continueButtonDiv.appendChild(continueNote);
    endGameOverlay.appendChild(continueButtonDiv);

    const backToTitleScreenDiv = document.createElement('div');
    backToTitleScreenDiv.classList.add('backToTitleScreenDiv');
    const backToTitleScreenButton = document.createElement('button');
    backToTitleScreenButton.classList.add('gameOverButton');
    backToTitleScreenButton.textContent = 'Back to Title Screen';
    backToTitleScreenButton.addEventListener('click', () => {
        endGameOverlay.style.display = 'none';
        loadNewGameScreen();
    
    });
    backToTitleScreenDiv.appendChild(backToTitleScreenButton);
    endGameOverlay.appendChild(backToTitleScreenDiv);
    content.appendChild(endGameOverlay);

    // console.log(notesLibrary.length);
    
    // Gameplay variables
    let notesList = [];
    let correctAnswer;
    let correctOctave;
    let gridSize = 10; // Also must change in CSS
    let gridArea = gridSize ** 2;
    let activeTileIndex = 0;
    let activeTile;
    let enemyTileIndices = [];
    let enemyTiles = [];
    let score = 0;
    let life = 5;
    let haveKey = false;
    let spellCharge = 0;
    let gameOverStatus = false;
    let levelIndex = 1;
    let noteIndex = 0;
    let noteDelay = 2;
    correctAnswer = levels[levelIndex].notes[noteIndex].letter;
    let finalBossDefeated = false;
    let scoreMultiplier = 1;
    let consecutiveAnswers = 0;
    let multiplierCharge = 0;
    let bossDefeated = false;
    let stairsOn = false;
    let stairsTileIndex;
    let spellChargeMax = 3;
    let spellChargeNotes = [];
    let finalSpellStatus = false;
    let finalNotes = [
        {tileIndex: 0, color: 'note-blue'},
        {tileIndex: gridArea - 1, color: 'note-green'},
        {tileIndex: gridSize-1, color: 'note-orange'},
        {tileIndex: gridArea - gridSize, color: 'note-purple'},
        {tileIndex: Math.floor(gridArea / 2 + gridSize / 2), color: 'note-red'} 
    ]; 
    let bossLife = 3;
    let maxBossLife = 3;
    let timeLeft;
    let bossTileIndex;
    let chordIndex;
    let chordNoteIndex;
    let finalBossTileIndex;
    let finalBossTileIndices = [];

    document.addEventListener('keydown', movePlayer)

    function useKey(tileIndex) {
        let lockedTile = document.querySelector(`#tile${tileIndex}`);
        lockedTile.classList.remove('locked-tile');
        haveKey = false;
        keyDisplay.removeChild(keyDisplay.firstChild);
    }

    function movePlayer(event) {
        let previousTileIndex = activeTileIndex,
            leftTile = (activeTileIndex % gridSize === 0) ? undefined : document.querySelector(`#tile${activeTileIndex-1}`),
            rightTile = ((activeTileIndex + 1) % gridSize === 0) ? undefined : document.querySelector(`#tile${activeTileIndex+1}`),
            upTile = (activeTileIndex < gridSize) ? undefined : document.querySelector(`#tile${activeTileIndex - gridSize}`),
            downTile = (activeTileIndex >= gridArea - gridSize) ? undefined : document.querySelector(`#tile${activeTileIndex + gridSize}`);
      
        if (event.code === "ArrowLeft") {
            if (activeTileIndex === 0 || activeTileIndex % gridSize === 0 || activeTile.classList.contains('wall-left') || (leftTile && (leftTile.classList.contains('locked-tile') && !haveKey))) {
                return;
            } else {
                activeTile.classList.remove('activeTile');
                activeTileIndex--;

                if (leftTile && leftTile.classList.contains('locked-tile')) {
                    useKey(activeTileIndex);
                }

                if (stairsOn && activeTileIndex === stairsTileIndex) {
                    goToNextLevel();
                    return;
                }

            }
        } else if (event.code === "ArrowRight") {
            if (activeTileIndex === gridArea - 1 || (activeTileIndex + 1) % gridSize === 0 || activeTile.classList.contains('wall-right') || (rightTile && (rightTile.classList.contains('locked-tile') && !haveKey))) {
                return;
            } else {
                activeTile.classList.remove('activeTile');
                activeTileIndex++;
                if (rightTile && rightTile.classList.contains('locked-tile')) {
                    useKey(activeTileIndex);
                }

                if (stairsOn && activeTileIndex === stairsTileIndex) {
                    goToNextLevel();
                    return;
                }
            }
        } else if (event.code === "ArrowUp") {
            if (activeTileIndex < gridSize || activeTile.classList.contains('wall-top') || (upTile && (upTile.classList.contains('locked-tile') && !haveKey))) {
                return;
            } else {
                activeTile.classList.remove('activeTile');
                activeTileIndex = activeTileIndex - gridSize;

                if (upTile && upTile.classList.contains('locked-tile')) {
                    useKey(activeTileIndex);
                }

                if (stairsOn && activeTileIndex === stairsTileIndex) {
                    goToNextLevel();
                    return;
                }
            }
        } else if (event.code === "ArrowDown") {
            if (activeTileIndex >= gridArea - gridSize || activeTile.classList.contains('wall-bottom') || (downTile && (downTile.classList.contains('locked-tile') && !haveKey))) {
                return;
            } else {
                activeTile.classList.remove('activeTile');
                activeTileIndex = activeTileIndex + gridSize;

                if (downTile && downTile.classList.contains('locked-tile')) {
                    useKey(activeTileIndex);
                }

                if (stairsOn && activeTileIndex === stairsTileIndex) {
                    goToNextLevel();
                    return;
                }
            }
        } else if (event.code === "Space") {
            event.preventDefault();
            if (stairsOn) {
                return;
            
            } else if (bossDefeated) {
                if (activeTile.classList.contains('hasBossNote')) {
                    getBossNote();
                    activeTile.classList.remove('hasBossNote');
                    activeTile.innerHTML = '';
                } else {
                    return;
                }
            } else if ((levels[levelIndex].name === 'finalBoss') && spellCharge >= spellChargeMax && finalSpellStatus) {
                finalSpellCast();   
            } else if ((levels[levelIndex].name === 'boss' || levels[levelIndex].name === 'finalBoss') && spellCharge >= spellChargeMax) {
                castSpell();
            
            } else if (activeTile.textContent === ' ') {
                return;
            } else if (activeTile.classList.contains('hasHeart')) {
                increaseLife();
                activeTile.classList.remove('hasHeart');
                activeTile.innerHTML = '';
            } else if (activeTile.classList.contains('hasKey')) {
                getKey();
                activeTile.classList.remove('hasKey');
                activeTile.innerHTML = '';
            } else if (activeTile.classList.contains('hasStopwatch')) {
                getStopwatch();
                activeTile.classList.remove('hasStopwatch');
                activeTile.innerHTML = '';
            } else if (activeTile.classList.contains('correct')) {

                if (levels[levelIndex].name === 'practice') {
                    // resultDisplay.textContent = `Correct! - ${correctAnswer}`;
                    activeTile.classList.remove('correct');
                    let note = `${correctAnswer}${correctOctave}`;
                    playNote(note, 1);
                    let randomNote = notesLibrary[Math.floor(Math.random() * 47)];
                    correctAnswer = randomNote.note;
                    correctOctave = randomNote.octave;
                    generateNotesList(gridArea);
                    clearTileClasses();
                    populateMap(gridArea);
                    placeRandomLocks(gridArea, 1);
                    updateStaffDiv(correctAnswer, correctOctave);
                
                } else if (levels[levelIndex].name === 'boss' || levels[levelIndex].name === 'finalBoss') {
                    // resultDisplay.textContent = `Correct! - ${correctAnswer}`;
                    activeTile.classList.remove('correct');
                    let note = `${correctAnswer}${correctOctave}`;
                    playNote(note, 1);
                    increaseScore();
                    
                    if (finalSpellStatus) {
                        chargeFinalSpell(note);
                    } else {
                        chargeSpell(note);                        
                        let nextBossNote = getNextBossNote();
                        correctAnswer = nextBossNote.letter;
                        correctOctave = nextBossNote.octave;
                        // let randomNote = notesLibrary[Math.floor(Math.random() * 47)];
                        // correctAnswer = randomNote.note;
                        // correctOctave = randomNote.octave;
                        generateNotesList(gridArea);
                        clearTileClasses();
                        populateMap(gridArea);
                        placeRandomLocks(gridArea, 1);
                        updateStaffDiv(correctAnswer, correctOctave);
                    }

                } else {
                
                    // resultDisplay.textContent = `Correct! - ${correctAnswer}`;
                    activeTile.classList.remove('correct');
                    let note = `${correctAnswer}${levels[levelIndex].notes[noteIndex].octave}`;
                    playNote(note, 1);
                    increaseScore();
                    correctAnswer = getNextNote(levels[levelIndex], noteIndex);
                    if (noteIndex >= levels[levelIndex].notes.length - 1) {
                        levelComplete(levels[levelIndex]);
                    } else {
                        noteIndex++;
                        generateNotesList(gridArea);
                        clearTileClasses();
                        populateMap(gridArea);
                        placeRandomLocks(gridArea, 1);
                        let octave = `${levels[levelIndex].notes[noteIndex].octave}`;
                        updateStaffDiv(correctAnswer, octave);
                    }

                }
            } else if (activeTile.textContent === 'X') {
                return; // Prevents player from choosing wrong note twice.
            } else {
                activeTile.textContent = 'X';
                // resultDisplay.textContent = 'Wrong!';
                if (levels[levelIndex].name === 'practice') {
                    return;
                } else {
                    decreaseLife();
                }
            }
          
            // Prevent "hero" class from being removed after space is pressed.
            return;
        } else {
            return;
        }
        activeTile = document.querySelector(`#tile${activeTileIndex}`);
        activeTile.classList.add('activeTile');
        renderHeroSprite(activeTileIndex, previousTileIndex);
        

        if (levels[levelIndex].name === 'finalBoss' && finalBossDefeated === false) {
            decideFinalBossMove(finalBossTileIndex);

        } else if (levels[levelIndex].name === 'boss' && bossDefeated === false) {
            decideEnemyMove(bossTileIndex);
        } else {
            enemyTileIndices.forEach(function(enemyTileIndex, i, arr) {
                decideEnemyMove(enemyTileIndex, i, arr);

            });
        }
    }

    function moveEnemyLeft(enemyTileIndex, i, arr) {
        let enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
        let previousEnemyTileIndex = enemyTileIndex;
        if (enemyTileIndex === 0 || enemyTileIndex % gridSize === 0) {
            return;
        } else {
            enemyTile.classList.remove('enemyTile');
            enemyTileIndex--;
        }
        enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
        enemyTile.classList.add('enemyTile');
        renderEnemySprite(enemyTileIndex, previousEnemyTileIndex);
        
        if (levels[levelIndex].name === 'boss') {
            bossTileIndex = enemyTileIndex;    
        } else {
            arr[i] = enemyTileIndex;
        }
    }

    function moveEnemyRight(enemyTileIndex, i, arr) {
        let enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
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
        
        if (levels[levelIndex].name === 'boss') {
            bossTileIndex = enemyTileIndex;    
        } else {
            arr[i] = enemyTileIndex;
        }
    }

    function moveEnemyUp(enemyTileIndex, i, arr) {
        let enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
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
        
        if (levels[levelIndex].name === 'boss') {
            bossTileIndex = enemyTileIndex;    
        } else {
            arr[i] = enemyTileIndex;
        }
    }

    function moveEnemyDown(enemyTileIndex, i, arr) {
        let enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
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
        
        if (levels[levelIndex].name === 'boss') {
            bossTileIndex = enemyTileIndex;    
        } else {
            arr[i] = enemyTileIndex;
        }
    }

    // Enemy movement alogorithm -- needs work!
    function decideEnemyMove(enemyTileIndex, i, arr) {
        if (stairsOn) {
            return;
        }

        let currentEnemyTile = document.querySelector(`#tile${enemyTileIndex}`),
            leftEnemyTile = (enemyTileIndex === 0 || enemyTileIndex % gridSize === 0) ? undefined : document.querySelector(`#tile${enemyTileIndex - 1}`),
            rightEnemyTile = (enemyTileIndex === gridArea - 1 || (enemyTileIndex + 1) % gridSize === 0) ? undefined : document.querySelector(`#tile${enemyTileIndex + 1}`),
            upEnemyTile = (enemyTileIndex < gridSize) ? undefined : document.querySelector(`#tile${enemyTileIndex - gridSize}`),
            downEnemyTile = (enemyTileIndex >= gridArea - gridSize) ? undefined : document.querySelector(`#tile${enemyTileIndex + gridSize}`), 
            blockedTop = currentEnemyTile.classList.contains('wall-top') || (upEnemyTile && upEnemyTile.classList.contains('locked-tile')) || (upEnemyTile && upEnemyTile.classList.contains('enemy')),
            blockedBottom = currentEnemyTile.classList.contains('wall-bottom') || (downEnemyTile && downEnemyTile.classList.contains('locked-tile')) || (downEnemyTile && downEnemyTile.classList.contains('enemy')),
            blockedLeft = currentEnemyTile.classList.contains('wall-left') || (leftEnemyTile && leftEnemyTile.classList.contains('locked-tile')) || (leftEnemyTile && leftEnemyTile.classList.contains('enemy')),
            blockedRight = currentEnemyTile.classList.contains('wall-right') || (rightEnemyTile && rightEnemyTile.classList.contains('locked-tile')) || (rightEnemyTile && rightEnemyTile.classList.contains('enemy'));   

        if (activeTileIndex < enemyTileIndex) {
            if ((activeTileIndex + gridSize < enemyTileIndex) && !blockedTop) {
                moveEnemyUp(enemyTileIndex, i, arr);
            } else if (!blockedLeft){
                moveEnemyLeft(enemyTileIndex, i, arr);
            } else if (!blockedRight){
                moveEnemyRight(enemyTileIndex, i, arr);
            } else {
                moveEnemyDown(enemyTileIndex, i, arr);
            }
        } else if (activeTileIndex > enemyTileIndex) {
            if ((activeTileIndex - gridSize > enemyTileIndex) && !blockedBottom) {
                moveEnemyDown(enemyTileIndex, i, arr);
            } else if (!blockedRight){
                moveEnemyRight(enemyTileIndex, i, arr);
            } else if (!blockedLeft) {
                moveEnemyLeft(enemyTileIndex, i, arr);
            } else {
                moveEnemyUp(enemyTileIndex, i, arr);
            }
        }
        
        if (levels[levelIndex].name === 'boss') {
            enemyTileIndex = bossTileIndex;
        } else {
            enemyTileIndex = arr[i];
        }

        if (activeTileIndex === enemyTileIndex) {
            decreaseLife();
            resetEnemyPosition(enemyTileIndex, i, arr);
        }
    }

    function decideFinalBossMove(tileIndex) {
        // Final boss moves randomly
        let num = rollDice(4);
        if (num === 1) {
            (tileIndex % gridSize > 1) ? moveFinalBossLeft(): moveFinalBossRight();
        } else if (num === 2) {
            (tileIndex % gridSize < 8) ? moveFinalBossRight(): moveFinalBossLeft();
        } else if (num === 3) {
            (tileIndex - gridSize * 2 > 0) ? moveFinalBossUp(): moveFinalBossDown();
        } else if (num === 4) {
            (tileIndex + gridSize * 2 < gridArea) ? moveFinalBossDown(): moveFinalBossUp();
        }

        checkFinalBossDamage();
    }

    function checkFinalBossDamage() {
        for (let i = 0; i < finalBossTileIndices.length; i++) {
            if (activeTileIndex === finalBossTileIndices[i]) {
                decreaseLife();
                let previousActiveTileIndex = activeTileIndex;
                activeTileIndex = 0;
                renderHeroSprite(activeTileIndex, previousActiveTileIndex);
                return;
            }
        }
    }

    function moveFinalBossUp(tileIndex) {
        clearFinalBossTiles();
        finalBossTileIndex = finalBossTileIndex - gridSize;
        finalBossTileIndices.forEach(function(tileIndex, i, arr) {
            tileIndex = tileIndex - gridSize;
            arr[i] = tileIndex;
        });
        renderFinalBoss(finalBossTileIndices);
    }

    function moveFinalBossDown(tileIndex) {
        clearFinalBossTiles();
        finalBossTileIndex = finalBossTileIndex + gridSize;
        finalBossTileIndices.forEach(function(tileIndex, i, arr) {
            tileIndex = tileIndex + gridSize;
            arr[i] = tileIndex;
        });
        renderFinalBoss(finalBossTileIndices);
    }

    function moveFinalBossLeft(tileIndex) {
        clearFinalBossTiles();
        finalBossTileIndex--;
        finalBossTileIndices.forEach(function(tileIndex, i, arr) {
            tileIndex--;
            arr[i] = tileIndex;
        });
        renderFinalBoss(finalBossTileIndices);
    }

    function moveFinalBossRight(tileIndex) {
        clearFinalBossTiles();
        finalBossTileIndex++;
        finalBossTileIndices.forEach(function(tileIndex, i, arr) {
            tileIndex++;
            arr[i] = tileIndex;
        });
        renderFinalBoss(finalBossTileIndices);
    }

    function clearFinalBossTiles() {
        finalBossTileIndices.forEach(function(index) {
            let tile = document.getElementById(`tile${index}`);
            tile.classList.remove('finalBoss');
        });
    }

    function renderFinalBoss() {
        finalBossTileIndices.forEach(function(index) {
            let tile = document.getElementById(`tile${index}`);
            tile.classList.add('finalBoss');
        });
    }

    function resetEnemyPosition(enemyTileIndex, i, arr) {
        let enemyTile = document.querySelector(`#tile${enemyTileIndex}`)
        let previousEnemyTileIndex = enemyTileIndex;
        enemyTile.classList.remove('enemyTile');

        //TODO : enemy respawn logic
        enemyTileIndex = gridArea - 1; 
        enemyTile = document.querySelector(`#tile${enemyTileIndex}`);
        enemyTile.classList.add('enemyTile');
        renderEnemySprite(enemyTileIndex, previousEnemyTileIndex);
        

        if (levels[levelIndex].name === 'boss') {
            bossTileIndex = enemyTileIndex;    
        } else {
            arr[i] = enemyTileIndex;
        }
    }

    function renderEnemySprite(tileIndex, previousTileIndex) {
        let enemySVG = levels[levelIndex].enemy
        let root = document.querySelector(':root');
        root.style.setProperty('--enemySVG', `url(./img/map-icons/${enemySVG}.svg)`);

        let tile = document.getElementById(`tile${tileIndex}`);
        let previousTile = document.getElementById(`tile${previousTileIndex}`);
        tile.classList.add('enemy');
        if (previousTile) previousTile.classList.remove('enemy');

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
        enemyTiles = [document.querySelector(`#tile${gridArea - 1}`)];
        enemyTiles.forEach(function(enemyTile) {
            enemyTile.classList.add('enemyTile');
        });
    }

    function placeWalls(mapId) {
        // retrieve the map from the map collection which matches the requested map ID
        
        // TODO: add mapID as a property to each level object
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

    function rollDice(sides) {
        let num = Math.floor(Math.random() * sides) + 1;
        return num
    }

    function generateNotesList(numTiles) {
        notesList[0] = correctAnswer;
        notesList[1] = 'K';
        
        let num = rollDice(3);
        if (num === 1) {
            notesList[2] = 'H';
        } else {
            notesList[2] = getRandomNote();
        }

        num = rollDice(3);
        if (num === 1) {
            notesList[3] = 'SW';
        } else {
            notesList[3] = getRandomNote();
        }
        
        for (let i = 4; i < numTiles; i++) {
            notesList[i] = " ";
        }
        
        // Change the i increment to adjust how populated the map is
        for (let i = 4; i < numTiles; i = i + 7) {
            notesList[i] = getRandomNote();
        }

        notesList = shuffleNotesArray(notesList);
        return notesList;
    }

    function placeRandomLocks(numTiles, lockCount) {
        // First, remove all of the locks
        let locks = document.querySelectorAll(".locked-tile");
        locks.forEach((lock) => {
            lock.classList.remove("locked-tile");
        });

        let randomTile, randomTileIndex;

        for (let i=0; i<lockCount; i++) {
            // TODO: We could have an endless loop here if lockCount is greater than the number
            // of tiles that actually have notes.
            do {
                let randomTileIndex = Math.floor(Math.random() * numTiles)
                randomTile = document.querySelector(`#tile${randomTileIndex}`);
            } while (randomTile.textContent === ' ' || randomTile.classList.contains('hasHeart') || randomTile.classList.contains('hasKey') || randomTile.classList.contains('locked-tile') || randomTileIndex === activeTileIndex);
            randomTile.classList.add('locked-tile');
        }
    }

    function clearTileClasses() {
        for (let i = 0; i < gridArea; i++) {
            let tile = document.querySelector(`#tile${i}`);
            if (tile.classList.contains('hasKey')) {
                tile.classList.remove('hasKey');
            }

            if (tile.classList.contains('hasHeart')) {
                tile.classList.remove('hasHeart');
            }

            if (tile.classList.contains('hasStopwatch')) {
                tile.classList.remove('hasStopwatch');
            }

            if (tile.classList.contains('correct')) {
                tile.classList.remove('correct');
            }
        }
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

            } else if (notesList[i] === 'SW') {
                let stopwatch = document.createElement('object');
                stopwatch.setAttribute('data', `./img/map-icons/stopwatch.svg`);
                stopwatch.setAttribute('type', 'image/svg+xml');
                stopwatch.setAttribute('class', 'stopwatch');
                document.getElementById(`tile${i}`).innerHTML = '';
                document.getElementById(`tile${i}`).appendChild(stopwatch)
                document.getElementById(`tile${i}`).classList.add('hasStopwatch');
          
            } else {
                let tile = document.getElementById(`tile${i}`);
                tile.textContent = notesList[i];
                if (notesList[i] === correctAnswer) {
                    tile.classList.add('correct');
                }
            }
        }

    }
          
    function renderHeroSprite(tileIndex, previousTileIndex) {
        let tile = document.getElementById(`tile${tileIndex}`);
        let previousTile = document.getElementById(`tile${previousTileIndex}`);
        tile.classList.add('hero');
        if (previousTile) previousTile.classList.remove('hero');
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

    function getNextBossNote() {
        if (chordNoteIndex >= levels[levelIndex].chords[chordIndex].chordNotes.length - 1) {
            if (chordIndex >= levels[levelIndex].chords.length - 1) {
                chordIndex = 0;
                chordNoteIndex = 0;
                let nextBossNote = levels[levelIndex].chords[chordIndex].chordNotes[chordNoteIndex];
                return nextBossNote;
            } else {
                chordIndex++;
                chordNoteIndex = 0;
                let nextBossNote = levels[levelIndex].chords[chordIndex].chordNotes[chordNoteIndex];
                return nextBossNote;
            }
        } else {
            chordNoteIndex++;
            let nextBossNote = levels[levelIndex].chords[chordIndex].chordNotes[chordNoteIndex];
            return nextBossNote;
        }
    }

    function getRandomNote() {
        let randomNote = notesLibrary[Math.floor(Math.random() * 47)].note;
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
        consecutiveAnswers++;
        multiplierCharge++;
        
        if (multiplierCharge >= 5) {
            multiplierCharge = 0;
        }

        scoreMultiplier = Math.floor(consecutiveAnswers / 5) + 1;
        if (scoreMultiplier > 10) {
            scoreMultiplier = 10;
        }

        let multiplierPercent = Math.floor(multiplierCharge / 5 * 100);
        let multiplierFill = `${multiplierPercent}%`;
        let root = document.querySelector(':root');
        root.style.setProperty('--multiplierFill', multiplierFill);

        score = score + (100 * scoreMultiplier);
        scoreTotal.textContent = `Score: ${score}`;

        multiplierText.textContent = `${scoreMultiplier}X`;
    }

    function decreaseLife() {
        consecutiveAnswers = 0;
        multiplierCharge = 0;
        let root = document.querySelector(':root');
        root.style.setProperty('--multiplierFill', '0%');
        multiplierText.textContent = `1X`;

        playSound('hero-damage');
        life--;
        updateLifeBar(life);
        if (life <= 0) {
            displayGameOver();
            
        }
    }

    function increaseLife() {
        if (life < 5) {
            life++;
        }
        score = score + 200;
        scoreTotal.textContent = `Score: ${score}`;

        playSound('heart-pickup');
        updateLifeBar(life);
    }

    function displayGameOver() {
        playAudioTrack('game-over', true, 0);
        gameOverStatus = true;
        // resultDisplay.textContent = 'GAME OVER';
        if (timeLeft <= 0) {
            gameOver.textContent = 'TIME EXPIRED!';
        } else {
            gameOver.textContent = 'GAME OVER';
        }
            endGameOverlay.style.display = 'block';
            let currentWorld = Math.floor((levels[levelIndex].id - 1) / 10);
            let continueLevel = (currentWorld * 10) + 1;
            continueButton.textContent = `Continue? (Level ${continueLevel})`;
        // nextLevelButton.style.display = 'none';
        // replayButton.style.display = 'block';
    }

    function displayWinScreen() {
        playAudioTrack('end-credits', true, 0);
        // resultDisplay.textContent = 'You are a melody master!';
        gameOver.textContent = 'YOU ARE A MELODY MASTER!';
        endGameOverlay.style.display = 'block';
        // nextLevelButton.style.display = 'none';
        // replayButton.style.display = 'block';
        // TODO Win screen
    }

    function levelComplete(level) {
        // resultDisplay.textContent = 'LEVEL COMPLETE';
        setTimeout(function() {
            playAudioTrack('stage-complete', false, 0);
            //playMelody(level);
        }, 1000);
        
        noteDelay = 2;

        showStairs();
    }

    function defeatBoss(bossTileIndex) {
        score = score + (1000 * scoreMultiplier);
        scoreTotal.textContent = `Score: ${score}`;

        playSound('boss-defeated');
        setTimeout(function() {
            playAudioTrack('stage-complete', false, 0);
        }, 500);
        bossDefeated = true;
        drawGrid();
        placeWalls(levels[levelIndex].mapId);
        renderHeroSprite(activeTileIndex);
        let bossNoteImg = levels[levelIndex].bossNoteImg;
        let bossNote = document.createElement('object');
        bossNote.setAttribute('data', `./img/map-icons/${bossNoteImg}.svg`);
        bossNote.setAttribute('type', 'image/svg+xml');
        bossNote.setAttribute('class', 'bossNote');
        document.getElementById(`tile${bossTileIndex}`).innerHTML = '';
        document.getElementById(`tile${bossTileIndex}`).appendChild(bossNote);
        document.getElementById(`tile${bossTileIndex}`).classList.add('hasBossNote');   
    }

    function getBossNote() {
        
        score = score + 2000;
        scoreTotal.textContent = `Score: ${score}`;

        playSound('boss-note-pickup');
        
        bossDefeated = false;
        let bossNoteImg = levels[levelIndex].bossNoteImg;
        let bossNote = document.createElement('object');
        bossNote.setAttribute('data', `./img/map-icons/${bossNoteImg}.svg`);
        bossNote.setAttribute('type', 'image/svg+xml');
        bossNote.setAttribute('class', 'bossNoteCollect');
        bossNoteDisplay.appendChild(bossNote);

        showStairs();
    }

    function showStairs() {
        // reset the board without letters
        drawGrid();
        placeWalls(levels[levelIndex].mapId);
        renderHeroSprite(activeTileIndex);
        stairsOn = true;
        stairsTileIndex = gridArea / 2 + Math.floor(gridSize / 2);
        let stairsTile;
        console.log(levelIndex, levels.length);

            if (stairsTileIndex === activeTileIndex) {
                stairsTileIndex--;
                stairsTile = document.getElementById(`tile${stairsTileIndex}`);
                // Conditions for teleport to appear instead of stairs
                if (levelIndex === levels.length - 2) {
                    stairsTile.classList.add('stairsTile');  // Change to 'teleportTile'
                } else {
                    stairsTile.classList.add('stairsTile');
                }
            } else {
                stairsTile = document.getElementById(`tile${stairsTileIndex}`);
                // Conditions for telporter to appear instead of stairs
                if (levelIndex === levels.length - 2) {
                stairsTile.classList.add('stairsTile'); // Change to 'teleportTile'
                } else {
                stairsTile.classList.add('stairsTile');
                }
            }
        
    }

    function playNote(note, duration, delay) {
        if (bgMusicTrack) {
            bgMusicTrack.volume.value = -30;
            setTimeout(function() {
                bgMusicTrack.volume.value = -10
            }, (duration * 1000));
        }
        
        const synth = new Tone.Synth().toDestination();
        synth.volume.value = 0;
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
        stairsOn = false;
        levelIndex++;
        if (levelIndex >= levels.length) {
            displayWinScreen();
        } else if (levels[levelIndex].name === 'finalBoss') {
            console.log('final boss stage');
            levelDisplay.textContent = `Level ${levelIndex + 1}`;
            levelNameDisplay.textContent = 'FINAL BOSS!';
            loadFinalBossStage();
            playSound('stairs');
    
        } else if (levels[levelIndex].name === 'boss') {
            console.log('boss stage');
            levelDisplay.textContent = `Level ${levelIndex + 1}`;
            levelNameDisplay.textContent = 'BOSS STAGE!';
            loadBossStage();
            playSound('stairs');
    
        } else {
            levelDisplay.textContent = `Level ${levelIndex + 1}`;
            levelNameDisplay.textContent = `${levels[levelIndex].name}`
            startNewLevel(levels[levelIndex]);
            playSound('stairs');
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
        lifeDisplay.textContent = 'LIFE:';
        
        for (let i = 0; i < life; i++) {
            let heart = document.createElement('object');
            heart.setAttribute('data', `./img/map-icons/heart.svg`);
            heart.setAttribute('type', 'image/svg+xml');
            heart.setAttribute('class', 'heart');
            lifeDisplay.appendChild(heart);
        }
    }

    function getKey() {
        score = score + 200;
        scoreTotal.textContent = `Score: ${score}`;

        playSound('item-pickup');
        if (haveKey === false) {
            let key = document.createElement('object');
            key.setAttribute('data', `./img/map-icons/key.svg`);
            key.setAttribute('type', 'image/svg+xml');
            key.setAttribute('class', 'key');
            keyDisplay.appendChild(key);
            haveKey = true;
        }
    }

    function getStopwatch() {
        score = score + 500;
        scoreTotal.textContent = `Score: ${score}`;

        playSound('item-pickup');
        if (timeLeft + 10 > levels[levelIndex].time) {
            timeLeft = levels[levelIndex].time;
        } else {
            timeLeft = timeLeft + 10;
        }
    }
    
    function chargeSpell(note) {
        spellCharge++;
        let spellChargePercent = Math.floor(spellCharge / spellChargeMax * 100);
        let spellChargeFill = `${spellChargePercent}%`;
        let root = document.querySelector(':root');
        root.style.setProperty('--spellChargeFill', spellChargeFill);

        spellChargeNotes.push(note);
        console.log(spellChargeNotes);
        if (spellCharge === 1) {
            spellChargedText.textContent = `${correctAnswer}`;
        } else {
            spellChargedText.textContent = spellChargedText.textContent.concat(` ${correctAnswer}`);
        }

        if (spellCharge === spellChargeMax) {
            spellBarFill.classList.add('blink');
        }

    }

    function castSpell() {
        console.log('BOOM!');
        playSound('spell-blast');
        spellCharge = 0;
        spellBarFill.classList.remove('blink');
        let root = document.querySelector(':root');
        root.style.setProperty('--spellChargeFill', '0%');
        spellChargedText.textContent = '';
                
        spellChargeNotes.forEach(function(note) {
            let now = Tone.now();
            playNote(note, 1, now);
        });

        spellChargeNotes = [];

        let spellCastTiles = [];
        
        // 1 left
        if (activeTileIndex % gridSize !== 0) {
            let tile = document.getElementById(`tile${activeTileIndex - 1}`);
            spellCastTiles.push(tile);
        }
        // 2 left
        if (activeTileIndex % gridSize > 1) {
            let tile = document.getElementById(`tile${activeTileIndex - 2}`);
            spellCastTiles.push(tile);
        }
        // 1 right
        if (activeTileIndex < gridArea - 1 && (activeTileIndex + 1) % gridSize !== 0) {
            let tile = document.getElementById(`tile${activeTileIndex + 1}`);
            spellCastTiles.push(tile);
        }
        // 2 right
        if (activeTileIndex < gridArea - 2 && (activeTileIndex + 2) % gridSize > 1) {
            let tile = document.getElementById(`tile${activeTileIndex + 2}`);
            spellCastTiles.push(tile);
        }
        // 1 up
        if (activeTileIndex > gridSize - 1) {
            let tile = document.getElementById(`tile${activeTileIndex - gridSize}`);
            spellCastTiles.push(tile);
        }
        // 2 up
        if (activeTileIndex > (gridSize * 2) - 1) {
            let tile = document.getElementById(`tile${activeTileIndex - (gridSize * 2)}`);
            spellCastTiles.push(tile);
        }
        // 1 down
        if (activeTileIndex < gridArea - gridSize) {
            let tile = document.getElementById(`tile${activeTileIndex + gridSize}`);
            spellCastTiles.push(tile);
        }
        // 2 down
        if (activeTileIndex < gridArea - (gridSize * 2)) {
            let tile = document.getElementById(`tile${activeTileIndex + (gridSize * 2)}`);
            spellCastTiles.push(tile);
        }
        // up-left diagonal
        if (activeTileIndex % gridSize !== 0 && activeTileIndex > gridSize - 1) {
            let tile = document.getElementById(`tile${activeTileIndex - 1 - gridSize}`);
            spellCastTiles.push(tile);
        }
        // up-right diagonal
        if (activeTileIndex < gridArea - 1 && (activeTileIndex + 1) % gridSize !== 0 && activeTileIndex > gridSize -1) {
            let tile = document.getElementById(`tile${activeTileIndex + 1 - gridSize}`);
            spellCastTiles.push(tile);
        }
        // down-left diagonal
        if (activeTileIndex % gridSize !== 0 && activeTileIndex < gridArea - gridSize) {
            let tile = document.getElementById(`tile${activeTileIndex - 1 + gridSize}`);
            spellCastTiles.push(tile);
        }
        // down-right diagonal
        if (activeTileIndex < gridArea - 1 && (activeTileIndex + 1) % gridSize !== 0 && activeTileIndex < gridArea - gridSize) {
            let tile = document.getElementById(`tile${activeTileIndex + 1 + gridSize}`);
            spellCastTiles.push(tile);
        }
        
        spellCastTiles.forEach(function(tile) {
            tile.classList.add('spellCast');

        });

        setTimeout(function() {
            spellCastTiles.forEach(function(tile) {
                tile.classList.remove('spellCast');
            });
        }, 200);

        if (levels[levelIndex].name === 'boss') {
            let bossTile = document.getElementById(`tile${bossTileIndex}`);
            if (spellCastTiles.includes(bossTile)) {
                damageBoss();
            }
        } else {
            for (let i = 0; i < finalBossTileIndices.length; i++) {
                let tile = document.getElementById(`tile${finalBossTileIndices[i]}`);
                if (spellCastTiles.includes(tile)) {
                    damageFinalBoss();
                    return;
                }
            }
        }
    }

    function damageFinalBoss() {
        console.log('damage final boss!');
        bossLife--;
        let bossLifePercent = Math.floor(bossLife / maxBossLife * 100);
        let bossLifeFill = `${bossLifePercent}%`;
        let root = document.querySelector(':root');
        root.style.setProperty('--bossLifeFill', bossLifeFill);
        
        let hitTileIndex = finalBossTileIndices[0];
        let hitTile = document.getElementById(`tile${hitTileIndex}`);
        hitTile.classList.remove('finalBoss');
        finalBossTileIndices.shift();
        
        if (finalBossTileIndices.length === 1) {
            setupFinalSpell();
        }
        
        if (finalBossTileIndices.length === 0) {
            showStairs();
        }
    }

    function setupFinalSpell() {
        finalSpellStatus = true;
        spellChargeMax = levels[levelIndex].finalChord.length;
        noteIndex = 0;
        correctAnswer = levels[levelIndex].finalChord[noteIndex].letter;
        correctOctave = levels[levelIndex].finalChord[noteIndex].octave;
        generateNotesList(gridArea);
        clearTileClasses();
        populateMap(gridArea);
        placeRandomLocks(gridArea, 1);
        updateStaffDiv(correctAnswer, correctOctave);
    }

    function chargeFinalSpell(note) {
        // TODO: display color note and remove from inventory
        let tile = document.getElementById(`tile${finalNotes[spellCharge].tileIndex}`);
        tile.classList.add(finalNotes[spellCharge].color);
        chargeSpell(note);

        if (noteIndex < levels[levelIndex].finalChord.length - 1) {
            noteIndex++;
            correctAnswer = levels[levelIndex].finalChord[noteIndex].letter;
            correctOctave = levels[levelIndex].finalChord[noteIndex].octave;
            generateNotesList(gridArea);
            clearTileClasses();
            populateMap(gridArea);
            placeRandomLocks(gridArea, 1);
            updateStaffDiv(correctAnswer, correctOctave);
        
        } else {
            for (let i = 0; i < gridArea; i++) {
                let tile = document.getElementById(`tile${i}`);
                tile.textContent = '';
            }
            clearTileClasses();
            placeRandomLocks(gridArea, 0);
            staffDiv.innerHTML = '';
            staffDiv.textContent = 'MASTER CHORD CHARGED!'   
        }
    }

    function finalSpellCast() {
        playSound('spell-blast');
        console.log('Final BOOM!');
        spellCharge = 0;
        spellBarFill.classList.remove('blink');
        let root = document.querySelector(':root');
        root.style.setProperty('--spellChargeFill', '0%');
        spellChargedText.textContent = '';
                
        spellChargeNotes.forEach(function(note) {
            let now = Tone.now();
            playNote(note, 1, now);
        });

        spellChargeNotes = [];

        let spellCastTiles = [];

        for (let i = 0; i < gridArea; i++) {
            let tile = document.getElementById(`tile${i}`);
            spellCastTiles.push(tile);
        }
        
        spellCastTiles.forEach(function(tile) {
            tile.classList.add('spellCast');

        });

        setTimeout(function() {
            spellCastTiles.forEach(function(tile) {
                tile.classList.remove('spellCast');
            });
            damageFinalBoss();
        }, 200);

        score = score + (5000 * scoreMultiplier);
        scoreTotal.textContent = `Score: ${score}`;  
    }

    // TODO: function to draw an svg line between two tiles.
    // function getTileCenterCoords(tile) {
    //     let rect = tile.getBoundingClientRect();
    //     return {
    //         tileCoordX: rect.left + 0.5 * rect.width,
    //         tileCoordY: rect.top + 0.5 * rect.height
    //     };
    // }

    // function drawLine(tile1, tile2) {
    //     let tile1Coords = getTileCenterCoords(tile1);
    //     let tile2Coords = getTileCenterCoords(tile2);

    //     let x1 = tile1Coords.tileCoordX;
    //     let y1 = tile1Coords.tileCoordY;
    //     let x2 = tile2Coords.tileCoordX;
    //     let y2 = tile2Coords.tileCoordY;
        
    //     let line = document.createElement('line');
    //     line.setAttribute('x1', x1);
    //     line.setAttribute('y1', y1);
    //     line.setAttribute('x2', x2);
    //     line.setAttribute('y2', y2);
    //     line.setAttribute('stroke', 'red');
    //     line.setAttribute('stroke-width', '5');
        
    //     // TODO...
    // }

    function damageBoss() { 
        bossLife--;
        let bossLifePercent = Math.floor(bossLife / maxBossLife * 100);
        let bossLifeFill = `${bossLifePercent}%`;
        let root = document.querySelector(':root');
        root.style.setProperty('--bossLifeFill', bossLifeFill);

        let bossTile = document.getElementById(`tile${bossTileIndex}`);
        bossTile.classList.remove('boss');
        
        if (bossLife <= 0) { 
            defeatBoss(bossTileIndex);
        } else {
            setTimeout(function() {
                bossTile.classList.add('boss')
            }, 100);  
        }
    }

    function startTimer() {
        timeLeft = levels[levelIndex].time;
        
        let root = document.querySelector(':root');
        root.style.setProperty('--timerFill', '100%');

        let timer = setInterval(countDown, 250);
        function countDown() {
            if (gameOverStatus) {
                clearInterval(timer);
            
            } else if (stairsOn || bossDefeated) {
                clearInterval(timer);
            } else if (timeLeft <= 0) {
                clearInterval(timer);
                displayGameOver();
            } else {
                timeLeft = timeLeft - 0.25;

                let timerFillPercent = timeLeft / levels[levelIndex].time * 100;
                let timerFill = `${timerFillPercent}%`;
                let root = document.querySelector(':root');
                root.style.setProperty('--timerFill', timerFill);
            }
        }
    }

    function setTileColor(level) {
        let tileColor = level.tileColor,
            fontColor = level.fontColor,
            dungeonBorder = level.dungeonBorder,
            root = document.querySelector(':root'),
            gameMapContainer = document.querySelector('.gameMapContainer');
        root.style.setProperty('--tileColor', tileColor);
        root.style.setProperty('--fontColor', fontColor);
        gameMapContainer.dataset.dungeonBorder = dungeonBorder;
    }

    function startNewLevel(level) {
        endGameOverlay.style.display = 'none';
        gameOverStatus = false;
        activeTileIndex = 0;
        // TODO: embed # of enemies and placement inside the level objects
        enemyTileIndices = [];
        let enemyCount = level.enemyCount;
        
        for (let i = 0; i < enemyCount; i++) {
            let enemyIndex = gridArea - 1 - i * 4;
            enemyTileIndices.push(enemyIndex);
        }
        
        noteIndex = 0;
        correctAnswer = level.notes[noteIndex].letter;
        let octave = level.notes[noteIndex].octave;
        updateStaffDiv(correctAnswer, octave);
        drawGrid();
        placeWalls(level.mapId);
        setTileColor(level);
        generateNotesList(gridArea);
        populateMap(gridArea);
        placeRandomLocks(gridArea, 1);
        // resultDisplay.textContent = '';
        haveKey = false;
        keyDisplay.innerHTML = '';
        scoreTotal.textContent = `Score: ${score}`;
        levelDisplay.textContent = `Level ${levelIndex + 1}`;
        updateLifeBar(life);
        bossLife = 3;

        
        enemyTileIndices.forEach(function(enemyTileIndex) {
            renderEnemySprite(enemyTileIndex);
        });
        renderHeroSprite(activeTileIndex);
        
        playAudioTrack(level.bgMusic, true, level.loopTime);

        startTimer();
    }

    function loadBossStage() {
        endGameOverlay.style.display = 'none';
        activeTileIndex = 0;
        enemyTileIndices = [];
        bossTileIndex = gridArea - 1;
        noteIndex = 0;
        // let randomNote = notesLibrary[Math.floor(Math.random() * 47)];
        // correctAnswer = randomNote.note;
        // correctOctave = randomNote.octave;
        
        chordIndex = 0;
        chordNoteIndex = 0;
        correctAnswer = levels[levelIndex].chords[chordIndex].chordNotes[chordNoteIndex].letter;
        correctOctave = levels[levelIndex].chords[chordIndex].chordNotes[chordNoteIndex].octave;
        
        updateStaffDiv(correctAnswer, correctOctave);
        drawGrid();
        // loadMap(1);
        generateNotesList(gridArea);
        populateMap(gridArea);
        setTileColor(levels[levelIndex]);
        // resultDisplay.textContent = '';

        scoreTotal.textContent = `Score: ${score}`;
        levelDisplay.textContent = `Level ${levelIndex + 1}`;
        updateLifeBar(life);

        haveKey = false;
        keyDisplay.innerHTML = '';
        renderEnemySprite(bossTileIndex);
        renderHeroSprite(activeTileIndex);

        maxBossLife = levels[levelIndex].bossLife;
        bossLife = levels[levelIndex].bossLife;
        let root = document.querySelector(':root');
        root.style.setProperty('--bossLifeFill', '100%');
        
        playAudioTrack(levels[levelIndex].bgMusic, true, levels[levelIndex].loopTime);
        startTimer();
    }

    function loadFinalBossStage() {
        endGameOverlay.style.display = 'none';
        activeTileIndex = 0;
        enemyTileIndices = [];
        finalBossTileIndex = Math.floor((gridArea / 2) - (gridSize / 2));
        finalBossTileIndices = [
            finalBossTileIndex + 1,
            finalBossTileIndex - 1,
            finalBossTileIndex + gridSize,
            finalBossTileIndex - gridSize,
            finalBossTileIndex
        ];

        maxBossLife = finalBossTileIndices.length;
        bossLife = maxBossLife;

        noteIndex = 0;
        // let randomNote = notesLibrary[Math.floor(Math.random() * 47)];
        // correctAnswer = randomNote.note;
        // correctOctave = randomNote.octave;
        
        chordIndex = 0;
        chordNoteIndex = 0;
        correctAnswer = levels[levelIndex].chords[chordIndex].chordNotes[chordNoteIndex].letter;
        correctOctave = levels[levelIndex].chords[chordIndex].chordNotes[chordNoteIndex].octave;
        
        updateStaffDiv(correctAnswer, correctOctave);
        drawGrid();
        // loadMap(1);
        generateNotesList(gridArea);
        populateMap(gridArea);
        setTileColor(levels[levelIndex]);
        // resultDisplay.textContent = '';
        haveKey = false;
        keyDisplay.innerHTML = '';
        // renderEnemySprite(finalBossTileIndex);
        
        finalBossTileIndices.forEach(function(tileIndex) {
            let tile = document.getElementById(`tile${tileIndex}`);
            console.log(tile);
            tile.classList.add('finalBoss');
        });
        renderHeroSprite(activeTileIndex);

        let root = document.querySelector(':root');
        root.style.setProperty('--bossLifeFill', '100%');
        
        playAudioTrack(levels[levelIndex].bgMusic, true, levels[levelIndex].loopTime);
        startTimer();
    }

    function startNewGame() {
        gameOverStatus = false;
        finalSpellStatus = false;
        spellChargeMax = 3;
        endGameOverlay.style.display = 'none';
        activeTileIndex = 0;
        enemyTileIndices = [(gridArea - 1)];
        noteIndex = 0;
        levelIndex = 1;
        correctAnswer = levels[levelIndex].notes[noteIndex].letter;
        let octave = levels[levelIndex].notes[noteIndex].octave;
        updateStaffDiv(correctAnswer, octave);
        drawGrid();
        placeWalls(levels[levelIndex].mapId);
        setTileColor(levels[levelIndex]);
        generateNotesList(gridArea);
        populateMap(gridArea);
        placeRandomLocks(gridArea, 1);
        levelDisplay.textContent = `Level ${levelIndex + 1}`;
        levelNameDisplay.textContent = `${levels[levelIndex].name}`;
        life = 5;
        updateLifeBar(life);
        haveKey = false;
        keyDisplay.innerHTML = '';
        bossNoteDisplay.innerHTML = '';
        score = 0;
        scoreTotal.textContent = `Score: ${score}`;
        // resultDisplay.textContent = '';
        bossLife = 3;
        enemyTileIndices.forEach(function(enemyTileIndex) {
            renderEnemySprite(enemyTileIndex);
        });
        
        renderHeroSprite(activeTileIndex);

        let root = document.querySelector(':root');
        root.style.setProperty('--bossLifeFill', '0%');
        root.style.setProperty('--spellChargeFill', '0%');
        spellChargedText.textContent = '';
        
        playAudioTrack('new-game', false);
        setTimeout(function() { playAudioTrack(levels[levelIndex].bgMusic, true, levels[levelIndex].loopTime)}, 5000);
        startTimer();
    }

    function startPracticeMode() {
        if(bgMusicTrack) {
            bgMusicTrack.stop();
        }
        gameOverStatus = false;
        // Set level index to practice level
        levelIndex = 0;
        endGameOverlay.style.display = 'none';
        activeTileIndex = 0;
        enemyTileIndices = [];
        let randomNote = notesLibrary[Math.floor(Math.random() * 47)];
        correctAnswer = randomNote.note;
        correctOctave = randomNote.octave;
        updateStaffDiv(correctAnswer, correctOctave);
        drawGrid();
        generateNotesList(gridArea);
        populateMap(gridArea);
        setTileColor(levels[levelIndex]);
        levelDisplay.textContent = `Level ${levelIndex}`;
        levelNameDisplay.textContent = `${levels[levelIndex].name}`;
        life = 5;
        updateLifeBar(life);
        // resultDisplay.textContent = '';
        haveKey = false;
        keyDisplay.innerHTML = '';
        bossNoteDisplay.innerHTML = '';
        renderHeroSprite(activeTileIndex);
        const practiceStaff = document.createElement('img');
        practiceStaff.src = './img/staff-notes/grand-staff-labeled.png';
        practiceStaff.setAttribute('class', 'practiceStaff');
        timerDisplay.innerHTML = '';
        timerDisplay.appendChild(practiceStaff);
        scoreDisplay.innerHTML = '';
        multiplierDiv.innerHTML = '';
        spellDisplay.innerHTML = '';
        spellBarBorder.innerHTML = '';
        bossDisplay.innerHTML = '';
    }

// Disable scrolling on game screen
document.body.style.position = 'fixed';

// Start a new game in practice or normal mode
if (practiceModeStatus === true) {
        startPracticeMode();
    } else {
        startNewGame();
    }
}

// Title and start screen functions
function createStartButtonDiv() {
    const startButtonDiv = document.createElement('div');
    startButtonDiv.classList.add('startButtonDiv');
    const startButton = document.createElement('button');
    startButton.setAttribute('id', 'startButton');
    startButton.setAttribute('class', 'gameButton');
    const startButtonText = document.createElement('span');
    startButtonText.textContent = 'Start';
    startButton.addEventListener('click', () => {
        loadNewGameScreen();

    });
    startButton.appendChild(startButtonText);
    startButtonDiv.appendChild(startButton);
    return startButtonDiv;
}

function createNewGameButtonDiv() {
    const newGameButtonDiv = document.createElement('div');
    newGameButtonDiv.classList.add('newGameButtonDiv');
    const newGameButton = document.createElement('button');
    newGameButton.setAttribute('id', 'newGameButton');
    newGameButton.setAttribute('class', 'gameButton');
    const newGameButtonText = document.createElement('span');
    newGameButtonText.textContent = 'Enter the Dungeon';
    newGameButton.addEventListener('click', () => {
        loadGameScreen();
    });
    newGameButton.appendChild(newGameButtonText);
    newGameButtonDiv.appendChild(newGameButton);
    return newGameButtonDiv;
}

function createPracticeModeButton() {
    const practiceModeButton = document.createElement('button');
    practiceModeButton.classList.add('gameButton');
    practiceModeButton.textContent = 'Practice Mode';
    practiceModeButton.addEventListener('click', () => {
        practiceModeStatus = true;
        loadGameScreen();
    });
    return practiceModeButton;
}

function createHowToPlayButton() {
    const howToPlayButton = document.createElement('button');
    howToPlayButton.classList.add('gameButton');
    howToPlayButton.textContent = 'How to Play';
    howToPlayButton.addEventListener('click', () => { 
        loadHowToPlayScreen();
        const returnButton = createReturnButton();
        content.appendChild(returnButton);
        const footerDiv = createFooterDiv();
        content.appendChild(footerDiv);
    });
    return howToPlayButton;
}

function createOptionsButton() {
    const optionsButton = document.createElement('button');
    optionsButton.classList.add('gameButton');
    optionsButton.textContent = 'Options';
    optionsButton.addEventListener('click', loadOptionsScreen);
    return optionsButton;
}

function loadOptionsScreen() {
    //TODO
    return;
}

function createReturnButton () {
    const returnButton = document.createElement('button');
    returnButton.classList.add('gameButton');
    returnButton.textContent = 'Back';
    returnButton.style.margin = '0 200px';
    returnButton.addEventListener('click', loadNewGameScreen);
    return returnButton;
}

function createTitleLogoDiv() {
    const titleLogoDiv = document.createElement('div');
    titleLogoDiv.classList.add('titleLogoDiv');
    const titleLogo = document.createElement('object');
    titleLogo.setAttribute('data', `./img/graphics/logo.svg`);
    titleLogo.setAttribute('type', 'image/svg+xml');
    titleLogo.classList.add('titleLogo');
    
    titleLogoDiv.appendChild(titleLogo);
    return titleLogoDiv;
}

function createSpacerDiv () {
    const spacerDiv = document.createElement('div');
    spacerDiv.classList.add('spacerDiv');
    return spacerDiv;
}

function createFooterDiv() {
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footerDiv');
    const footerTextDiv = document.createElement('div');
    footerTextDiv.classList.add('footerTextDiv');
    const footerText = document.createElement('span');
    footerText.classList.add('footerText');
    footerText.innerHTML = '&copy 2021 dinitrogen games';
    footerTextDiv.appendChild(footerText);
    footerDiv.appendChild(footerTextDiv);
    return footerDiv;
}

function loadTitleScreen() {
    const content = document.getElementById('content');
    content.textContent = '';
    const titleScreenContent = document.createElement('div');
    titleScreenContent.classList.add('titleScreenContent');

    const titleLogoDiv = createTitleLogoDiv();
    const startButtonDiv = createStartButtonDiv();
    const spacerDiv = createSpacerDiv();
    const footerDiv = createFooterDiv();

    content.appendChild(titleScreenContent);
    titleScreenContent.appendChild(titleLogoDiv);
    titleScreenContent.appendChild(startButtonDiv);
    titleScreenContent.appendChild(spacerDiv);
    titleScreenContent.appendChild(footerDiv);
}

// Variable to toggle practice mode
let practiceModeStatus = false;

function loadNewGameScreen() {
    playAudioTrack('title-screen', true, 0);
    const content = document.getElementById('content');
    content.textContent = '';
    content.innerHTML = '';
    const newGameScreenContent = document.createElement('div');
    newGameScreenContent.classList.add('newGameScreenContent');

    const titleLogoDiv = createTitleLogoDiv();
    const newGameButtonDiv = createNewGameButtonDiv();
    const practiceModeButton = createPracticeModeButton();
    const howToPlayButton = createHowToPlayButton();
    const optionsButton = createOptionsButton();
    const spacerDiv = createSpacerDiv();
    const footerDiv = createFooterDiv();

    newGameButtonDiv.appendChild(practiceModeButton);
    newGameButtonDiv.appendChild(howToPlayButton);
    newGameButtonDiv.appendChild(optionsButton);
    
    content.appendChild(newGameScreenContent);
    newGameScreenContent.appendChild(titleLogoDiv);
    newGameScreenContent.appendChild(newGameButtonDiv);
    newGameScreenContent.appendChild(spacerDiv);
    newGameScreenContent.appendChild(footerDiv);
}


loadTitleScreen();
// resizeGameScreen();

// Basic function to resize game contents to fit the window -  but seems to add large top and/or left margins.
function resizeGameScreen() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let scaleX = 1;
    let scaleY = 1;
    if (windowHeight < 1200) {
        scaleY = windowHeight / 1200;
        let content = document.getElementById('content');
        content.style.transform = `scale(${scaleY})`;
    }
    if (windowWidth < 1200) {
        scaleX = windowWidth / 1200;
        if (scaleX > scaleY) {
            return;
        } else {
            let content = document.getElementById('content');
            content.style.transform = `scale(${scaleX})`;
        }
    }
}

// Music and sound effects player
// TODO : refactor code to move this variable and function back into a local scope.
let bgMusicTrack;
let soundEffect;

// Plays background music/sounds from .wav files
function playAudioTrack(trackName, loopStatus, loopStartTime) {
    if(bgMusicTrack) {
        bgMusicTrack.stop();
    }
    bgMusicTrack = new Tone.Player(`./music/${trackName}.wav`).toDestination();
    bgMusicTrack.volume.value = -10;
    bgMusicTrack.loopStart = loopStartTime;
    bgMusicTrack.autostart = true;
    bgMusicTrack.loop = loopStatus; // boolean
}

function playSound(trackName) {
    soundEffect = new Tone.Player(`./sounds/${trackName}.wav`).toDestination();
    soundEffect.autostart = true;
}





