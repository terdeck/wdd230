const baseURL = "https://github.com/terdeck/wdd230";
const linksURL = "https://github.com/terdeck/wdd230/chamber/data/members.json"
const cards = document.querySelector("#members");

const dipslayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let pageBreak = document.createElement("hr");
        let busName = document.createElement("h3");
        let address = document.createElement("p");
        let city = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let membership = document.createElement("h4");

        busName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        city.textContent = `${member.city}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.webURL}`;
        membership.textContent = `${member.membership}`;

        logo.setAttribute("src", member.imageURL);
        logo.setAttribute("alt", `Logo for ${member.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        logo.setAttribute("height", "225");

        card.appendChild(logo);
        card.appendChild(pageBreak);
        card.appendChild(busName);
        card.appendChild(address);
        card.appendChild(city);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);       
    });
}

async function getMemberInfo() {
    const response = await fetch(baseURL);
    const data = await response.json();
    dipslayMembers(data.members);
}

getMemberInfo();