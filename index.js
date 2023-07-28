'use strict';

const maxNumberSlider = document.querySelector('#slider-max-number');
const sliderQuantity = document.querySelector('#slider-quantity');
const buttonSort = document.querySelector('#button-sort');
const buttonCopy = document.querySelector('#button-copy');
const maxNumber = document.querySelector('#max-number');
const quantity = document.querySelector('#quantity');

maxNumberSlider.oninput = function () {
	maxNumber.innerHTML = this.value;
};

sliderQuantity.oninput = function () {
	quantity.innerHTML = this.value;
};

function getRandomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}

function validateNumberOfNumbersToSort(max) {
	let numberOfNumbersToSort = Number(sliderQuantity.value);

	if (numberOfNumbersToSort > max) {
		alert(
			`O número de elementos a serem sorteados deve ser igual ou inferior a ${max}.`
		);
		buttonCopy.classList.add('hide');
		return;
	}

	buttonCopy.classList.remove('hide');
	return numberOfNumbersToSort;
}

function generateUniqueRandomNumbers() {
	let sortedNumbers = new Set();
	let maxNumber = Number(maxNumberSlider.value);
	let numberOfNumbersToSort = validateNumberOfNumbersToSort(maxNumber);

	while (sortedNumbers.size < numberOfNumbersToSort) {
		let sortedNumber = getRandomInt(maxNumber);
		sortedNumbers.add(sortedNumber);
	}

	let sortedNumbersArray = Array.from(sortedNumbers);
	return sortedNumbersArray;
}

function displaySortedNumbers(array) {
	let containerSortedNumbersElement = document.querySelector(
		'.container-sorted-numbers'
	);

	containerSortedNumbersElement.innerHTML = array
		.map(
			(sortedNumber) =>
				`<span class="sorted-number">${sortedNumber}</span>`
		)
		.join('');
}

let sortedNumbersArray;

buttonSort.addEventListener('click', () => {
	sortedNumbersArray = generateUniqueRandomNumbers();
	displaySortedNumbers(sortedNumbersArray);
});

buttonCopy.addEventListener('click', () => {
	let textToCopy = sortedNumbersArray.join(' ');
	let textArea = document.createElement('textarea');
	textArea.value = textToCopy;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	document.body.removeChild(textArea);

	alert(
		'Números copiados com sucesso! Agora você pode colá-los onde desejar.'
	);
});
