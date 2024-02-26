
simple_simple = [
    {
        id: 'afg',
        poster: {
            name: 'juniper',
        },
        text: "this is a comment about berries",
        score: 66,
        date: new Date("2024-01-02T12:00"),
        children: [],
    },
    {
        id: 'afg',
        poster: {
            name: 'beryl',
        },
        text: "this is a comment about aluminium silicate",
        score: 12,
        date: new Date("2024-01-02T19:00"),
        children: [],
    },
]

simple_nested = [
    {
        id: 'afg',
        poster: {
            name: 'juniper',
        },
        text: "this is a comment about berries",
        score: 66,
        date: new Date("2024-01-02T12:00"),
        children: [
            {
                id: 'afg2',
                poster: {
                    name: 'juniper',
                },
                text: "and this is a nested reply",
                score: 166,
                date: new Date("2024-01-02T14:00"),
                children: [],
            },
            {
                id: 'afg3',
                poster: {
                    name: 'juniper',
                },
                text: "and this is a second nested reply",
                score: 166,
                date: new Date("2024-01-02T14:02"),
                children: [],
            },
        ],
    },
    {
        id: 'gjdk5',
        poster: {
            name: 'beryl',
        },
        text: "this is a comment about aluminium silicate",
        score: 12,
        date: new Date("2024-01-02T19:00"),
        children: [
            {
                id: 'gjdk52',
                poster: {
                    name: 'beryl 2',
                },
                text: "and this is a nested reply",
                score: 166,
                date: new Date("2024-01-02T14:00"),
                children: [
                    {
                        id: 'gjdk53',
                        poster: {
                            name: 'beryl 3',
                        },
                        text: "and this is a double-nested reply",
                        score: 166,
                        date: new Date("2024-01-02T14:02"),
                        children: [],
                    },
                ],
            },
        ],
    },
]


rick = [
    {
        id: "fv51rzs",
        poster: {
            name: "RamsesThePigeon",
            mod: true,
        },
        text: "Yes, folks, this is really Rick Astley.\n\nNo, he will not be giving you up, letting you down, or... look, you get it.",
        score: "hidden",
        children: [
            {
                id: "fv5gjbd",
                poster: {
                    name: "AdamSullivan",
                },
                text: "If you ask Rick Astley to give you a copy of the movie “UP” you create a paradox where he either has to give you up or let you down\n\nEdit: I think we need u/ReallyRickAstley to weigh in on this.",
                score: 2890,
                date: new Date("2020-07-17T19:00"),
                children: [
                    {
                        id: "0jn24j",
                        poster: {
                            name: "kash_ak",
                        },
                        text: "What should we name this paradox\n\nEdit: A Rickle in Time",
                        score: 604,
                        date: new Date("2020-07-17T19:00"),
                        children: [

                        ],

                    },

                    {
                        id: "7nbsj56",
                        poster: {
                            name: "Orngog",
                        },
                        text: "it's not even 4:20 yet",
                        score: 604,
                        date: new Date("2020-07-17T19:36"),
                        children: [

                        ],
                    },
                ],
            },
            {
                id: "kf61bd",
                poster: {
                    name: "Bahmerman",
                },
                text: "This is some next level Rick-Rolling.\n\nI mean, he's on a bike.",
                score: 704,
                children: [

                ],
                date: new Date("2020-07-17T17:47"),

            },
        ],
        date: new Date("2020-07-17T11:52"),
        stickied: true,
    },
    {
        id: 'lk787jgh',
        poster: {
            name: 'samson-meow',
        },
        text: "A reminder that Rick gave the best AMA answer ever a few years back. No it's not a rickroll.",
        score: "20.8k",
        date: new Date("2020-07-17T17:30"),
        children: [],
    },
];


evil_1 = [
    {
        id: 'afg',
        poster: {
            name: 'nice guy',
        },
        text: "I would like to use <b>bold text</b>",
        score: 10,
        date: new Date("2023-01-02T12:00"),
        children: [],
    },
    {
        id: 'afg',
        poster: {
            name: 'bad guy',
        },
        text: "I would like to use <script>alert('attack!')</script>",
        score: -12,
        date: new Date("2022-01-02T19:00"),
        children: [],
    },
];


all_comments = {
    simple_simple,
    simple_nested,
    rick,
    evil_1,
}