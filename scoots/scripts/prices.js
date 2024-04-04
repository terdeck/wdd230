const linksURL = "https://terdeck.github.io/wdd230/scoots/data/prices.json";

async function getPrices(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    priceTable(data.prices);
} 

function priceTable(data) {
    const tableContainer = document.getElementById("table-container");
    const table = document.createElement("table");

    let tableTitle = table.insertRow();
    let title = document.createElement("th");
    title.textContent = "Rental Pricing";
    title.setAttribute("colspan", "6");
    title.setAttribute("scope", "colgroup");
    tableTitle.appendChild(title);
    
    let titleRow1 = table.insertRow();
    let tableHeading1 = document.createElement("th");
    tableHeading1.textContent = "&nbsp";
    const tableHeading2 = document.createElement("th");
    tableHeading2.textContent = "Reservation";
    const tableHeading3 = document.createElement("th");
    tableHeading3.textContent = "Walk-In";
    tableHeading1.setAttribute("colspan", "2");
    tableHeading1.setAttribute("scope", "colgroup");
    tableHeading2.setAttribute("colspan", "2");
    tableHeading2.setAttribute("scope", "colgroup");
    tableHeading3.setAttribute("colspan", "2");
    tableHeading3.setAttribute("scope", "colgroup");
    titleRow1.appendChild(tableHeading1);
    titleRow1.appendChild(tableHeading2);
    titleRow1.appendChild(tableHeading3);

    let titleRow2 = table.insertRow();
    let tableHeading4 = document.createElement("th");
    tableHeading4.textContent = "Rental Type";
    let tableHeading5 = document.createElement("th");
    tableHeading5.textContent = "Max Occupants";
    let tableHeading6 = document.createElement("th");
    tableHeading6.textContent = "Half Day";
    let tableHeading7 = document.createElement("th");
    tableHeading7.textContent = "Full Day";
    let tableHeading8 = document.createElement("th");
    tableHeading8.textContent = "Half Day";
    let tableHeading9 = document.createElement("th");
    tableHeading9.textContent = "Full Day";
    tableHeading4.setAttribute("scope", "col");
    tableHeading5.setAttribute("scope", "col");
    tableHeading6.setAttribute("scope", "col");
    tableHeading7.setAttribute("scope", "col");
    tableHeading8.setAttribute("scope", "col");
    tableHeading9.setAttribute("scope", "col");
    titleRow2.appendChild(tableHeading4);
    titleRow2.appendChild(tableHeading5);
    titleRow2.appendChild(tableHeading6);
    titleRow2.appendChild(tableHeading7);
    titleRow2.appendChild(tableHeading8);
    titleRow2.appendChild(tableHeading9);

    data.forEach(item => {
        const row = table.insertRow();
        for (const key in item)
    })
    
    tableContainer.appendChild(table);
}

getPrices();


// prices.forEach((price) => {
//     let model = document.createElement();
//     let maxOccupants = document.createElement();
//     let reserveHalf = document.createElement();
//     let reserveFull = document.createElement();
//     let walkHalf = document.createElement();
//     let walkFull = document.createElement();