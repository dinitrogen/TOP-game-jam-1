function loadHighScoresScreen() {
   

    const content = document.getElementById('content');
    content.textContent = '';
    const highScoresScreenContent = document.createElement('div');
    highScoresScreenContent.classList.add('highScoresScreenContent');

    const highScoresHeader = document.createElement('h1');
    highScoresHeader.textContent = 'HIGH SCORES';

    const highScoresDiv = document.createElement('div');
    highScoresDiv.classList.add('highScoresDiv');
    
    const highNoteStreaksHeader = document.createElement('h1');
    highNoteStreaksHeader.textContent = 'HIGH NOTE STREAKS';

    const highNoteStreaksDiv = document.createElement('div');
    highNoteStreaksDiv.classList.add('highNoteStreaksDiv');
    
    highScoresScreenContent.appendChild(highScoresHeader);
    highScoresScreenContent.appendChild(highScoresDiv);
    highScoresScreenContent.appendChild(highNoteStreaksHeader);
    highScoresScreenContent.appendChild(highNoteStreaksDiv);

    
    content.appendChild(highScoresScreenContent);
       
    if (localStorage.getItem('myHighScores')) {
        console.log('Found saved scores.');
        loadHighScores();  
    }

    if (localStorage.getItem('myHighNoteStreaks')) {
        console.log('Found saved note streaks.');
        loadHighNoteStreaks();  
    }
    
    highScores.forEach(function(score) {
        const scoreText = document.createElement('p');
        scoreText.textContent = `${score.name} - ${score.score}`;
        highScoresDiv.appendChild(scoreText);
    });

    highNoteStreaks.forEach(function(noteStreak) {
        const noteStreakText = document.createElement('p');
        noteStreakText.textContent = `${noteStreak.name} - ${noteStreak.score}`;
        highNoteStreaksDiv.appendChild(noteStreakText);
    });

}

export { loadHighScoresScreen };