'use strict';

function getRandomInt(min, max) {
	min = Math.ceil(min); // Arredonda para cima
	max = Math.floor(max); //Aredonda para baixo
	return Math.floor(Math.random() * (max - min)) + min;
}

function getNumberFromUser(text) {
	let value;
	do {
		value = parseFloat(prompt(`Digite o número ${text}:`));
	} while (isNaN(value));
	return value;
}

function checkOrder(min, max) {
	if (min > max) {
		alert(
			'Ops, parece que você inverteu a ordem entre o mínimo e o máximo, portanto, corrigimos para você!'
		);
		let aux = min;
		min = max;
		max = aux;
	}

	return [min, max];
}

function checkNumberOfNumbersToSort(min, max) {
	let numberOfNumbersToSort;

	do {
		numberOfNumbersToSort = parseInt(
			prompt('Quantos números você quer sortear?')
		);

		if (numberOfNumbersToSort >= max - min) {
			alert(
				'A quantidade de números deve ser menor ou igual à diferença entre o máximo e o mínimo'
			);
		}
	} while (numberOfNumbersToSort >= max - min);

	return numberOfNumbersToSort;
}

function sortNumbers() {
	let min = getNumberFromUser('mínimo');
	let max = getNumberFromUser('máximo');
	let sortedNumbers = [];

	let checkedValues = checkOrder(min, max);
	min = checkedValues[0];
	max = checkedValues[1];

	let numberOfNumbersToSort = checkNumberOfNumbersToSort(min, max);

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

	return sortedNumbers;
}

alert(sortNumbers());

// Anotações
// Math.ceil sempre arredonda para cima, Math.floor sempre arredonda para baixo e Math.round arredonda para cima se a parte fracionária for maior ou igual a 5, caso contrário, arredonda para baixo.

// A lógica por trás da função getRandomInt() é que, ao multiplicar Math.random(), que gera um número aleatório entre 0 e 1, pelo intervalo entre min e max, estamos escalonando o número aleatório gerado para estar dentro desse intervalo. Ao adicionar o valor de min ao resultado, estamos deslocando o número gerado para começar em min em vez de 0.
