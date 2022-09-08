function incrementar() {
  var inicio = Number(document.getElementById("inicio").value);
  var fim = Number(document.getElementById("fim").value);
  var salto = Number(document.getElementById("salto").value);
  var res = document.getElementById("res");
  var h = document.querySelectorAll("h1");
  var texto = "";

  while (inicio < fim) {
    texto += inicio + "->";
    inicio = inicio + salto;
  }
  res.innerHTML = `Ordem: ${texto + fim} `;
}
