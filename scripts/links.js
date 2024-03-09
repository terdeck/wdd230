const baseURL = "https://github.com/terdeck/wdd230";
const linksURL = "https://terdeck.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        let learn = document.createElement("section");
        // let title = document.createElement("h3");
        let list = document.createElement("ul");
        // let assignments = document.createElement("li");

        // title.innerHTML = "<h3>Learning Activities</h3>";
        // title.textContent = "Learning Activities";
        list.textContent = "";
        
        // assignments.forEach(link => {
        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const linkElement = document.createElement("a");
            linkElement.href = link.url;
            linkElement.textContent = link.title;

            // assignment.appendChild(linkElement);
            listItem.appendChild(linkElement);
            list.appendChild(listItem);
        });
        // assignments.textContent = `${week.lesson}: ${week.links}`;

        // learn.appendChild(title);
        learn.appendChild(list);
        // learn.appendChild(assignments);

        // learns.appendChild(learn);

        document.getElementById("learn").appendChild(learn);
    });
}

getLinks();