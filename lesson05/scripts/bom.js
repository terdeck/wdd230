const input = document.querySelector('#favChap');
const button = document.querySelector('button');
const list = document.querySelector("#list");

button.addEventListener('click', () => {
   if (input.value.trim() != "") {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.style.marginLeft = '25px';
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    }
   else {
    alert('Please enter a value')
    input.focus();
   }
});
