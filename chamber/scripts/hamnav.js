// chamber hamnav

const navigation = document.querySelector(nav);
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});