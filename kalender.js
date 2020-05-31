const today = new Date();

const fira = document.fira.kalender;
const $fira = document.getElementById("fira-node");
let birthdayDates = 0;
let birthdays = 0;

Object.keys(fira).forEach((month) => {
    const $monthHeader = document.createElement("h3");
    $monthHeader.innerText = (new Date(today.getFullYear(), month)).toLocaleDateString('sv-SE', { month: "long" })
    $fira.appendChild($monthHeader);

    const $month = document.createElement("ul");
    Object.keys(fira[month]).forEach((date) => {
        birthdayDates++;
        fira[month][date].forEach((firaDate) => {
            birthdays++;
            const $date = document.createElement("li");

            $date.innerHTML = `${date}: `;
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
