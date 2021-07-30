// Global tone player references
let backgroundAudioPlayer,
    soundEffectPlayer = undefined;

// Initializes the audio player and loads a background audio track
function loadBackgroundAudio(audio) {
    backgroundAudioPlayer = new Tone.Player().toDestination();
    return backgroundAudioPlayer.load(`./music/${audio}.wav`);
}

// Stops any currently playing background audio and disposes the player
function stopBackgroundAudio() {
    if (backgroundAudioPlayer && backgroundAudioPlayer.state === 'started') {
        backgroundAudioPlayer.stop();
        backgroundAudioPlayer.dispose();
    }
}

// Plays a background audio track just one time
function playBackgroundAudioOnce(audio) {
    return playBackgroundAudio(audio, false).then(() => {
        // Return a promise that will resolve when the background audio player has returned to a 'stopped' state
        return new Promise(function (resolve, reject) {
            audioCheckInterval = setInterval(function () {
                if (backgroundAudioPlayer && backgroundAudioPlayer.state === 'stopped') {
                    clearInterval(audioCheckInterval);
                    resolve();
                }
            }, 100); // Check the state of the player every 100ms
        });
    });
}

// Plays a background audio track in a loop
function playBackgroundAudioLoop(audio) {
    playBackgroundAudio(audio, true);
}

// Stops any currently playing audio, loads the new track and starts the player
function playBackgroundAudio(audio, loop) {
    stopBackgroundAudio();
    return new Promise(function (resolve, reject) {
        loadBackgroundAudio(audio).then(() => {
            backgroundAudioPlayer.volume.value = -10;
            backgroundAudioPlayer.loop = loop;
            checkLoadedInterval = setInterval(function () {
                if (backgroundAudioPlayer && backgroundAudioPlayer.loaded === true) {
                    clearInterval(checkLoadedInterval);
                    backgroundAudioPlayer.start();
                    resolve();
                }
            }, 100); // Check the loaded state of the player buffer every 100ms
        });
    });
}

// Initializes the sound effect player and loads a sound effect
function loadSoundEffect(soundEffect) {
    soundEffectPlayer = new Tone.Player().toDestination();
    return soundEffectPlayer.load(`./sounds/${soundEffect}.wav`);
}

// Plays a sound effect just one time
function playSoundEffect(soundEffect) {
    loadSoundEffect(soundEffect).then(() => {
        soundEffectPlayer.volume.value = 0;
        soundEffectPlayer.loop = false;
        soundEffectPlayer.start();
    });
}

// Lowers the background audio volume and plays a single note, then raises the background audio volume
function playNote(note, duration, delay) {
    if (backgroundAudioPlayer) {
        backgroundAudioPlayer.volume.value = -30;
        setTimeout(function() {
            backgroundAudioPlayer.volume.value = -10
        }, (duration * 1000));
    }
    
    const synth = new Tone.Synth().toDestination();
    synth.volume.value = 0;
    synth.triggerAttackRelease(note, duration, delay);
}

// Plays a sequence of notes as a melody
function playMelody(level) {
    for (let i = 0; i < level.notes.length; i++) {
        let now = Tone.now();
        let note = `${level.notes[i].letter}${level.notes[i].octave}`;
        let duration = level.notes[i].duration;
        playNote(note, duration, now + noteDelay);
        noteDelay = noteDelay + level.notes[i].duration;
    }
}