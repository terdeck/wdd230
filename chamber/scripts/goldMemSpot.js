// Chamber main pg - gold member spotlight

const linksURL = "https://terdeck.github.io/wdd230/chamber/data/memberHighlights.json";
const spotlights = document.getElementById("spotlight");

const displayMembers = (members) => {
    members = shuffleArray(members);

    const randomMembers = selectRandom(members, 2);

    randomMembers.forEach((member) =>{
        let spotlight = document.createElement("section");
        let logo = document.createElement("img");
        let blurb = document.createElement("p");

        logo.setAttribute("class", "ads");
        logo.setAttribute("src", member.imageURL);
        logo.setAttribute("alt", `Logo for ${member.name}`);
        logo.setAttribute("loading", "lazy");
        blurb.setAttribute("class", "ad-msg");
        blurb.textContent = `${member.blurb}`;

        spotlight.appendChild(logo);
        spotlight.appendChild(blurb);

        spotlights.appendChild(spotlight);
    });
}

function shuffleArray(members){
    for (let i = members.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [members[i], members[j]] = [members[j], members[i]];
    }
    return members;
}

function selectRandom(members, count) {
    const randomMembers = [];
    const remainingMembers = [...members];
    for (let i = 0; i < count && i < members.length; i++) {
        const randomIndex = Math.floor(Math.random() * remainingMembers.length);
        const selectedMember = remainingMembers.splice(randomIndex, 1)[0];
        randomMembers.push(members[randomIndex]);
    }
    return randomMembers;
}

async function getMemberInfo() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    const members = data.goldMembers;
    console.log(members);
    displayMembers(members);
}

getMemberInfo();