const linksURL = "https://terdeck.github.io/wdd230/scoots/data/prices.json";
const prices = document.querySelector("#pricing-table");

async function getPrices(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.prices);
} 

const priceTable = (prices) => {
    // let table = document.createElement("table");
    // let tableTitle = document.createElement("thead");

    // let titleRow1 = document.createElement("tr");
    // let titleRow2 = document.createElement("tr");
    // let titleRow3 = document.createElement("tr");

    // let tableHeading1 = document.createElement("th");
    // let tableHeading2 = document.createElement("th");
    // let tableHeading3 = document.createElement("th");
    // let tableHeading4 = document.createElement("th");
    // let tableHeading5 = document.createElement("th");
    // let tableHeading6 = document.createElement("th");
    // let tableHeading7 = document.createElement("th");
    // let tableHeading8 = document.createElement("th");
    // let tableHeading9 = document.createElement("th");
    // let tableHeading10 = document.createElement("th");

    // let tableBody = document.createElement("tbody");

    // let tableRow1 = document.createElement("tr");
    // let tableRow2 = document.createElement("tr");
    // let tableRow3 = document.createElement("tr");
    // let tableRow4 = document.createElement("tr");
    // let tableRow5 = document.createElement("tr");
    // let tableRow6 = document.createElement("tr");

    // let tableData1 = document.createElement("td");
    // let tableData2 = document.createElement("td");
    // let tableData3 = document.createElement("td");
    // let tableData4 = document.createElement("td");
    // let tableData5 = document.createElement("td");
    // let tableData6 = document.createElement("td");
    // let tableData7 = document.createElement("td");
    // let tableData8 = document.createElement("td");
    // let tableData9 = document.createElement("td");
    // let tableData10 = document.createElement("td");
    // let tableData11 = document.createElement("td");
    // let tableData12 = document.createElement("td");
    // let tableData13 = document.createElement("td");
    // let tableData14 = document.createElement("td");
    // let tableData15 = document.createElement("td");
    // let tableData16 = document.createElement("td");
    // let tableData17 = document.createElement("td");
    // let tableData18 = document.createElement("td");
    // let tableData19 = document.createElement("td");
    // let tableData20 = document.createElement("td");
    // let tableData21 = document.createElement("td");
    // let tableData22 = document.createElement("td");
    // let tableData23 = document.createElement("td");
    // let tableData24 = document.createElement("td");
    // let tableData25 = document.createElement("td");
    // let tableData26 = document.createElement("td");
    // let tableData27 = document.createElement("td");
    // let tableData28 = document.createElement("td");
    // let tableData29 = document.createElement("td");
    // let tableData30 = document.createElement("td");
    // let tableData31 = document.createElement("td");
    // let tableData32 = document.createElement("td");
    // let tableData33 = document.createElement("td");
    // let tableData34 = document.createElement("td");
    // let tableData35 = document.createElement("td");
    // let tableData36 = document.createElement("td");

    prices.forEach((price) => {
        let model = document.createElement();
        let maxOccupants = document.createElement();
        let reserveHalf = document.createElement();
        let reserveFull = document.createElement();
        let walkHalf = document.createElement();
        let walkFull = document.createElement();




    }),
}

getPrices();