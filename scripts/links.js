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
        let list = document.createElement("ul");

        list.innerHTML = `<h4><b>Lesson ${week.lesson}: </b></h4>`;
        
        week.links.forEach(link => {
            const listItem = document.createElement("ul");
            const linkElement = document.createElement("a");
            linkElement.href = link.url;
            linkElement.textContent = link.title;

            linkElement.setAttribute("target", "_blank");

            listItem.appendChild(linkElement);
            list.appendChild(listItem);
        });

        learn.appendChild(list);

        document.getElementById("learn").appendChild(learn);
    });
}

getLinks();