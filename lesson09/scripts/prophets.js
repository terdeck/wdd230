const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"
const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let info = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        info.innerHTML = `<p>Date of Birth: ${prophet.birthdate}</p>
        <p>Place of Birth: ${prophet.birthplace}</p>`;
        console.log(prophet.imageurl)
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "151");
        portrait.setAttribute("height", "187");
        
        card.appendChild(fullName);
        card.appendChild(info);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets); 
    // ^ we reference the prophets array of the JSON data object, not just the object
}

getProphetData();