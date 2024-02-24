// chamber hamnav

const navigation = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("discover-main").style.marginLeft = "250px";
  }
  
function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("discover-main").style.marginLeft= "0";
  }