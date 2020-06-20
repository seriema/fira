const year = document.fika.year;
const month = document.fika.month;
const date = document.fika.date;

const firaDate = document.fira.kalender[month][date];

const $fira = document.getElementById("fira-node");

// Celebrate someone's birthday
if (firaDate) {
    // Pick a random birthday person
    const fira = firaDate[Math.floor(Math.random() * firaDate.length)];

    $fira.innerHTML = `<h3>${fira.name}</h3>`;

    // If available, show how long ago the person was born
    if (fira.year) {
        $fira.innerHTML += `<p>som föddes för ${year - fira.year} år sedan!</p>`;
    }

    // Use a hand picked image
    if (fira.image) {
        $fira.innerHTML += `<img src="${fira.image}" />`
    }
    // Otherwise, feel lucky with Wikipedia
    else {
        // Try to get a picture of the birthday person :)
        const wikipediaTitle = fira.source.replace("https://en.wikipedia.org/wiki/", "") || fira.name;

        const imageHeight = 300;
        const wikimediaUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${wikipediaTitle}&prop=pageimages&format=json&pithumbsize=${imageHeight}`;
        fetch(wikimediaUrl, { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
                const pageKeys = Object.keys(data.query.pages);
                const page = data.query.pages[pageKeys[0]];
                if (!page.thumbnail || !page.thumbnail.source) {
                    return;
                }
                $fira.innerHTML += `<img src="${page.thumbnail.source}" />`
            });
    }
}
// Fall back to celebrate yourself <3
else {
    $fira.innerHTML = "<h3>dig själv!</h3>";
}
