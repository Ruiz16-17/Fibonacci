function fibonacci(limite){

    let numeros=[0,1];

    for (let index = 2; index <= limite; index++) {
        
        numeros[index] = numeros[index - 1] + numeros[index - 2];
    }

    return numeros;
}

console.log(fibonacci(13));