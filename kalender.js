const kalender = document.fira.kalender;
const $fira = document.getElementById("fira-node");
let birthdayDates = 0;
let birthdays = 0;

Object.keys(kalender).forEach((month) => {
    const $monthHeader = document.createElement("h3");
    $monthHeader.innerText = (new Date(document.fika.year, month)).toLocaleDateString('sv-SE', { month: "long" })
    $fira.appendChild($monthHeader);

    const $month = document.createElement("ul");
    Object.keys(kalender[month]).forEach((date) => {
        birthdayDates++;
        kalender[month][date].forEach((firaDate) => {
            birthdays++;
            const $date = document.createElement("li");

            $date.innerHTML = `<a href="index.html?month=${month}&date=${date}">${date}</a>: `;
            $date.innerHTML += firaDate.source ? `<a href="${firaDate.source}">${firaDate.name}</a>` : firaDate.name;
            $month.appendChild($date);
        });
    });

    $fira.appendChild($month);
});

// Worth keeping track of how many days of the year there are birthdays
const $birthdays = document.createElement("p");
$birthdays.innerText = `${birthdayDates} dagar om året har vi ${birthdays} bra anledningar att äta tårta!`;
$fira.appendChild($birthdays);
