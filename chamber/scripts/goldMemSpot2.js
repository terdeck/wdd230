// Chamber main pg - gold member spotlight

const linksURL = "https://terdeck.github.io/wdd230/chamber/data/memberHighlights.json";
const spotlights = document.getElementById("spotlight");

const displayMembers = (members) => {
    members.forEach((member) =>{
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

async function getMemberInfo() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    const members = data.goldMembers;
    console.log(members);
    displayMembers(members);
}

getMemberInfo();