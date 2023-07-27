'use strict';

let sliderMaxNumberElement = document.querySelector('#slider-max-number');
let sliderQuantityElement = document.querySelector('#slider-quantity');
let buttonElement = document.querySelector('#button');

let maxNumberSpan = document.querySelector('#max-number');
let quantitySpan = document.querySelector('#quantity');

sliderMaxNumberElement.oninput = function () {
	maxNumberSpan.innerHTML = this.value;
};

sliderQuantityElement.oninput = function () {
	quantitySpan.innerHTML = this.value;
};

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkNumberOfNumbersToSort(min, max) {
	let numberOfNumbersToSort;

	do {
		numberOfNumbersToSort = sliderQuantityElement.value;

		if (numberOfNumbersToSort > max - min) {
			alert(
				'A quantidade de números deve ser menor ou igual à diferença entre o máximo e o mínimo'
			);
		}
	} while (numberOfNumbersToSort > max - min);

	return numberOfNumbersToSort;
}

function sortNumbers() {
	let sortedNumbers = [];

	let min = 1;
	let max = sliderMaxNumberElement.value;

	let numberOfNumbersToSort = sliderQuantityElement.value;

	if (numberOfNumbersToSort > max - min + 1) {
		alert(
			'A quantidade de números deve ser menor ou igual à diferença entre o máximo e o mínimo'
		);
		return;
	}

	for (let i = 0; i < numberOfNumbersToSort; i++) {
		let sortedNumber = getRandomInt(min, max);
		let numberAlredyExists = sortedNumbers.some(
			(number) => number === sortedNumber
		);
		if (numberAlredyExists) {
			i -= 1;
		} else {
			sortedNumbers.push(sortedNumber);
		}
	}

	let containerSortedNumbersElement = document.querySelector(
		'.container-sorted-numbers'
	);

	containerSortedNumbersElement.innerHTML = sortedNumbers
		.map(
			(sortedNumber) =>
			'<span class="sorted-number">' + sortedNumber + '</span>'
		)
		.join('');
}
