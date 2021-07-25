let levels = [
    // duration in seconds
    {
        name: "practice",
        mapId: 0,
        tileColor: 'gray',
        fontColor: 'white',
        notes: [] 
    },

    {
        name: "C triad",
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: `url(./img/graphics/border-1.svg)`,
        bgMusic: 'dungeon-a',
        loopTime: 1.7, // loop start time. TODO: Update dungeon-a music track so this is not needed.
        time: 30,
        notes: [
            {letter: 'C', octave: '4', duration: 1}, // duration in seconds
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 2}
        ]
    },

     {
        name: "boss",
        mapId: 0,
        tileColor: 'bisque',
        fontColor: 'black',
        bgMusic: 'boss-theme-b',
        dungeonBorder: `url(./img/graphics/border-2.svg)`,
        loopTime: 0,
        time: 120,
        notes: [],
        bossNoteImg: 'note-green',
        chords: [
            {
                name: "C major (bass)",
                chordNotes: [
                    {letter: 'C', octave: '3', duration: 1},
                    {letter: 'E', octave: '3', duration: 1},
                    {letter: 'G', octave: '3', duration: 1},
                ]
            },
            {
                name: "F major (bass)",
                chordNotes: [
                    {letter: 'F', octave: '3', duration: 1},
                    {letter: 'A', octave: '3', duration: 1},
                    {letter: 'C', octave: '3', duration: 1},
                ]
            },
            {
                name: "G major (bass)",
                chordNotes: [
                    {letter: 'G', octave: '3', duration: 1},
                    {letter: 'B', octave: '3', duration: 1},
                    {letter: 'D', octave: '3', duration: 1},
                ]
            }

        ]
    },

    {
        name: "Easy as 1-2-3",
        mapId: 1,
        tileColor: 'gray',
        fontColor: 'white',
        dungeonBorder: `url(./img/graphics/border-1.svg)`,
        bgMusic: 'dungeon-a',
        loopTime: 1.7,
        time: 30,
        notes: [
            {letter: 'A', octave: '3', duration: 1},
            {letter: 'B', octave: '3', duration: 1},
            {letter: 'C', octave: '4', duration: 2}
        ]
    },

    {
        name: "finalBoss", // Temporarliy changing to final boss
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
    //     dungeonBorder: `url(./img/graphics/border-2.svg)`,
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
    //     dungeonBorder: `url(./img/graphics/border-2.svg)`,
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
    //     dungeonBorder: `url(./img/graphics/border-4.svg)`,
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
    //     dungeonBorder: `url(./img/graphics/border-4.svg)`,
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