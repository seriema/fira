document.fira = {};

document.fira.kalender = {
    // January
    0: {
        1: [{ name: "Jane Marcet", year: 1769, source: "https://en.wikipedia.org/wiki/Jane_Marcet" }],
        17: [{ name: "Anita Borg", year: 1949, source: "https://en.wikipedia.org/wiki/Anita_Borg" }],
    },
    // February
    1: {
        7: [{ name: "Lin Lanying", year: 1918, source: "https://en.wikipedia.org/wiki/Lin_Lanying" }],
        17: [{ name: "Rózsa Péter", year: 1905, source: "https://en.wikipedia.org/wiki/R%C3%B3zsa_P%C3%A9ter" }],
        15: [{ name: "Sofya Kovalevskaya", year: 1850, source: "https://en.wikipedia.org/wiki/Sofya_Kovalevskaya" }],
        21: [{ name: "Margaret Anne LeMone", year: 1946, source: "https://en.wikipedia.org/wiki/Margaret_Anne_LeMone" }],
    },
    // March
    2: {
        7: [{ name: "Betty Holberton", year: 1917, inventions: ["breakpoints (debugging)"], source: "https://en.wikipedia.org/wiki/Betty_Holberton" }],
        12: [{ name: "Lyudmila Keldysh", year: 1904, source: "https://en.wikipedia.org/wiki/Lyudmila_Keldysh" }],
        22: [{ name: "Margaret Millington", year: 1944, source: "https://en.wikipedia.org/wiki/Margaret_Millington" }],
        23: [{ name: "Emmy Noether", year: 1882, source: "https://en.wikipedia.org/wiki/Emmy_Noether" }],
        26: [{ name: "Marion Cameron Gray", year: 1902, source: "https://en.wikipedia.org/wiki/Marion_Cameron_Gray" }],
        30: [{ name: "Mary Whiton Calkins", year: 1863, source: "https://en.wikipedia.org/wiki/Mary_Whiton_Calkins" }
            ,{ name: "Cecilia Berdichevsky", year: 1925, source: "https://en.wikipedia.org/wiki/Cecilia_Berdichevsky" }],
    },
    // April
    3: {
        28: [{ name: "Hertha Ayrton", year: 1854, source: "https://en.wikipedia.org/wiki/Hertha_Ayrton" }],
    },
    // May
    4: {
        1: [{ name: "Evelyn Boyd Granville", year: 1924, source: "https://en.wikipedia.org/wiki/Evelyn_Boyd_Granville" }],
        12: [{ name: "Florence Nightingale", year: 1820, source: "https://en.wikipedia.org/wiki/Florence_Nightingale" }
            ,{ name: "Maryam Mirzakhani", year: 1977, source: "https://en.wikipedia.org/wiki/Maryam_Mirzakhani" }],
        // Borrowed mechanics from johansson.jp/fika for today as it's mother's day
        [lastDayInMonth(0, 4).getDate()]: [{ name: "Mamma! (Mors dag)", image: "jp_mother.jpg" }],
    },
    // June
    5: {
    },
    // July
    6: {
        10: [{ name: "Nikola Tesla", year: 1856, source: "https://en.wikipedia.org/wiki/Nikola_Tesla" }],
        11: [{ name: "Milly Koss", year: 1928, source: "https://en.wikipedia.org/wiki/Milly_Koss" }],
        15: [{ name: "Almira Hart Lincoln Phelps", year: 1793, source: "https://en.wikipedia.org/wiki/Almira_Hart_Lincoln_Phelps" }],
        21: [{ name: "Barbara J. Grosz", year: 1948, source: "https://en.wikipedia.org/wiki/Barbara_J._Grosz" }],
        25: [{ name: "Margaret Floy Washburn", year: 1871, source: "https://en.wikipedia.org/wiki/Margaret_Floy_Washburn" }],
        29: [{ name: "Susan Blackmore", year: 1951, source: "https://en.wikipedia.org/wiki/Susan_Blackmore" }],
    },
    // August
    7: {
        10: [{ name: "Frances Northcutt", year: 1943, source: "https://en.wikipedia.org/wiki/Frances_Northcutt" }],
        13: [{ name: "Frances Hardcastle", year: 1866, source: "https://en.wikipedia.org/wiki/Frances_Hardcastle" }],
        17: [{ name: "Ingrid Daubechies", year: 1954, source: "https://en.wikipedia.org/wiki/Ingrid_Daubechies" }
            ,{ name: "Margaret Hamilton", year: 1936, source: "https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)" }],
        18: [{ name: "Klara Dan von Neumann", year: 1911, source: "https://en.wikipedia.org/wiki/Klara_Dan_von_Neumann" }],
        19: [{ name: "Jane C. Loudon", year: 1807, source: "https://en.wikipedia.org/wiki/Jane_C._Loudon" }],
        24: [{ name: "Karen Uhlenbeck", year: 1942, source: "https://en.wikipedia.org/wiki/Karen_Uhlenbeck" }],
        26: [{ name: "Karen Spärck Jones", year: 1935, source: "https://en.wikipedia.org/wiki/Karen_Sp%C3%A4rck_Jones" }],
        27: [{ name: "Margarete Kahn", year: 1880, source: "https://en.wikipedia.org/wiki/Margarete_Kahn" }],
    },
    // September
    8: {
        12: [{ name: "Dorothy Maud Wrinch", year: 1894, source: "https://en.wikipedia.org/wiki/Dorothy_Maud_Wrinch" }],
        20: [{ name: "Vera Faddeeva", year: 1906, source: "https://en.wikipedia.org/wiki/Vera_Faddeeva" }
            ,{ name: "Dorothy Vaughan", year: 1910, source: "https://en.wikipedia.org/wiki/Dorothy_Vaughan" }],
        23: [{ name: "Emily Warren Roebling", year: 1843, source: "https://en.wikipedia.org/wiki/Emily_Warren_Roebling" }],
    },
    // October
    9: {
        22: [{ name: "Marguerite Lehr", year: 1898, source: "https://en.wikipedia.org/wiki/Marguerite_Lehr" }],
        29: [{ name: "Cicely Popplewell", year: 1920, source: "https://en.wikipedia.org/wiki/Cicely_Popplewell" }],
        30: [{ name: "Florence Yeldham", year: 1877, source: "https://en.wikipedia.org/wiki/Florence_Yeldham" }],
    },
    // November
    10: {
        7: [{ name: "Lise Meitner", year: 1878, source: "https://en.wikipedia.org/wiki/Lise_Meitner" }
            ,{ name: "Barbara Liskov", year: 1939, source: "https://en.wikipedia.org/wiki/Barbara_Liskov" }],
        // Wikipedia: "Josephine Silone's birth is given variously as 1852, and as November 15, 1859."
        15: [{ name: "Josephine Silone Yates", year: 1859, source: "https://en.wikipedia.org/wiki/Josephine_Silone_Yates" }],
        19: [{ name: "Tatyana Afanasyeva", year: 1876, source: "https://en.wikipedia.org/wiki/Tatyana_Afanasyeva" }],
    },
    // December
    11: {
        1: [{ name: "Christine Ladd-Franklin", year: 1847, source: "https://en.wikipedia.org/wiki/Christine_Ladd-Franklin" }],
        3: [{ name: "Anna Freud", year: 1895, source: "https://en.wikipedia.org/wiki/Anna_Freud" }],
        6: [{ name: "Deborah Estrin", year: 1959, source: "https://en.wikipedia.org/wiki/Deborah_Estrin" }],
        9: [{ name: "Grace Hopper", year: 1906, inventions: ["linkers", "COBOL"], source: "https://en.wikipedia.org/wiki/Grace_Hopper" }],
        10: [{ name: "Ada Lovelace", year: 1815, source: "https://en.wikipedia.org/wiki/Ada_Lovelace" }
            ,{ name: "Margaret Eliza Maltby", year: 1860, source: "https://en.wikipedia.org/wiki/Margaret_Eliza_Maltby" }],
        17: [{ name: "Mary Cartwright", year: 1900, source: "https://en.wikipedia.org/wiki/Mary_Cartwright" }],
        19: [{ name: "Mileva Marić", year: 1875, source: "https://en.wikipedia.org/wiki/Mileva_Mari%C4%87" }],
        26: [{ name: "Mary Somerville", year: 1780, source: "https://en.wikipedia.org/wiki/Mary_Somerville" }],
        28: [{ name: "Linus Torvalds", year: 1969, source: "https://en.wikipedia.org/wiki/Linus_Torvalds" }],
        30: [{ name: "Emilie Martin", year: 1869, source: "https://en.wikipedia.org/wiki/Emilie_Martin" }],
    }
};
