//Reformule a solução da "Atividade 08 - Funções" do módulo "Lógica de Programação", inicialmente
//implementada em JavaScript, para utilizar a linguagem TypeScript. Reescreva o código da solução,
//garantindo a correta aplicação dos conceitos e fundamentos do TypeScript.

//OBS.:
//Quando uma função não possui um tipo de retorno especificado, seu tipo de retorno é implicitamente definido como void, o que significa que a função não retorna um valor específico.
//A escolha entre uma função com retorno explícito (number) e uma função sem retorno explícito (void) depende das necessidades do programa. Se você precisar 
//apenas exibir o resultado, a primeira abordagem é suficiente. Se você precisa usar o resultado em cálculos posteriores, a segunda abordagem é mais apropriada.

// 1. Implemente o código do slide de número 6.
console.log("Estudar é muito bom.");
console.log("Paciência e persistência.");
console.log("Revisão é a mãe do aprendizado.");

console.log("Estudar é muito bom.");
console.log("Paciência e persistência.");
console.log("Revisão é a mãe do aprendizado.");

console.log("Estudar é muito bom.");
console.log("Paciência e persistência.");
console.log("Revisão é a mãe do aprendizado.");

// 2. Implemente o código do slide de número 15.

function criarFrases() {
  console.log("Estudar é muito bom.");
  console.log("Paciência e persistência.");
  console.log("Revisão é a mãe do aprendizado.");
}

criarFrases();
criarFrases();
criarFrases();

// 3. Implemente o código do slide de número 24.

function soma(num1: number, num2: number) {
  console.log(num1 + num2);
}

soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);

// 4. Implemente o código do slide de número 33.

function soma(num1: number, num2: number): number {
  return num1 + num2;
}

let teste1 = soma(10, 15);
console.log(teste1);

let teste2 = soma(10, 20) + soma(30, 50);
console.log(teste2);

console.log(soma(50, 50));

// 5. Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.
const soma2 = (a: number, b: number): void => console.log(a + b);
soma2(2, 8);

// 6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true" se o número for par ou "false" caso contrário.
const isPar = (num: number): boolean => {
  return num % 2 === 0;
};

const num2 = parseInt(prompt("Digite um número inteiro:"));
alert(isPar(num2);

// 7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média aritmética delas.
const media = (nota1: number, nota2: number, nota3: number): number => {
  return (nota1 + nota2 + nota3) / 3;
};

let notas = 0;
let arr: number[] = [];

for (let i = 1; i <= 3; i++) {
  notas = parseFloat(prompt(`Digite a ${i}ª nota:`));
  arr.push(notas);
}

const resultadoMedia = media(arr[0], arr[1], arr[2]).toFixed(2);
alert(`A média aritmética das notas é: ${resultadoMedia}`);

// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma pessoa e retorne o índice de massa corporal (IMC) dela.
const imc = (a: number, b: number): number => a / (b * b);
const weight = parseFloat(prompt("Digite seu peso em kg:"));
const height = parseFloat(prompt("Digite sua altura em m:"));
alert(`Seu IMC é: ${imc(weight, height).toFixed(2)}`);

// 9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.
const calcularDesconto = (a: number, b: number): number => {
  return a - a * (b / 100);
};

const productValue = parseFloat(prompt("Digite o valor do produto:"));
const discountPercentage = parseFloat(prompt("Informe o desconto em porcentagem:"));

alert(
  `O preço com o desconto aplicado é: R$ ${calcularDesconto(
    productValue,
    discountPercentage
  )}`
);

/* 10. Elabore uma função chamada "calcularImpostoRenda" que recebe o salário bruto de uma pessoa como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes faixas de renda:
  a. Até R$ 1.903,98: isento
  b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
  c. De R$ 2.826,66 até R$ 3.751,05: alíquota de 15%
  d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
  e. Acima de R$ 4.664,68: alíquota de 27,5% */

const calcularImpostoRenda = (salarioBruto: number): number => {
  let imposto = 0;

  if (salarioBruto <= 1903.98) {
    imposto = 0;
  } else if (salarioBruto > 1903.99 && salarioBruto <= 2826.65) {
    imposto = salarioBruto * (7.5 / 100);
  } else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
    imposto = salarioBruto * (15 / 100);
  } else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
    imposto = salarioBruto * (22.5 / 100);
  } else {
    imposto = salarioBruto * (27.5 / 100);
  }

  return imposto;
}

