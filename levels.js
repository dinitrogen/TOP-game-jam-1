let levels = [
    // duration in seconds
    {
        name: "practice",
        mapId: 0,
        tileColor: 'gray',
        notes: [] 
    },

    {
        name: "C triad",
        mapId: 1,
        tileColor: 'gray',
        bgMusic: 'dungeon-a',
        loopTime: 1.7, // loop start time. TODO: Update dungeon-a music track so this is not needed.
        time: 30,
        notes: [
            {letter: 'C', octave: '4', duration: 1}, // duration in seconds
            {letter: 'E', octave: '4', duration: 1},
            {letter: 'G', octave: '4', duration: 2}
        ]
    },

    // {
    //     name: "Easy as 1-2-3",
    //     mapId: 1,
    //     tileColor: 'gray',
    //     bgMusic: 'dungeon-a',
    //     loopTime: 1.7,
    //     time: 30,
    //     notes: [
    //         {letter: 'A', octave: '3', duration: 1},
    //         {letter: 'B', octave: '3', duration: 1},
    //         {letter: 'C', octave: '4', duration: 2}
    //     ]
    // },

    {
        name: "boss",
        mapId: 0,
        tileColor: 'gray',
        bgMusic: 'boss-theme',
        loopTime: 0,
        time: 120,
        notes: []
    },

    {
        name: "Leap Frog Thirds",
        mapId: 2,
        tileColor: 'green',
        bgMusic: 'tone-raider',
        loopTime: 0,
        time: 40,
        notes: [
            {letter: 'C', octave: '4', duration: 0.5},
            {letter: 'E', octave: '4', duration: 0.5},
            {letter: 'D', octave: '4', duration: 0.5},
            {letter: 'F', octave: '4', duration: 0.5},
            {letter: 'E', octave: '4', duration: 0.5},
            {letter: 'G', octave: '4', duration: 0.5},
        ]
    },

    {
        name: "boss",
        mapId: 0,
        tileColor: 'green',
        bgMusic: 'boss-theme-b',
        loopTime: 0,
        time: 120,
        notes: []
    },


    // More levels...

];

export { levels };