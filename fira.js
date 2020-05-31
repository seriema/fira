document.fira = {};

document.fira.kalender = {
    // January
    0: {
    },
    // February
    1: {
        7: [{ name: "Lin Lanying", year: 1918, source: "https://en.wikipedia.org/wiki/Lin_Lanying" }],
    },
    // March
    2: {
    },
    // April
    3: {
    },
    // May
    4: {
        // Borrowed mechanics from johansson.jp/fika for today as it's mother's day
        [lastDayInMonth(0, 4).getDate()]: [{ name: "Mamma! (Mors dag)", image: "jp_mother.jpg" }],
    },
    // June
    5: {
    },
    // July
    6: {
        10: [{ name: "Nikola Tesla", year: 1856 }],
    },
    // August
    7: {
    },
    // September
    8: {
        23: [{ name: "Emily Warren Roebling", year: 1843, source: "https://en.wikipedia.org/wiki/Emily_Warren_Roebling" }],
    },
    // October
    9: {
    },
    // November
    10: {
    },
    // December
    11: {
        28: [{ name: "Linus Torvalds", year: 1969 }],
    }
};
