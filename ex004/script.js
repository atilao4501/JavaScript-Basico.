function tabuada() {
  let num = Number(document.getElementById("numero").value);
  let tab = document.getElementById("seltab");

  if (num == 0) {
    window.alert("ERRO!!! Digite corretamente.");
  } else {
    tab.innerHTML = "";
    let c = 1;

    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${num} x ${c} = ${num * c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
