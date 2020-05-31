const today = new Date();

const fira = document.fira.kalender;
const $fira = document.getElementById("fira-node");

Object.keys(fira).forEach((month) => {
    const $monthHeader = document.createElement("h3");
    $monthHeader.innerText = (new Date(today.getFullYear(), month)).toLocaleDateString('sv-SE', { month: "long" })
    $fira.appendChild($monthHeader);

    const $month = document.createElement("ul");
    Object.keys(fira[month]).forEach((date) => {
        fira[month][date].forEach((firaDate) => {
            const $date = document.createElement("li");

            $date.innerHTML = `${date}: `;
            $date.innerHTML += firaDate.source ? `<a href="${firaDate.source}">${firaDate.name}</a>` : firaDate.name;
            $month.appendChild($date);
        });
    });

    $fira.appendChild($month);
});
