console.log("Exercicio 1");

let num1 = 5;
let num2 = 8;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log("Exercicio 2");

let numberX = 10;
let numberY = 25;

if (numberX > numberY) {
	console.log(numberX)
} else if (numberY > numberX) {
	console.log(numberY)
} else {
	console.log("Números são iguais");
}

console.log("Exercicio 3");

let n1 = 22;
let n2 = 41;
let n3 = 16;

if (n1 > n2 && n1 > n3) {
	console.log(n1 + " é o maior número");
} else if (n2 > n1 && n2 > n3) {
	console.log(n2 + " é o maior número");
} else if (n3 > n1 && n3 > n2) {
	console.log(n3 + " é o maior número");
} else {
	console.log("Há números iguais");
}

console.log("Exercicio 4");

let anguloA = 65;
let anguloB = 60;
let anguloC = 55;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
	console.log("Possui ângulo inválido");
} else if (anguloA + anguloB + anguloC === 180) {
	console.log("É um triângulo");
} else if (anguloA + anguloB + anguloC !== 180) {
	console.log("Não é um triângulo");
}

console.log("Exercicio 5");

let peca = "rei";

switch (peca.toLowerCase()) {
	case 'peão':
		console.log("Movimentos simples de uma casa");
		break;
	case 'cavalo':
		console.log("Movimento em L");
		break;
	case 'torre':
		console.log("Movimentos verticais e horizontais");
		break;
	case 'bispo':
		console.log("Movimentos diagonais");
		break;
	case 'rainha':
		console.log("Movimentos livres");
		break;
	case 'rei':
		console.log("Movimento de uma unica casa em uma direção");
		break;
	default:
		console.log("Peça inválida");
}

console.log("Exercicio 6");

let abc = 81;
let xzy = 11;
let qwe = 12;

let isEven = false;

if (abc % 2 === 0 || xzy % 2 === 0 || qwe % 2 === 0) {
	isEven = true;
};

console.log(isEven);

console.log("Exercicio 7");

let salario = 2300;
let impostoDeRenda;
let inss;
let salarioBase;

if (salario <= 1556.94) {
	salarioBase = salario - (salario * 0.08);
} else if (salario >= 1556.95 && salario <= 2594.92) {
	salarioBase = salario - (salario * 0.09);
} else if (salario >= 2594.93 && salario <= 5189.82) {
	salarioBase = salario - (salario * 0.11);
} else if (salario > 5189.82) {
	salarioBase = salario - 570.88;
} else {
	console.log("Salario Invalido");
};

let salarioLiquido;
console.log("Salario Base: " + salarioBase);

salarioBase = 2670;

if (salarioBase <= 1903.98) {
	salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
	salarioLiquido = salarioBase - (salarioBase * 0.075 - 142.80);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
	salarioLiquido = salarioBase - (salarioBase * 0.15 - 354.80);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
	salarioLiquido = salarioBase - (salarioBase * 0.225 - 636.13);
} else {
	salarioLiquido = salarioBase - (salarioBase * 0.275 - 869.36);
};

console.log("Salario Liquido: " + salarioLiquido);