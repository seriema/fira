const today = new Date();
const month = today.getMonth();
const date = today.getDate();

const firaDate = document.fira.kalender[month][date];

const $fira = document.getElementById("fira-node");

// Celebrate someone's birthday
if (firaDate) {
    // Pick the first birthday person for now
    const fira = firaDate[0];

    $fira.innerHTML = `<h3>${fira.name}</h3>`;

    // Try to get a picture of the birthday person :)
    const imageHeight = 300;
    const wikimediaUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${fira.name}&prop=pageimages&format=json&pithumbsize=${imageHeight}`;

    fetch(wikimediaUrl, { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            const pageKeys = Object.keys(data.query.pages);
            const imageUrl = data.query.pages[pageKeys[0]].thumbnail.source;
            $fira.innerHTML += `<img src="${imageUrl}" />`
        });
}
// Fall back to celebrate yourself <3
else {
    $fira.innerHTML = "<h3>dig själv!</h3>";
}
