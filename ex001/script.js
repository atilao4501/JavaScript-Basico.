function carregar() {
  var titulo = window.document.querySelector("h1");
  var msg = window.document.querySelector("#mensagem");
  var img = document.querySelector("#imagem");

  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;
  titulo.innerHTML = `São ${hora} horas `;
  if (hora <= 12) {
    msg.innerHTML = "Bom dia";
    img.src = "./fotos/manha.jpg";
  } else if (hora <= 18) {
    msg.innerHTML = "Boa tarde";
    img.src = "./fotos/tarde.jpg";
  } else {
    msg.innerHTML = "Boa noite";
    img.src = "./fotos/noite.jpg";
  }
}
