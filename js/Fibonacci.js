function fibonacci(){
    var valorImput = document.getElementById('txtLimiteSerie').value;
    var numeros = [];
    valorImput = parseInt(valorImput);
    for (index = 0; index <= valorImput; index++ ){
        if (index == 0) {
            numeros.push(0);
        }else if (index==1) {
            numeros.push(1);
        } else {
            numeros.push(numeros[index-1]+numeros[index-2]);
        }
    }
    document.getElementById("resultado").innerHTML = "<label>"+numeros+"</label>";
}