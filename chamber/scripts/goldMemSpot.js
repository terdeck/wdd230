// Chamber main pg - gold member spotlight

const linksURL = "https://terdeck.github.io/wdd230/chamber/data/memberHighlights.json";
const spotlights = document.getElementById("spotlight");

const displayMembers = (members) => {
    if (!members || members.length === 0){
        console.error("No member data available");
        return;
    }

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
    for (let i = 0; i < count && i < members.length; i++) {
        const randomIndex = Math.floor(Math.random() * members.length);
        randomMembers.push(members[randomIndex]);
    }
    return randomMembers;
}

async function getMemberInfo() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if(!data || !data.goldMembers) {
            throw new Error("Invalid data format: goldMembers property not found");
        }
        console.log(data);
        // console.log(data.goldMembers);
        displayMembers(data.goldMembers);
    } catch (error) {
        console.error("Error fetching or displaying members:", error);
    }
}

getMemberInfo();