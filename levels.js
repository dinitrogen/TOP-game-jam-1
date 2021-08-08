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

    {
        id: 3,
        name: "1-3",
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
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'C', octave: '4', duration: 1},
        ]
    },

    {
        id: 4,
        name: "1-4",
        type: 'level',
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 2,
        loopTime: 1.7,
        time: 60,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
        ]
    },

    {
        id: 5,
        name: "1-5",
        type: 'level',
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 2,
        loopTime: 1.7,
        time: 60,
        notes: [
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
            {letter: 'D', octave: '5', duration: 1},
        ]
    },

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
    //     enemyCount: 2,
    //     loopTime: 1.7,
    //     time: 90,
    //     notes: [
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'F', octave: '5', duration: 1},
    //         {letter: 'G', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //         {letter: 'C', octave: '5', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},

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
    //     enemyCount: 2,
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
    //     enemyCount: 2,
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
    //     enemyCount: 2,
    //     loopTime: 1.7,
    //     time: 90,
    //     notes: [
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'C#', octave: '5', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'E', octave: '5', duration: 1},
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},
    //         {letter: 'Db', octave: '4', duration: 1},
    //         {letter: 'C', octave: '4', duration: 1}
    //     ]
    // },

    {
        id: 10.5,
        name: "1-B",
        type: 'boss',
        mapId: 0,
        tileColor: 'gray',
        fontColor: 'white',
        bgMusic: 'boss-theme-b',
        dungeonBorder: 'border-1',
        enemy: 'mage-green',
        enemyCount: 1,
        loopTime: 0,
        time: 180,
        notes: [],
        bossNoteImg: 'note-green',
        bossLife: 3,
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

        ]
    },

    // Level 2 - Tomb
    {
        id: 11,
        name: "2-1",
        type: 'level',
        mapId: 4,
        tileColor: 'bisque',
        fontColor: 'black',
        dungeonBorder: 'border-2',
        bgMusic: 'tone-raider',
        enemy: 'mummy',
        enemyCount: 1,
        loopTime: 0,
        time: 80,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'F#', octave: '4', duration: 1},
            {letter: 'D', octave: '5', duration: 1},
        ]
    },

    {
        id: 12,
        name: "2-2",
        type: 'level',
        mapId: 4,
        tileColor: 'bisque',
        fontColor: 'black',
        dungeonBorder: 'border-2',
        bgMusic: 'tone-raider',
        enemy: 'mummy',
        enemyCount: 1,
        loopTime: 0,
        time: 80,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'G#', octave: '4', duration: 1},
            {letter: 'A#', octave: '4', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
        ]
    },

    {
        id: 13,
        name: "2-3",
        type: 'level',
        mapId: 4,
        tileColor: 'bisque',
        fontColor: 'black',
        dungeonBorder: 'border-2',
        bgMusic: 'tone-raider',
        enemy: 'mummy',
        enemyCount: 1,
        loopTime: 0,
        time: 80,
        notes: [
            {letter: 'F#', octave: '4', duration: 1},
            {letter: 'A#', octave: '4', duration: 1},
            {letter: 'C#', octave: '4', duration: 1},
            {letter: 'F#', octave: '5', duration: 1},
            {letter: 'E', octave: '5', duration: 1},
        ]
    },

    {
        id: 14,
        name: "2-4",
        type: 'level',
        mapId: 4,
        tileColor: 'bisque',
        fontColor: 'black',
        dungeonBorder: 'border-2',
        bgMusic: 'tone-raider',
        enemy: 'mummy',
        enemyCount: 2,
        loopTime: 0,
        time: 80,
        notes: [
            {letter: 'Ab', octave: '4', duration: 1},
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'D', octave: '5', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
        ]
    },

    {
        id: 15,
        name: "2-5",
        type: 'level',
        mapId: 4,
        tileColor: 'bisque',
        fontColor: 'black',
        dungeonBorder: 'border-2',
        bgMusic: 'tone-raider',
        enemy: 'mummy',
        enemyCount: 2,
        loopTime: 0,
        time: 80,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'Gb', octave: '4', duration: 1},
            {letter: 'Eb', octave: '5', duration: 1},
            {letter: 'Gb', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
        ]
    },

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
    //         {letter: 'F#', octave: '5', duration: 1},
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
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'Eb', octave: '4', duration: 1},
    //         {letter: 'Gb', octave: '4', duration: 1},
    //         {letter: 'Bb', octave: '4', duration: 1},
    //         {letter: 'B', octave: '4', duration: 1},
    //         {letter: 'Bb', octave: '4', duration: 1},
    //         {letter: 'Gb', octave: '4', duration: 1},
    //         {letter: 'Eb', octave: '5', duration: 1},
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
    //         {letter: 'F#', octave: '5', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},

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

    {
        id: 20.5,
        name: "2-B",
        type: 'boss',
        mapId: 0,
        tileColor: 'bisque',
        fontColor: 'black',
        bgMusic: 'boss-theme-b',
        dungeonBorder: 'border-2',
        enemy: 'mage-orange',
        enemyCount: 1,
        loopTime: 0,
        time: 200,
        notes: [],
        bossLife: 5,
        bossNoteImg: 'note-orange',
        chords: [
 
            {
                name: "C minor",
                chordNotes: [
                    {letter: 'Eb', octave: '4', duration: 1},
                    {letter: 'G', octave: '4', duration: 1},
                    {letter: 'C', octave: '5', duration: 1},
                ]
            },
            {
                name: "D major",
                chordNotes: [
                    {letter: 'D', octave: '4', duration: 1},
                    {letter: 'F#', octave: '4', duration: 1},
                    {letter: 'A', octave: '4', duration: 1},
                ]
            },
            {
                name: "A major",
                chordNotes: [
                    {letter: 'A', octave: '4', duration: 1},
                    {letter: 'C#', octave: '5', duration: 1},
                    {letter: 'E', octave: '4', duration: 1},
                ]
            },
            {
                name: "Eb major",
                chordNotes: [
                    {letter: 'Eb', octave: '4', duration: 1},
                    {letter: 'G', octave: '4', duration: 1},
                    {letter: 'Bb', octave: '4', duration: 1},
                ]
            }
        ]
    },

    // Level 3 - Fire
    {
        id: 21,
        name: "3-1",
        type: 'level',
        mapId: 2,
        tileColor: 'red',
        fontColor: 'white',
        dungeonBorder: 'border-4',
        bgMusic: 'lava-dungeon',
        enemy: 'fireball',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'C', octave: '3', duration: 1},
            {letter: 'D', octave: '3', duration: 1},
            {letter: 'E', octave: '3', duration: 1},
        ]
    },
    {
        id: 22,
        name: "3-2",
        type: 'level',
        mapId: 2,
        tileColor: 'red',
        fontColor: 'white',
        dungeonBorder: 'border-4',
        bgMusic: 'lava-dungeon',
        enemy: 'fireball',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'C', octave: '3', duration: 1},
            {letter: 'F', octave: '3', duration: 1},
            {letter: 'G', octave: '3', duration: 1},
            {letter: 'G', octave: '2', duration: 1},
        ]
    },
    {
        id: 23,
        name: "3-3",
        type: 'level',
        mapId: 2,
        tileColor: 'red',
        fontColor: 'white',
        dungeonBorder: 'border-4',
        bgMusic: 'lava-dungeon',
        enemy: 'fireball',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'B', octave: '2', duration: 1},
            {letter: 'G', octave: '3', duration: 1},
            {letter: 'D', octave: '3', duration: 1},
            {letter: 'A', octave: '3', duration: 1},
        ]
    },
    {
        id: 24,
        name: "3-4",
        type: 'level',
        mapId: 2,
        tileColor: 'red',
        fontColor: 'white',
        dungeonBorder: 'border-4',
        bgMusic: 'lava-dungeon',
        enemy: 'fireball',
        enemyCount: 2,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'C', octave: '3', duration: 1},
            {letter: 'E', octave: '3', duration: 1},
            {letter: 'A', octave: '2', duration: 1},
            {letter: 'G', octave: '2', duration: 1},
            {letter: 'B', octave: '3', duration: 1},
        ]
    },
    {
        id: 25,
        name: "3-5",
        type: 'level',
        mapId: 2,
        tileColor: 'red',
        fontColor: 'white',
        dungeonBorder: 'border-4',
        bgMusic: 'lava-dungeon',
        enemy: 'fireball',
        enemyCount: 2,
        loopTime: 0,
        time: 80,
        notes: [
            {letter: 'E', octave: '3', duration: 1},
            {letter: 'D', octave: '3', duration: 1},
            {letter: 'C', octave: '3', duration: 1},
            {letter: 'G', octave: '3', duration: 1},
            {letter: 'F', octave: '3', duration: 1},
            {letter: 'E', octave: '3', duration: 1},
        ]
    },
    // {
    //     id: 26,
    //     name: "3-6",
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
    //         {letter: 'Eb', octave: '3', duration: 1},
    //         {letter: 'F', octave: '3', duration: 1},
    //         {letter: 'Bb', octave: '3', duration: 1},
    //     ]
    // },
    // {
    //     id: 27,
    //     name: "3-7",
    //     type: 'level',
    //     mapId: 2,
    //     tileColor: 'red',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-4',
    //     bgMusic: 'lava-dungeon',
    //     enemy: 'fireball',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'G', octave: '2', duration: 1},
    //         {letter: 'Bb', octave: '3', duration: 1},
    //         {letter: 'Eb', octave: '3', duration: 1},
    //         {letter: 'Gb', octave: '3', duration: 1},
    //     ]
    // },
    // {
    //     id: 28,
    //     name: "3-8",
    //     type: 'level',
    //     mapId: 2,
    //     tileColor: 'red',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-4',
    //     bgMusic: 'lava-dungeon',
    //     enemy: 'fireball',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'F', octave: '3', duration: 1},
    //         {letter: 'D#', octave: '3', duration: 1},
    //         {letter: 'E', octave: '3', duration: 1},
    //         {letter: 'Eb', octave: '3', duration: 1},
    //         {letter: 'C#', octave: '3', duration: 1},
    //     ]
    // },
    // {
    //     id: 29,
    //     name: "3-9",
    //     type: 'level',
    //     mapId: 2,
    //     tileColor: 'red',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-4',
    //     bgMusic: 'lava-dungeon',
    //     enemy: 'fireball',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'C', octave: '3', duration: 1},
    //         {letter: 'E', octave: '3', duration: 1},
    //         {letter: 'D', octave: '3', duration: 1},
    //         {letter: 'F', octave: '3', duration: 1},
    //         {letter: 'Eb', octave: '3', duration: 1},
    //         {letter: 'C', octave: '3', duration: 1},
    //     ]
    // },
    // {
    //     id: 30,
    //     name: "3-10",
    //     type: 'level',
    //     mapId: 2,
    //     tileColor: 'red',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-4',
    //     bgMusic: 'lava-dungeon',
    //     enemy: 'fireball',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'D', octave: '3', duration: 1},
    //         {letter: 'F#', octave: '3', duration: 1},
    //         {letter: 'A', octave: '3', duration: 1},
    //         {letter: 'E', octave: '3', duration: 1},
    //         {letter: 'G#', octave: '3', duration: 1},
    //         {letter: 'B', octave: '3', duration: 1},
    //     ]
    // },
    {
        id: 30.5,
        name: "3-B",
        type: 'boss',
        mapId: 0,
        tileColor: 'red',
        fontColor: 'white',
        bgMusic: 'boss-theme-b',
        dungeonBorder: 'border-4',
        enemy: 'mage-red',
        enemyCount: 1,
        loopTime: 0,
        time: 200,
        notes: [],
        bossLife: 5,
        bossNoteImg: 'note-red',
        chords: [
            {
                name: "C major",
                chordNotes: [
                    {letter: 'C', octave: '3', duration: 1},
                    {letter: 'E', octave: '3', duration: 1},
                    {letter: 'G', octave: '3', duration: 1},
                ]
            },
            {
                name: "G minor",
                chordNotes: [
                    {letter: 'G', octave: '2', duration: 1},
                    {letter: 'Bb', octave: '3', duration: 1},
                    {letter: 'D', octave: '3', duration: 1},
                ]
            },
            {
                name: "A major",
                chordNotes: [
                    {letter: 'A', octave: '3', duration: 1},
                    {letter: 'C#', octave: '3', duration: 1},
                    {letter: 'E', octave: '3', duration: 1},
                ]
            },
            {
                name: "Db major",
                chordNotes: [
                    {letter: 'Db', octave: '3', duration: 1},
                    {letter: 'F', octave: '3', duration: 1},
                    {letter: 'Ab', octave: '3', duration: 1},
                ]
            }
        ]
    },

    // Level 4 - Haunted
    {
        id: 31,
        name: "4-1",
        type: 'level',
        mapId: 3,
        tileColor: 'rgb(74, 35, 90)',
        fontColor: 'white',
        dungeonBorder: 'border-5',
        bgMusic: 'candlelight-dungeon',
        enemy: 'ghost',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'C#', octave: '3', duration: 1},
            {letter: 'D#', octave: '3', duration: 1},
            {letter: 'F#', octave: '3', duration: 1},
        ]
    },
    {
        id: 32,
        name: "4-2",
        type: 'level',
        mapId: 3,
        tileColor: 'rgb(74, 35, 90)',
        fontColor: 'white',
        dungeonBorder: 'border-5',
        bgMusic: 'candlelight-dungeon',
        enemy: 'ghost',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'D', octave: '3', duration: 1},
            {letter: 'Db', octave: '3', duration: 1},
            {letter: 'E', octave: '3', duration: 1},
            {letter: 'Eb', octave: '3', duration: 1},
        ]
    },
    {
        id: 33,
        name: "4-3",
        type: 'level',
        mapId: 3,
        tileColor: 'rgb(74, 35, 90)',
        fontColor: 'white',
        dungeonBorder: 'border-5',
        bgMusic: 'candlelight-dungeon',
        enemy: 'ghost',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'G', octave: '3', duration: 1},
            {letter: 'C#', octave: '3', duration: 1},
            {letter: 'Eb', octave: '3', duration: 1},
            {letter: 'A#', octave: '3', duration: 1},
        ]
    },
    {
        id: 34,
        name: "4-4",
        type: 'level',
        mapId: 3,
        tileColor: 'rgb(74, 35, 90)',
        fontColor: 'white',
        dungeonBorder: 'border-5',
        bgMusic: 'candlelight-dungeon',
        enemy: 'ghost',
        enemyCount: 2,
        loopTime: 0,
        time: 80,
        notes: [
            {letter: 'B', octave: '3', duration: 1},
            {letter: 'Bb', octave: '3', duration: 1},
            {letter: 'A', octave: '3', duration: 1},
            {letter: 'Ab', octave: '3', duration: 1},
            {letter: 'G', octave: '3', duration: 1},
            {letter: 'Gb', octave: '3', duration: 1},
        ]
    },
    {
        id: 35,
        name: "4-5",
        type: 'level',
        mapId: 3,
        tileColor: 'rgb(74, 35, 90)',
        fontColor: 'white',
        dungeonBorder: 'border-5',
        bgMusic: 'candlelight-dungeon',
        enemy: 'ghost',
        enemyCount: 2,
        loopTime: 0,
        time: 80,
        notes: [
            {letter: 'C#', octave: '3', duration: 1},
            {letter: 'D#', octave: '3', duration: 1},
            {letter: 'F#', octave: '3', duration: 1},
            {letter: 'G#', octave: '3', duration: 1},
            {letter: 'A#', octave: '3', duration: 1},
        ]
    },
    // {
    //     id: 36,
    //     name: "4-6",
    //     type: 'level',
    //     mapId: 3,
    //     tileColor: 'rgb(74, 35, 90)',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-5',
    //     bgMusic: 'candlelight-dungeon',
    //     enemy: 'ghost',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'Bb', octave: '3', duration: 1},
    //         {letter: 'Ab', octave: '3', duration: 1},
    //         {letter: 'Gb', octave: '3', duration: 1},
    //         {letter: 'Eb', octave: '3', duration: 1},
    //         {letter: 'Db', octave: '3', duration: 1},
    //         {letter: 'Bb', octave: '2', duration: 1},
    //     ]
    // },
    // {
    //     id: 37,
    //     name: "4-7",
    //     type: 'level',
    //     mapId: 3,
    //     tileColor: 'rgb(74, 35, 90)',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-5',
    //     bgMusic: 'candlelight-dungeon',
    //     enemy: 'ghost',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'G', octave: '3', duration: 1},
    //         {letter: 'Eb', octave: '3', duration: 1},
    //         {letter: 'C', octave: '3', duration: 1},
    //         {letter: 'B', octave: '3', duration: 1},
    //         {letter: 'Db', octave: '3', duration: 1},
    //         {letter: 'G', octave: '2', duration: 1},
    //     ]
    // },
    // {
    //     id: 38,
    //     name: "4-8",
    //     type: 'level',
    //     mapId: 3,
    //     tileColor: 'rgb(74, 35, 90)',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-5',
    //     bgMusic: 'candlelight-dungeon',
    //     enemy: 'ghost',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'Gb', octave: '2', duration: 1},
    //         {letter: 'Bb', octave: '2', duration: 1},
    //         {letter: 'G', octave: '3', duration: 1},
    //         {letter: 'A', octave: '2', duration: 1},
    //         {letter: 'C#', octave: '3', duration: 1},
    //         {letter: 'E', octave: '3', duration: 1},
    //     ]
    // },
    // {
    //     id: 39,
    //     name: "4-9",
    //     type: 'level',
    //     mapId: 3,
    //     tileColor: 'rgb(74, 35, 90)',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-5',
    //     bgMusic: 'candlelight-dungeon',
    //     enemy: 'ghost',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 80,
    //     notes: [
    //         {letter: 'A#', octave: '2', duration: 1},
    //         {letter: 'D', octave: '3', duration: 1},
    //         {letter: 'F', octave: '3', duration: 1},
    //         {letter: 'F#', octave: '3', duration: 1},
    //         {letter: 'D#', octave: '3', duration: 1},
    //         {letter: 'Db', octave: '3', duration: 1},
    //     ]
    // },
    // {
    //     id: 40,
    //     name: "4-10",
    //     type: 'level',
    //     mapId: 3,
    //     tileColor: 'rgb(74, 35, 90)',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-5',
    //     bgMusic: 'candlelight-dungeon',
    //     enemy: 'ghost',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'B', octave: '3', duration: 1},
    //         {letter: 'F#', octave: '3', duration: 1},
    //         {letter: 'Db', octave: '3', duration: 1},
    //         {letter: 'Gb', octave: '3', duration: 1},
    //         {letter: 'C#', octave: '3', duration: 1},
    //         {letter: 'E', octave: '3', duration: 1},
    //     ]
    // },
    {
        id: 40.5,
        name: "4-B",
        type: 'boss',
        mapId: 0,
        tileColor: 'rgb(74, 35, 90)',
        fontColor: 'white',
        bgMusic: 'boss-theme-b',
        dungeonBorder: 'border-5',
        enemy: 'mage-purple',
        enemyCount: 1,
        loopTime: 0,
        time: 200,
        notes: [],
        bossLife: 5,
        bossNoteImg: 'note-purple',
        chords: [
            {
                name: "Db major",
                chordNotes: [
                    {letter: 'Db', octave: '3', duration: 1},
                    {letter: 'F', octave: '3', duration: 1},
                    {letter: 'Ab', octave: '3', duration: 1},
                ]
            },
            {
                name: "Ab major",
                chordNotes: [
                    {letter: 'Ab', octave: '2', duration: 1},
                    {letter: 'C', octave: '3', duration: 1},
                    {letter: 'Eb', octave: '3', duration: 1},
                ]
            },
            {
                name: "E minor",
                chordNotes: [
                    {letter: 'E', octave: '3', duration: 1},
                    {letter: 'G', octave: '3', duration: 1},
                    {letter: 'B', octave: '3', duration: 1},
                ]
            },
            {
                name: "B minor",
                chordNotes: [
                    {letter: 'B', octave: '2', duration: 1},
                    {letter: 'D', octave: '3', duration: 1},
                    {letter: 'F#', octave: '3', duration: 1},
                ]
            },
            {
                name: "C# minor",
                chordNotes: [
                    {letter: 'C#', octave: '3', duration: 1},
                    {letter: 'E', octave: '3', duration: 1},
                    {letter: 'G#', octave: '3', duration: 1},
                ]
            }

        ]
            
    },

    // Level 5 - Fortress
    {
        id: 41,
        name: "5-1",
        type: 'level',
        mapId: 5,
        tileColor: 'brown',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'fortress-dungeon',
        enemy: 'soldier-b',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'C', octave: '3', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
        ]
    },
    {
        id: 42,
        name: "5-2",
        type: 'level',
        mapId: 5,
        tileColor: 'brown',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'fortress-dungeon',
        enemy: 'soldier-b',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'G', octave: '2', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
            {letter: 'D', octave: '3', duration: 1},
            {letter: 'F', octave: '4', duration: 1},
        ]
    },
    {
        id: 43,
        name: "5-3",
        type: 'level',
        mapId: 5,
        tileColor: 'brown',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'fortress-dungeon',
        enemy: 'soldier-b',
        enemyCount: 1,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'Bb', octave: '2', duration: 1},
            {letter: 'C#', octave: '4', duration: 1},
            {letter: 'Eb', octave: '3', duration: 1},
            {letter: 'G#', octave: '4', duration: 1},
        ]
    },
    {
        id: 44,
        name: "5-4",
        type: 'level',
        mapId: 5,
        tileColor: 'brown',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'fortress-dungeon',
        enemy: 'soldier-b',
        enemyCount: 2,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'Eb', octave: '5', duration: 1},
            {letter: 'Db', octave: '3', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
            {letter: 'F', octave: '3', duration: 1},
            {letter: 'Bb', octave: '3', duration: 1},
            {letter: 'C#', octave: '3', duration: 1},
        ]
    },
    {
        id: 45,
        name: "5-5",
        type: 'level',
        mapId: 5,
        tileColor: 'brown',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'fortress-dungeon',
        enemy: 'soldier-b',
        enemyCount: 2,
        loopTime: 0,
        time: 60,
        notes: [
            {letter: 'A', octave: '2', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'B', octave: '2', duration: 1},
            {letter: 'D#', octave: '3', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'F#', octave: '3', duration: 1},
            {letter: 'Gb', octave: '3', duration: 1},
        ]
    },
    // {
    //     id: 46,
    //     name: "5-6",
    //     type: 'level',
    //     mapId: 5,
    //     tileColor: 'brown',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'fortress-dungeon',
    //     enemy: 'soldier-b',
    //     enemyCount: 1,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'D', octave: '4', duration: 1},
    //         {letter: 'A', octave: '4', duration: 1},
    //         {letter: 'B', octave: '3', duration: 1},
    //         {letter: 'C#', octave: '3', duration: 1},
    //         {letter: 'E', octave: '5', duration: 1},
    //         {letter: 'Gb', octave: '2', duration: 1},
    //     ]
    // },
    // {
    //     id: 47,
    //     name: "5-7",
    //     type: 'level',
    //     mapId: 5,
    //     tileColor: 'brown',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'fortress-dungeon',
    //     enemy: 'soldier-b',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'Eb', octave: '5', duration: 1},
    //         {letter: 'D#', octave: '3', duration: 1},
    //         {letter: 'Ab', octave: '2', duration: 1},
    //         {letter: 'F#', octave: '5', duration: 1},
    //         {letter: 'C', octave: '4', duration: 1},
    //         {letter: 'B', octave: '3', duration: 1},
    //     ]
    // },
    // {
    //     id: 48,
    //     name: "5-8",
    //     type: 'level',
    //     mapId: 5,
    //     tileColor: 'brown',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'fortress-dungeon',
    //     enemy: 'soldier-b',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'A#', octave: '2', duration: 1},
    //         {letter: 'A#', octave: '4', duration: 1},
    //         {letter: 'Db', octave: '3', duration: 1},
    //         {letter: 'D#', octave: '3', duration: 1},
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'G#', octave: '3', duration: 1},
    //     ]
    // },
    // {
    //     id: 49,
    //     name: "5-9",
    //     type: 'level',
    //     mapId: 5,
    //     tileColor: 'brown',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'fortress-dungeon',
    //     enemy: 'soldier-b',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'D', octave: '5', duration: 1},
    //         {letter: 'A', octave: '3', duration: 1},
    //         {letter: 'B', octave: '2', duration: 1},
    //         {letter: 'C#', octave: '5', duration: 1},
    //         {letter: 'Db', octave: '3', duration: 1},
    //         {letter: 'G', octave: '2', duration: 1},
    //         {letter: 'E', octave: '4', duration: 1},
    //     ]
    // },
    // {
    //     id: 50,
    //     name: "5-10",
    //     type: 'level',
    //     mapId: 5,
    //     tileColor: 'brown',
    //     fontColor: 'white',
    //     dungeonBorder: 'border-1',
    //     bgMusic: 'fortress-dungeon',
    //     enemy: 'soldier-b',
    //     enemyCount: 2,
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'F', octave: '4', duration: 1},
    //         {letter: 'Bb', octave: '3', duration: 1},
    //         {letter: 'A#', octave: '2', duration: 1},
    //         {letter: 'C', octave: '5', duration: 1},
    //         {letter: 'D', octave: '5', duration: 1},
    //         {letter: 'F#', octave: '3', duration: 1},
    //         {letter: 'G#', octave: '2', duration: 1},
    //     ]
    // },

    {
        id: 50.5,
        name: "5-B",
        type: 'boss',
        mapId: 0,
        tileColor: 'brown',
        fontColor: 'white',
        bgMusic: 'boss-theme-b',
        dungeonBorder: 'border-1',
        enemy: 'mage-blue',
        enemyCount: 1,
        loopTime: 0,
        time: 200,
        notes: [],
        bossLife: 5,
        bossNoteImg: 'note-blue',
        chords: [
            {
                name: "C diminished",
                chordNotes: [
                    {letter: 'C', octave: '3', duration: 1},
                    {letter: 'Eb', octave: '4', duration: 1},
                    {letter: 'Gb', octave: '4', duration: 1},
                ]
            },
            {
                name: "D major",
                chordNotes: [
                    {letter: 'D', octave: '3', duration: 1},
                    {letter: 'F#', octave: '4', duration: 1},
                    {letter: 'A', octave: '4', duration: 1},
                ]
            },
            {
                name: "G augmented",
                chordNotes: [
                    {letter: 'G', octave: '3', duration: 1},
                    {letter: 'B', octave: '3', duration: 1},
                    {letter: 'D#', octave: '4', duration: 1},
                ]
            },
            {
                name: "A major 7",
                chordNotes: [
                    {letter: 'A', octave: '3', duration: 1},
                    {letter: 'C#', octave: '4', duration: 1},
                    {letter: 'G#', octave: '4', duration: 1},
                ]
            },
            {
                name: "F minor b7",
                chordNotes: [
                    {letter: 'F', octave: '3', duration: 1},
                    {letter: 'Ab', octave: '4', duration: 1},
                    {letter: 'Eb', octave: '5', duration: 1},
                ]
            }

        ]
            // TODO: update chords
            
    },

    // Final Boss
    {
        id: 51, // TODO: adjust when all levels are added.
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
                name: "B minor",
                chordNotes: [
                    {letter: 'B', octave: '3', duration: 1},
                    {letter: 'D', octave: '4', duration: 1},
                    {letter: 'F#', octave: '4', duration: 1},
                ]
            },
            {
                name: "A major",
                chordNotes: [
                    {letter: 'A', octave: '3', duration: 1},
                    {letter: 'C#', octave: '4', duration: 1},
                    {letter: 'E', octave: '4', duration: 1},
                ]
            },
            {
                name: "F# major",
                chordNotes: [
                    {letter: 'F#', octave: '3', duration: 1},
                    {letter: 'A#', octave: '3', duration: 1},
                    {letter: 'C#', octave: '4', duration: 1},
                ]
            },
            {
                name: "G major",
                chordNotes: [
                    {letter: 'G', octave: '2', duration: 1},
                    {letter: 'B', octave: '3', duration: 1},
                    {letter: 'D', octave: '5', duration: 1},
                ]
            }

            
        ],
        finalChord: [
            {letter: 'B', octave: '2', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'F#', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
        ],
        finalChordName: 'B minor b7'

    },

];

export { levels };