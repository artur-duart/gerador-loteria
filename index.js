'use strict';

const maxNumberSlider = document.querySelector('#slider-max-number');
const sliderQuantity = document.querySelector('#slider-quantity');
const button = document.querySelector('#button');
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
			`A quantidade de números para sortear deve ser menor ou igual a ${max}`
		);
		return;
	}

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

button.addEventListener('click', () => {
	let sortedNumbersArray = generateUniqueRandomNumbers();
	displaySortedNumbers(sortedNumbersArray);
});
