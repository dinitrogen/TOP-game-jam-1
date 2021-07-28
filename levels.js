let levels = [
    // duration in seconds
    {
        id: 0,
        name: "Practice",
        type: 'practice',
        mapId: 0,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',

        notes: [] 
    },
    // Levels 1 - Entrance
    {
        id: 1,
        name: "1-1",
        type: 'level',
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 1,
        loopTime: 1.7, // loop start time. TODO: Update dungeon-a music track so this is not needed.
        time: 60,
        notes: [
            {letter: 'C', octave: '4', duration: 1}, // duration in seconds
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1}
        ]
    },

    {
        id: 2,
        name: "1-2",
        type: 'level',
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 1,
        loopTime: 1.7,
        time: 60,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'F', octave: '4', duration: 1},
        ]
    },

    // {
    //     id: 3,
    //     name: "1-3",
    //     type: 'level',
    //     mapId: 1,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'dungeon-a',
    //     enemy: 'snake',
    //     enemyCount: 1,
    //     loopTime: 1.7,
    //     time: 60,
    //     notes: [
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'D', octave: '4', duration: 1},
    //         {letter: 'C', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 4,
    //     name: "1-4",
    //     type: 'level',
    //     mapId: 1,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'dungeon-a',
    //     enemy: 'snake',
    //     enemyCount: 1,
    //     loopTime: 1.7,
    //     time: 60,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'D', octave: '4', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 5,
    //     name: "1-5",
    //     type: 'level',
    //     mapId: 1,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'dungeon-a',
    //     enemy: 'snake',
    //     enemyCount: 1,
    //     loopTime: 1.7,
    //     time: 60,
    //     notes: [
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 6,
    //     name: "1-6",
    //     type: 'level',
    //     mapId: 1,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'dungeon-a',
    //     enemy: 'snake',
    //     enemyCount: 1,
    //     loopTime: 1.7,
    //     time: 80,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 7,
    //     name: "1-7",
    //     type: 'level',
    //     mapId: 1,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'dungeon-a',
    //     enemy: 'snake',
    //     enemyCount: 1,
    //     loopTime: 1.7,
    //     time: 90,
    //     notes: [
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //         {letter: 'C', octave: '5', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},

    //     ]
    // },

    // {
    //     id: 8,
    //     name: "1-8",
    //     type: 'level',
    //     mapId: 1,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'dungeon-a',
    //     enemy: 'snake',
    //     enemyCount: 1,
    //     loopTime: 1.7,
    //     time: 90,
    //     notes: [
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'C', octave: '5', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},
    //         {letter: 'D', octave: '4', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},

    //     ]
    // },

    // {
    //     id: 9,
    //     name: "1-9",
    //     type: 'level',
    //     mapId: 1,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'dungeon-a',
    //     enemy: 'snake',
    //     enemyCount: 1,
    //     loopTime: 1.7,
    //     time: 90,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'Bb', octave: '4', duration: 1},
    //         {letter: 'C', octave: '5', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1}
    //     ]
    // },

    // {
    //     id: 10,
    //     name: "1-10",
    //     type: 'level',
    //     mapId: 1,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'dungeon-a',
    //     enemy: 'snake',
    //     enemyCount: 1,
    //     loopTime: 1.7,
    //     time: 90,
    //     notes: [
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'C#', octave: '5', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'D', octave: '4', duration: 1},
    //         {letter: 'Db', octave: '4', duration: 1},
    //         {letter: 'C', octave: '4', duration: 1}
    //     ]
    // },

    // {
    //     id: '1-B',
    //     name: "1-B",
    //     type: 'boss',
    //     mapId: 0,
    //     tileColor: 'gray',
    //     fontColor: 'white',
    //     bgMusic: 'boss-theme-b',
    //     dungeonBorder: 'border-1',
    //     enemy: 'badguy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 180,
    //     notes: [],
    //     bossNoteImg: 'note-green',
    //     bossLife: 3,
    //     chords: [
    //         {
    //             name: "C major",
    //             chordNotes: [
    //                 {letter: 'C', octave: '4', duration: 1},
    //                 {letter: 'E', octave: '4', duration: 1},
    //                 {letter: 'G', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "F major",
    //             chordNotes: [
    //                 {letter: 'F', octave: '4', duration: 1},
    //                 {letter: 'A', octave: '4', duration: 1},
    //                 {letter: 'C', octave: '5', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "G major",
    //             chordNotes: [
    //                 {letter: 'G', octave: '4', duration: 1},
    //                 {letter: 'B', octave: '4', duration: 1},
    //                 {letter: 'D', octave: '5', duration: 1},
    //             ]
    //         }

    //     ]
    // },
    // // Level 2 - Tomb
    // {
    //     id: 11,
    //     name: "2-1",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'D', octave: '4', duration: 1},
    //         {letter: 'F#', octave: '4', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},
    //     ]
    // },

    // {
    //     id: 12,
    //     name: "2-2",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'D', octave: '4', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'G#', octave: '4', duration: 1},
    //         {letter: 'A#', octave: '4', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 13,
    //     name: "2-3",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'F#', octave: '4', duration: 1},
    //         {letter: 'A#', octave: '4', duration: 1},
    //         {letter: 'C#', octave: '4', duration: 1},
    //         {letter: 'F#', octave: '4', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 14,
    //     name: "2-4",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'Ab', octave: '4', duration: 1},
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},
    //         {letter: 'C', octave: '5', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 15,
    //     name: "2-5",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'Gb', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'Gb', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'C', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 16,
    //     name: "2-6",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'F#', octave: '4', duration: 1},
    //         {letter: 'G#', octave: '4', duration: 1},
    //         {letter: 'F#', octave: '4', duration: 1},
    //         {letter: 'G#', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 17,
    //     name: "2-7",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'Gb', octave: '4', duration: 1},
    //         {letter: 'Bb', octave: '4', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //         {letter: 'Bb', octave: '4', duration: 1},
    //         {letter: 'Gb', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 18,
    //     name: "2-8",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'C#', octave: '4', duration: 1},
    //         {letter: 'Db', octave: '4', duration: 1},
    //         {letter: 'C#', octave: '4', duration: 1},
    //         {letter: 'C#', octave: '5', duration: 1},
    //         {letter: 'Db', octave: '5', duration: 1},
    //         {letter: 'C#', octave: '5', duration: 1},
    //         {letter: 'C#', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 19,
    //     name: "2-9",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 100,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //         {letter: 'Bb', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'Ab', octave: '4', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'F#', octave: '4', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: 20,
    //     name: "2-10",
    //     type: 'level',
    //     mapId: 4,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     dungeonBorder: 'border-2',
    //     bgMusic: 'tone-raider',
    //     enemy: 'mummy',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 100,
    //     notes: [
    //         {letter: 'C#', octave: '4', duration: 1},
    //         {letter: 'Db', octave: '4', duration: 1},
    //         {letter: 'Gb', octave: '4', duration: 1},
    //         {letter: 'F#', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'D#', octave: '4', duration: 1},
    //         {letter: 'Bb', octave: '4', duration: 1},
    //         {letter: 'A#', octave: '4', duration: 1},
    //     ]
    // },

    // {
    //     id: '2-B',
    //     name: "2-B",
    //     type: 'boss',
    //     mapId: 0,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     bgMusic: 'boss-theme-b',
    //     dungeonBorder: 'border-2',
    //     enemy: 'badguy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 200,
    //     notes: [],
    //     bossLife: 5,
    //     bossNoteImg: 'note-orange',
    //     chords: [
    //         // TODO: update chords
    //         {
    //             name: "C minor",
    //             chordNotes: [
    //                 {letter: 'Eb', octave: '4', duration: 1},
    //                 {letter: 'G', octave: '4', duration: 1},
    //                 {letter: 'C', octave: '5', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "D major",
    //             chordNotes: [
    //                 {letter: 'D', octave: '4', duration: 1},
    //                 {letter: 'F#', octave: '4', duration: 1},
    //                 {letter: 'A', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "A major",
    //             chordNotes: [
    //                 {letter: 'A', octave: '4', duration: 1},
    //                 {letter: 'C#', octave: '5', duration: 1},
    //                 {letter: 'E', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "Eb major",
    //             chordNotes: [
    //                 {letter: 'Eb', octave: '4', duration: 1},
    //                 {letter: 'G', octave: '4', duration: 1},
    //                 {letter: 'Bb', octave: '4', duration: 1},
    //             ]
    //         }

    //     ]
    // },

    // // Level 3 - Fire
    //     {
    //     id: 21,
    //     name: "3-1",
    //     type: 'level',
    //     mapId: 2,
    //     tileColor: 'red',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-4',
    //     bgMusic: 'lava-dungeon',
    //     enemy: 'fireball',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'C', octave: '3', duration: 1},
    //         {letter: 'D', octave: '3', duration: 1},
    //         {letter: 'E', octave: '3', duration: 1},
    //     ]
    // },

    // {
    //     id: '3-B',
    //     name: "3-B",
    //     type: 'boss',
    //     mapId: 0,
    //     tileColor: 'red',
    //     fontColor: 'white',
    //     bgMusic: 'boss-theme-b',
    //     dungeonBorder: 'border-4',
    //     enemy: 'badguy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 200,
    //     notes: [],
    //     bossLife: 5,
    //     bossNoteImg: 'note-red',
    //     chords: [
    //         {
    //             name: "C minor",
    //             chordNotes: [
    //                 {letter: 'Eb', octave: '4', duration: 1},
    //                 {letter: 'G', octave: '4', duration: 1},
    //                 {letter: 'C', octave: '5', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "D major",
    //             chordNotes: [
    //                 {letter: 'D', octave: '4', duration: 1},
    //                 {letter: 'F#', octave: '4', duration: 1},
    //                 {letter: 'A', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "A major",
    //             chordNotes: [
    //                 {letter: 'A', octave: '4', duration: 1},
    //                 {letter: 'C#', octave: '5', duration: 1},
    //                 {letter: 'E', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "Eb major",
    //             chordNotes: [
    //                 {letter: 'Eb', octave: '4', duration: 1},
    //                 {letter: 'G', octave: '4', duration: 1},
    //                 {letter: 'Bb', octave: '4', duration: 1},
    //             ]
    //         }

    //     ]
    // },

    // // Level 4 - Haunted
    // {
    //     id: 31,
    //     name: "4-1",
    //     type: 'level',
    //     mapId: 3,
    //     tileColor: 'black',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-5',
    //     bgMusic: 'candlelight-dungeon',
    //     enemy: 'ghost',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'C#', octave: '3', duration: 1},
    //         {letter: 'D#', octave: '3', duration: 1},
    //         {letter: 'F#', octave: '3', duration: 1},
    //     ]
    // },

    // {
    //     id: '4-B',
    //     name: "4-B",
    //     type: 'boss',
    //     mapId: 0,
    //     tileColor: 'black',
    //     fontColor: 'white',
    //     bgMusic: 'boss-theme-b',
    //     dungeonBorder: 'border-5',
    //     enemy: 'badguy',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 200,
    //     notes: [],
    //     bossLife: 5,
    //     bossNoteImg: 'note-purple',
    //     chords: [
    //         {
    //             name: "C minor",
    //             chordNotes: [
    //                 {letter: 'Eb', octave: '4', duration: 1},
    //                 {letter: 'G', octave: '4', duration: 1},
    //                 {letter: 'C', octave: '5', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "D major",
    //             chordNotes: [
    //                 {letter: 'D', octave: '4', duration: 1},
    //                 {letter: 'F#', octave: '4', duration: 1},
    //                 {letter: 'A', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "A major",
    //             chordNotes: [
    //                 {letter: 'A', octave: '4', duration: 1},
    //                 {letter: 'C#', octave: '5', duration: 1},
    //                 {letter: 'E', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "Eb major",
    //             chordNotes: [
    //                 {letter: 'Eb', octave: '4', duration: 1},
    //                 {letter: 'G', octave: '4', duration: 1},
    //                 {letter: 'Bb', octave: '4', duration: 1},
    //             ]
    //         }

    //     ]
    //         // TODO: update chords
            
    // },

    // Level 5 - Fortress?

    //Final Boss
    {
        name: "Final Boss",
        type: 'finalBoss',
        mapId: 0,
        tileColor: 'gray',
        fontColor: 'white',
        bgMusic: 'boss-theme',
        dungeonBorder: 'border-2',
        bossNoteImg: 'note-blue',
        loopTime: 0,
        time: 120,
        notes: [],
        chords: [
            {
                name: "C major",
                chordNotes: [
                    {letter: 'C', octave: '4', duration: 1},
                    {letter: 'E', octave: '4', duration: 1},
                    {letter: 'G', octave: '4', duration: 1},
                ]
            },
            {
                name: "F major",
                chordNotes: [
                    {letter: 'F', octave: '4', duration: 1},
                    {letter: 'A', octave: '4', duration: 1},
                    {letter: 'C', octave: '5', duration: 1},
                ]
            },
            {
                name: "G major",
                chordNotes: [
                    {letter: 'G', octave: '4', duration: 1},
                    {letter: 'B', octave: '4', duration: 1},
                    {letter: 'D', octave: '5', duration: 1},
                ]
            }

            
        ],
        finalChord: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'Bb', octave: '4', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
        ],

    },

    


    // More levels...

];

export { levels };