let num = document.querySelector("#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];
let i, igual;
i = 0;

function isNum(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNum(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    num.value = "";
    num.focus();
  } else {
    window.alert("Valor invalido ou ja encontrado na lista");
    num.value = "";
    num.focus();
  }
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione numeros antes de finalizar");
  } else {
    let total = valores.length;

    res.innerHTML = " ";
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados </p>`;
  }
}
