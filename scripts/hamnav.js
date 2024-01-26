// main hamnav

const navigation = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	navigation.classlist.toggle('show');
	hamButton.classList.toggle('open');
});