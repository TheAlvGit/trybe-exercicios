const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

console.log("1. Percorrendo o array:")
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index]
}
console.log("2. A soma é: " + soma);

let total = 0;
for (index = 0; index < numbers.length; index +=1) {
    total = total + numbers[index];
}

let media = total / numbers.length;
console.log("3. A media é: " + media);

if (media > 20) {
    console.log("O valor da media aritmetica é maior que 20");
} else {
    console.log("O valor da media aritmetica é menor ou igual a 20");
}

let maiorNum = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNum) {
        maiorNum = numbers[index];
    }
};

console.log("5. O maior numero é " + maiorNum);

let contadorImpar = 0;
for (let index = 0; index <numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        contadorImpar += 1;
    }
}
if (contadorImpar > 0) {
console.log("Total de numeros impares: " + contadorImpar);
} else {
    console.log("Nenhum valor impar encontrado");
}


console.log("Exercicio Fatorial");

let fatorial = 1;
for (index = 10; index > 0; index -=1) {
    fatorial = fatorial * index;
}

console.log(fatorial)

//------------------------

