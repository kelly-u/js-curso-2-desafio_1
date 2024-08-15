// Criar uma função que exibe "Olá, mundo!" no console.
function boasVindas(){
    console.log("Olá, Mundo!");
}

boasVindas();

/***********************************************************/

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function pegarNome(nome){
    //value = serve para pegar o valor daquele input.
    console.log(`Olá, ${nome}`);
}

pegarNome("Kelly");

/***********************************************************/

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero) {
    console.log(numero * 2);
}

dobrarNumero(4);

/***********************************************************/

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(numero1, numero2, numero3){
    console.log((numero1 + numero2 + numero3) / 3);
}

calcularMedia(2, 4, 6);

/***********************************************************/

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero1, numero2){
    if(numero1 > numero2){
        console.log(numero1);
    }
    else{
        console.log(numero2);
    }
}

maiorNumero(3,7);
maiorNumero(8,3);

/***********************************************************/

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function exponenciacao(numero1){
    console.log(numero1 * numero1);
}

exponenciacao(4);