const salarioBruto = parseFloat(prompt("Informe o valor do seu salário (substitua a vírgula por ponto):"))
const calcularImposto = calcularImpostoRenda(salarioBruto);
alert(`Para um salário de R$ ${salarioBruto}, o imposto de renda a pagar é de R$ ${calcularImposto.toFixed(2)}`);

// 11. Calcular Média Arredondada
const calcularMediaArredondada = (numberList: string) => {
  let sum = 0;

  const splittedNumber = numberList.split("");

  for (let i = 0; i < splittedNumber.length; i++) {
    const numberToInt = parseInt(splittedNumber[i]);
    sum += numberToInt;
  }
  const average = sum / splittedNumber.length;
  alert(`Média dos números: ${average}`);
}

const numberList = prompt("Digite uma sequência de números:");
calcularMediaArredondada(numberList);

// 12. Contar Dígitos Pares e Ímpares
function contarDigitosParesImpares(intNumber: string) {
  let evenCounter = 0;
  let oddCounter = 0;

  const splittedNumber2 = intNumber.split("");

  for (let i = 0; i < splittedNumber2.length; i++) {
    const numberToInt2 = parseInt(splittedNumber2[i]);

    if (numberToInt2 % 2 === 0) {
      evenCounter++;
    } else {
      oddCounter++;
    }
  }

  alert(`Quantidade de dígitos pares: ${evenCounter}
Quantidade de dígitos ímpares: ${oddCounter}`);
}

const intNumber = prompt("Digite um número inteiro com mais de 1 dígito:");
contarDigitosParesImpares(intNumber);


// 13. Calcular Média de Alunos
function calcularMediaAlunos(): void {
  const studentList: { Estudante: string; nota: number }[] = [];
  let studentName: string = "";
  let gradeSum: number = 0;
  let studentAverage: number = -1;

  do {
    studentName = prompt("Digite o nome do(a) aluno(a) (ou pressione Enter para encerrar):");

    if (studentName !== "") {
      const studentGrade: number = parseFloat(prompt(`Digite a nota do(a) aluno(a) ${studentName}:`));

      if (studentGrade >= 0) {
        studentList.push({ Estudante: studentName, nota: studentGrade });
      } else {
        alert("Nota inválida. Digite um número válido.");
      }
    }

  } while (studentName !== "");

  console.log(studentList);

  for (const student of studentList) {
    gradeSum += student.nota;
  }

  studentAverage = gradeSum / studentList.length;

  console.log(`Média de todos os alunos: ${studentAverage}.`);
}

calcularMediaAlunos();


// 14. Calcular Idade
function calcularIdade(personBirthYear: number): void {
  const currentYear = new Date().getFullYear();
  const personAge = currentYear - personBirthYear;
  alert(`Você tem ou irá completar ${personAge} anos!`);
}

const personBirthYear = parseInt(prompt("Digite o ano do seu nascimento:"));
calcularIdade(personBirthYear);

// 15. Gerar Tabuada
const gerarTabuada = (num3: number): void => {
  console.log(`Tabuada do ${num3}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num3} x ${i} = ${num3 * i}`);
  }
}

const num3 = parseInt(prompt("Digite um número para o qual deseja saber a tabuada:"));
gerarTabuada(num3);

// 16. Adivinhe o Número
const advinheNumero = () => {
  const correctNumber = Math.floor(Math.random() * 100);
  let attempts = 0;

  while (true) {
    let attempt = parseInt(prompt("Digite um número inteiro entre 1 - 100:"));

    if (isNaN(attempt)) {
      alert(`Insira um número válido!`);
    } else {
      attempts++;
    }

    if (attempt === correctNumber) {
      alert(`Parabéns, você adivinhou o número ${correctNumber} com ${attempts} tentativas!`);
      break;
    } else if (attempt < correctNumber) {
      alert("O número correto é maior, tente novamente!");
    } else {
      alert("O número correto é menor, tente novamente!");
    }
  }
}

advinheNumero();

// 17. Verificar Propriedade
const verificarPropriedade = (object: any, property: string): boolean => {
  return object[property] !== undefined;
}

