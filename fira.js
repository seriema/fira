document.fira = {};

document.fira.kalender = {
    // January
    0: {
    },
    // February
    1: {
        7: [{ name: "Lin Lanying", year: 1918, source: "https://en.wikipedia.org/wiki/Lin_Lanying" }],
        15: [{ name: "Sofya Kovalevskaya", year: 1850, source: "https://en.wikipedia.org/wiki/Sofya_Kovalevskaya" }],
    },
    // March
    2: {
        23: [{ name: "Emmy Noether", year: 1882, source: "https://en.wikipedia.org/wiki/Emmy_Noether" }],
        30: [{ name: "Mary Whiton Calkins", year: 1863, source: "https://en.wikipedia.org/wiki/Mary_Whiton_Calkins" }],
    },
    // April
    3: {
        28: [{ name: "Hertha Ayrton", year: 1854, source: "https://en.wikipedia.org/wiki/Hertha_Ayrton" }],
    },
    // May
    4: {
        12: [{ name: "Florence Nightingale", year: 1820, source: "https://en.wikipedia.org/wiki/Florence_Nightingale" }],
        // Borrowed mechanics from johansson.jp/fika for today as it's mother's day
        [lastDayInMonth(0, 4).getDate()]: [{ name: "Mamma! (Mors dag)", image: "jp_mother.jpg" }],
    },
    // June
    5: {
    },
    // July
    6: {
        10: [{ name: "Nikola Tesla", year: 1856 }],
        25: [{ name: "Margaret Floy Washburn", year: 1871, source: "https://en.wikipedia.org/wiki/Margaret_Floy_Washburn" }],
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
        7: [{ name: "Lise Meitner", year: 1878, source: "https://en.wikipedia.org/wiki/Lise_Meitner" }],
    },
    // December
    11: {
        1: [{ name: "Christine Ladd-Franklin", year: 1847, source: "https://en.wikipedia.org/wiki/Christine_Ladd-Franklin" }],
        3: [{ name: "Anna Freud", year: 1895, source: "https://en.wikipedia.org/wiki/Anna_Freud" }],
        10: [{ name: "Ada Lovelace", year: 1815, source: "https://en.wikipedia.org/wiki/Ada_Lovelace" }
            ,{ name: "Margaret Eliza Maltby", year: 1860, source: "https://en.wikipedia.org/wiki/Margaret_Eliza_Maltby" }],
        19: [{ name: "Mileva Marić", year: 1875, source: "https://en.wikipedia.org/wiki/Mileva_Mari%C4%87" }],
        26: [{ name: "Mary Somerville", year: 1780, source: "https://en.wikipedia.org/wiki/Mary_Somerville" }],
        28: [{ name: "Linus Torvalds", year: 1969 }],
        30: [{ name: "Emilie Martin", year: 1869, source: "https://en.wikipedia.org/wiki/Emilie_Martin" }],
    }
};
