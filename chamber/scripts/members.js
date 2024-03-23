const linksURL = "https://terdeck.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

const gridButton = document.getElementById("direct-grid");
const listButton = document.getElementById("direct-list");

gridButton.addEventListener("click", () =>{
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});


const displayMembers = (members) => {
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

        card.setAttribute("id", "bus-card");
        busName.textContent = `${member.name}`;
        busName.setAttribute("id", "bus-name")
        address.textContent = `📍 ${member.address}`;
        city.textContent = `${member.city}`;
        phone.textContent = `📞 ${member.phone}`;
        
        // website.textContent = `🌐 Website ${member.webURL}`;
        let websiteLink = document.createElement("a");
        websiteLink.href = member.webURL;
        websiteLink.textContent = "🌐 Website";
        websiteLink.setAttribute("target", "_blank");

        website.appendChild(websiteLink);

        membership.textContent = `⭐️ ${member.membership}`;
        logo.setAttribute("id", "logo-img");
        logo.setAttribute("src", member.imageURL);
        logo.setAttribute("alt", `Logo for ${member.name}`);
        logo.setAttribute("loading", "lazy");
        // logo.setAttribute("width", "200");
        // logo.setAttribute("height", "225");

        card.appendChild(logo);
        card.appendChild(pageBreak);
        card.appendChild(busName);
        card.appendChild(address);
        card.appendChild(city);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership); 
        
        cards.appendChild(card);
    });
}

async function getMemberInfo() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayMembers(data.businesses);
}

getMemberInfo();