const objeto = { nome: "João", idade: 30, cidade: "São Paulo" };
const property = prompt("Digite uma propriedade do objeto:");
alert(verificarPropriedade(objeto, property);

// 18. Calcular Preço do Produto
const calcularPrecoProduto = (valorCusto: number, margemLucro: number, valorFrete: number): void => {
  const precoVenda = valorCusto + (valorCusto * (margemLucro / 100)) + valorFrete;
  alert(`O preço de venda do produto é R$ ${precoVenda}.`);
}

const valorCusto = parseFloat(prompt("Digite o valor de custo do produto:"));
const margemLucro = parseFloat(prompt("Digite a margem de lucro em porcentagem:"));
const valorFrete = parseFloat(prompt("Digite o valor do frete do produto:"));
calcularPrecoProduto(valorCusto, margemLucro, valorFrete);

// 19. Encontrar a Maior Palavra em uma Frase
const largestWord = (string2: string): string => {
  const splittedString = string2.split(" ");
  let largest = "";
  for (const word of splittedString) {
    if (word.length > largest.length) {
      largest = word;
    }
  }
  return largest;
}

const string2 = prompt("Digite uma frase:");
alert(`A maior palavra da frase é: ${largestWord(string2)}.`);

// 20. Imprimir em um Quadro
const imprimirQuadro = (lista: string[]): void => {
  let longestWordLength = 0;
  for (const word of lista) {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }

  const horizontalBorder = "*".repeat(longestWordLength + 4);

  console.log(horizontalBorder);

  for (const word of lista) {
    const padding = " ".repeat(longestWordLength - word.length);
    console.log(`* ${word}${padding} *`);
  }

  console.log(horizontalBorder);
}

const lista = ["paralelepipedo", "circulo", "retângulo", "pirâmide"];
imprimirQuadro(lista);

// 21. Filtrar Palavras com Mais de 5 Caracteres
const getArray = (words: string): string[] => {
  const splittedString2 = words.split(" ");
  return splittedString2.filter((word) => word.length > 5);
}

const words = prompt("Digite uma sequência de palavras:");
alert(`Palavras com mais de 5 caracteres: ${getArray(words)}`);

// 22. Filtrar Livros por Autor
const getObject = (livros: any[], autorPesquisa: string): any[] => {
  return livros.filter((livro) => livro.autor === autorPesquisa);
}

const livros = [
  { titulo: "Livro A", autor: "Autor 1", ano: 2023 },
  { titulo: "Livro B", autor: "Autor 2", ano: 2022 },
  { titulo: "Livro C", autor: "Autor 1", ano: 2021 },
  { titulo: "Livro D", autor: "Autor 3", ano: 2020 },
  { titulo: "Livro E", autor: "Autor 2", ano: 2019 },
];

const autorPesquisa = prompt("Digite o autor que deseja ver os livros (Autor 1, Autor 2 ou Autor 3):")
console.log(getObject(livros, autorPesquisa));

// 23. Encontrar a Pessoa Mais Velha
const getObject2 = (pessoas: any[]): string => {
  let oldestPerson = Number.MIN_SAFE_INTEGER;
  let oldestPersonName = "";

  for (const pessoa of pessoas) {
    if (pessoa.idade > oldestPerson) {
      oldestPerson = pessoa.idade;
      oldestPersonName = pessoa.nome;
    }
  }
  return oldestPersonName;
}

const pessoas = [
  { nome: "Alice", idade: 25, cidade: "São Paulo" },
  { nome: "Bruno", idade: 32, cidade: "Rio de Janeiro" },
  { nome: "Carla", idade: 28, cidade: "Belo Horizonte" },
  { nome: "Daniel", idade: 40, cidade: "Porto Alegre" },
  { nome: "Elena", idade: 22, cidade: "Recife" }
];

console.log(getObject2(pessoas));

// 24. Filtrar Carros por Ano
const getObject3 = (cars: any[]): any[] => {
  const specificYear = 2015;
  return cars.filter((car) => car.ano > specificYear);
}

const cars = [
  { marca: "Toyota", modelo: "Corolla", ano: 2015 },
  { marca: "Honda", modelo: "Civic", ano: 2018 },
  { marca: "Volkswagen", modelo: "Golf", ano: 2014 },
  { marca: "Ford", modelo: "Focus", ano: 2012 },
  { marca: "Chevrolet", modelo: "Cruze", ano: 2017 }
];

console.log(getObject3(cars));

// 25. Inverter uma String
const inverterString = (string3: string): string => {
  return string3.split("").reverse().join("");
}

const string3 = prompt("Digite uma palavra:");
alert(`A palavra invertida é: ${inverterString(string3)}`);

