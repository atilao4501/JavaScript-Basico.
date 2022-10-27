class cliente {
  constructor(nome) {
    this.nome = nome;
    this.conta = 0;
  }
}

var vet = [];
var nomes = "Nomes inseridos:";

function adicionar() {
  let adicionado = document.querySelector("#adicionado");
  let nome = String(document.getElementById("nome").value);
  let clienteaux = new cliente(nome);
  let erro = 0;

  for (let i = 0; i < vet.length; i++) {
    if (clienteaux.nome == vet[i].nome) {
      erro = 1;
    }
  }
  if (erro == 1) {
    window.alert("Cliente ja presente");
  } else {
    vet.push(clienteaux);
    nomes += " " + nome + ", ";
    adicionado.innerHTML = `${nomes}`;
  }
}

function adicionarConta() {
  let valor = Number(document.querySelector("#valor").value);
  let qpessoa = Number(document.querySelector("#quantidade").value);
  let nomes = String(document.querySelector("#nomes").value);
  let erro = 1;

  for (let i = 0; i < vet.length; i++) {
    if (nomes == vet[i].nome) {
      vet[i].conta += valor / qpessoa;
      console.log(vet[i].conta);
      erro = 0;
    }
  }
  if (erro == 1) {
    window.alert("Cliente não encontrado");
  }
}

function imprimirConta() {
  if (vet.length == 0) {
    window.alert("Não existem clientes");
  } else {
    let tab = document.getElementById("seltab");

    tab.innerHTML = "";
    let c = 0;

    while (c < vet.length) {
      let item = document.createElement("option");
      item.text = `${vet[c].nome} = ${vet[c].conta}`;
      tab.appendChild(item);
      c++;
    }
  }
}
