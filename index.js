const today = new Date();
const month = today.getMonth();
const date = today.getDate();

const firaDate = document.fira.kalender[month][date];

const $fira = document.getElementById("fira-node");

$fira.innerHTML = firaDate ? `<h3>${firaDate[0].name}</h3>` : "<h3>dig själv!</h3>";
