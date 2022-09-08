function verificar() {
  var anoNas = document.getElementById("txtano");
  var data = new Date();
  var res = document.getElementById("res");
  var anoAtual = data.getFullYear();

  if (idade < 0 || Number(anoNas.value) > anoAtual) {
    window.alert(`[ERRO] Verifique os dados e tente novamente`);
  } else {
    var idade = anoAtual - Number(anoNas.value);
    var fsex = document.getElementsByName("radsex");
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 17) {
        img.setAttribute("src", "Menino.png");
      } else if (idade >= 18 && idade <= 55) {
        img.setAttribute("src", "HomemAdulto.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 17) {
        img.setAttribute("src", "Menina.png");
      } else if (idade >= 18 && idade <= 55) {
        img.setAttribute("src", "MulherAdulta.png");
      }
    }
    if (idade >= 55 && idade <= 100) {
      img.setAttribute("src", "Idosos.png");
    } else if (idade > 100) {
      img.setAttribute("src", "caixao.png");
      idade = "um pé na cova e outro no sabão aos " + idade;
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectei ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
