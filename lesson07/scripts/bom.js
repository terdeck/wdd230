// lesson 7 BOM app

const input = document.querySelector('#favChap');
const button = document.querySelector('button');
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌"
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("favBOMList", JSON.stringify(chaptersArray));
}

function getChapterList(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener('click', () => {
   if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
   else {
    alert('Please enter a value')
    input.focus();
   }
});
