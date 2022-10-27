function converter(x) {
  //Metodo para converter individualmente cada algarismo
  if (x == "I" || x == "i") {
    return Number(1);
  } else if (x == "V" || x == "v") {
    return Number(5);
  } else if (x == "X" || x == "x") {
    return Number(10);
  } else if (x == "L" || x == "l") {
    return Number(50);
  } else if (x == "C" || x == "c") {
    return Number(100);
  } else if (x == "D" || x == "d") {
    return Number(500);
  } else if (x == "M" || x == "m") {
    return Number(1000);
  }
}

function conversaoTotal() {
  //Metodo para somar os algarismos e trazer o resultado até a tela
  let num = String(document.getElementById("texto").value);
  let saida = document.querySelector("#Resposta");

  if (num == "") {
    window.alert("ERRO!!! Digite algo!!!");
  } else {
    let contador = Number(1);
    let aux;

    for (let k = 0; k < num.length; k++) {
      //laço para ver se o numero se repete mais de 3 vezes
      aux = num[k];
      for (let l = k + 1; l < num.length; l++) {
        if (aux == num[l]) {
          contador++;
        }
      }
      if (contador <= 3) {
        contador = 1;
      }
    }
    if (contador > 3) {
      window.alert("ERRO!!! Sem repetir por mais de 3 vezes o algarismo!!!");
    } else {
      let soma = Number(0);
      var vet = [];

      for (let i = 0; i < num.length; i++) {
        vet.push(converter(num[i]));
      }
      for (let j = 0; j < vet.length; j = j + 2) {
        if (j < vet.length - 1) {
          if (vet[j] < vet[j + 1]) {
            soma = soma + (vet[j + 1] - vet[j]);
          } else {
            soma = soma + vet[j + 1] + vet[j];
          }
        } else {
          soma = soma + vet[j];
        }
      }
      saida.innerHTML = `Convertendo fica: ${soma}`;
    }
  }
}
