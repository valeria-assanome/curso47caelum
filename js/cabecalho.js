var botao = document.querySelector("#mudaLayout");
var mural = document.querySelector(".mural");
botao.addEventListener("click", mudaLayout);

function  mudaLayout () {
  if (botao.textContent=="Linhas") {
    botao.textContent="Colunas";
    mural.classList.add("mural--linhas");
    mural.classList.remove("mural--colunas");
  } else {
    botao.textContent="Linhas";
    mural.classList.add("mural--colunas");
    mural.classList.remove("mural--linhas");
  };
};
