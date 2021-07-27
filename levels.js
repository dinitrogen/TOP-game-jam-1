let levels = [
    // duration in seconds
    {
        id: 0,
        name: "practice",
        mapId: 0,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',

        notes: [] 
    },
    // Levels 1 - 10
    {
        id: 1,
        name: "C triad",
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
        name: "",
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
        name: "",
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
        name: "",
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
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
        ]
    },

    {
        id: 5,
        name: "",
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
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
        ]
    },

    {
        id: 6,
        name: "",
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 1,
        loopTime: 1.7,
        time: 80,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'D', octave: '5', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
        ]
    },

    {
        id: 7,
        name: "",
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 1,
        loopTime: 1.7,
        time: 90,
        notes: [
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
            {letter: 'D', octave: '5', duration: 1},
            {letter: 'E', octave: '4', duration: 1},

        ]
    },

    {
        id: 8,
        name: "",
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 1,
        loopTime: 1.7,
        time: 90,
        notes: [
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
            {letter: 'D', octave: '5', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},

        ]
    },

    {
        id: 9,
        name: "",
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 1,
        loopTime: 1.7,
        time: 90,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'Bb', octave: '4', duration: 1},
            {letter: 'C', octave: '5', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'D', octave: '5', duration: 1},
            {letter: 'G', octave: '4', duration: 1}
        ]
    },

    {
        id: 10,
        name: "",
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: 'border-1',
        bgMusic: 'dungeon-a',
        enemy: 'snake',
        enemyCount: 1,
        loopTime: 1.7,
        time: 90,
        notes: [
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'C#', octave: '5', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'D', octave: '4', duration: 1},
            {letter: 'Db', octave: '4', duration: 1},
            {letter: 'C', octave: '4', duration: 1}
        ]
    },

    {
        id: '1-B',
        name: "boss",
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        bgMusic: 'boss-theme-b',
        dungeonBorder: 'border-1',
        enemy: 'badguy',
        enemyCount: 1,
        loopTime: 0,
        time: 180,
        notes: [],
        bossNoteImg: 'note-red',
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
    // Levels 11 - 20
    {
        id: 11,
        name: "",
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
        name: "",
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
        name: "",
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
            {letter: 'F#', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
        ]
    },

    {
        id: 14,
        name: "",
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
        name: "",
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
            {letter: 'Gb', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'Gb', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'C', octave: '4', duration: 1},
        ]
    },

    {
        id: 16,
        name: "",
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
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'F#', octave: '4', duration: 1},
            {letter: 'G#', octave: '4', duration: 1},
            {letter: 'F#', octave: '4', duration: 1},
            {letter: 'G#', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
        ]
    },

    {
        id: 17,
        name: "",
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
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'Gb', octave: '4', duration: 1},
            {letter: 'Bb', octave: '4', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
            {letter: 'Bb', octave: '4', duration: 1},
            {letter: 'Gb', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
        ]
    },

    {
        id: 18,
        name: "",
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
            {letter: 'C#', octave: '4', duration: 1},
            {letter: 'Db', octave: '4', duration: 1},
            {letter: 'C#', octave: '4', duration: 1},
            {letter: 'C#', octave: '5', duration: 1},
            {letter: 'Db', octave: '5', duration: 1},
            {letter: 'C#', octave: '5', duration: 1},
            {letter: 'C#', octave: '4', duration: 1},
        ]
    },

    {
        id: 19,
        name: "",
        mapId: 4,
        tileColor: 'bisque',
        fontColor: 'black',
        dungeonBorder: 'border-2',
        bgMusic: 'tone-raider',
        enemy: 'mummy',
        enemyCount: 2,
        loopTime: 0,
        time: 100,
        notes: [
            {letter: 'C', octave: '4', duration: 1},
            {letter: 'B', octave: '4', duration: 1},
            {letter: 'Bb', octave: '4', duration: 1},
            {letter: 'A', octave: '4', duration: 1},
            {letter: 'Ab', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 1},
            {letter: 'F#', octave: '4', duration: 1},
            {letter: 'F', octave: '4', duration: 1},
            {letter: 'E', octave: '4', duration: 1},
        ]
    },

    {
        id: 20,
        name: "",
        mapId: 4,
        tileColor: 'bisque',
        fontColor: 'black',
        dungeonBorder: 'border-2',
        bgMusic: 'tone-raider',
        enemy: 'mummy',
        enemyCount: 2,
        loopTime: 0,
        time: 100,
        notes: [
            {letter: 'C#', octave: '4', duration: 1},
            {letter: 'Db', octave: '4', duration: 1},
            {letter: 'Gb', octave: '4', duration: 1},
            {letter: 'F#', octave: '4', duration: 1},
            {letter: 'Eb', octave: '4', duration: 1},
            {letter: 'D#', octave: '4', duration: 1},
            {letter: 'Bb', octave: '4', duration: 1},
            {letter: 'A#', octave: '4', duration: 1},
        ]
    },

    {
        id: '2-B',
        name: "boss",
        mapId: 0,
        tileColor: 'bisque',
        fontColor: 'black',
        bgMusic: 'boss-theme-b',
        dungeonBorder: 'border-2',
        enemy: 'badguy',
        enemyCount: 1,
        loopTime: 0,
        time: 200,
        notes: [],
        bossLife: 5,
        bossNoteImg: 'note-green',
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

    {
        name: "finalBoss", // Temporarily changing to final boss
        mapId: 0,
        tileColor: 'gray',
        fontColor: 'white',
        bgMusic: 'boss-theme',
        dungeonBorder: 'url(./img/graphics/border-2.svg)',
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

    // {
    //     name: "Leap Frog Thirds",
    //     mapId: 2,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     bgMusic: 'tone-raider',
    //     dungeonBorder: 'border-2',
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 0.5},
    //         {letter: 'E', octave: '4', duration: 0.5},
    //         {letter: 'D', octave: '4', duration: 0.5},
    //         {letter: 'F', octave: '4', duration: 0.5},
    //         {letter: 'E', octave: '4', duration: 0.5},
    //         {letter: 'G', octave: '4', duration: 0.5},
    //     ]
    // },

    // {
    //     name: "boss",
    //     mapId: 0,
    //     tileColor: 'bisque',
    //     fontColor: 'black',
    //     bgMusic: 'boss-theme-b',
    //     dungeonBorder: 'border-2',
    //     loopTime: 0,
    //     time: 120,
    //     notes: [],
    //     bossNoteImg: 'note-green',
    //     chords: [
    //         {
    //             name: "C major (bass)",
    //             chordNotes: [
    //                 {letter: 'C', octave: '3', duration: 1},
    //                 {letter: 'E', octave: '3', duration: 1},
    //                 {letter: 'G', octave: '3', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "F major (bass)",
    //             chordNotes: [
    //                 {letter: 'F', octave: '3', duration: 1},
    //                 {letter: 'A', octave: '3', duration: 1},
    //                 {letter: 'C', octave: '3', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "G major (bass)",
    //             chordNotes: [
    //                 {letter: 'G', octave: '3', duration: 1},
    //                 {letter: 'B', octave: '3', duration: 1},
    //                 {letter: 'D', octave: '3', duration: 1},
    //             ]
    //         }

    //     ]
    // },

    // {
    //     name: "Diminishing returns",
    //     mapId: 4,
    //     tileColor: 'firebrick',
    //     fontColor: 'white',
    //     bgMusic: 'lava-dungeon',
    //     dungeonBorder: 'border-4',
    //     loopTime: 0,
    //     time: 60,
    //     notes: [
    //         {letter: 'C', octave: '4', duration: 0.5},
    //         {letter: 'Eb', octave: '4', duration: 0.5},
    //         {letter: 'Gb', octave: '4', duration: 0.5},
    //     ]
    // },

    // {
    //     name: "boss",
    //     mapId: 0,
    //     tileColor: 'firebrick',
    //     fontColor: 'white',
    //     bgMusic: 'boss-theme',
    //     dungeonBorder: 'border-4',
    //     loopTime: 0,
    //     time: 120,
    //     notes: [],
    //     bossNoteImg: 'note-red',
    //     chords: [
    //         {
    //             name: "C minor",
    //             chordNotes: [
    //                 {letter: 'C', octave: '4', duration: 1},
    //                 {letter: 'Eb', octave: '4', duration: 1},
    //                 {letter: 'G', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "C diminished",
    //             chordNotes: [
    //                 {letter: 'C', octave: '4', duration: 1},
    //                 {letter: 'Eb', octave: '4', duration: 1},
    //                 {letter: 'Gb', octave: '4', duration: 1},
    //             ]
    //         },
    //         {
    //             name: "C augmented",
    //             chordNotes: [
    //                 {letter: 'C', octave: '4', duration: 1},
    //                 {letter: 'E', octave: '4', duration: 1},
    //                 {letter: 'G#', octave: '4', duration: 1},
    //             ]
    //         }

    //     ]
    // },


    // More levels...

];

export { levels };