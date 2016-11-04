// arquivo é referente ao formulário de texto de digitacao para criacao de novo cartao


var novoCartao = document.querySelector(".novoCartao");

novoCartao.addEventListener("submit", function(event){
    event.preventDefault();

    var novoCartaoTexto= document.querySelector(".novoCartao-conteudo");
    var elementError = document.querySelector(".error");

    if (novoCartaoTexto.value=="" && elementError==null) {
      var msgErro = document.createElement("p");

      msgErro.textContent="Preencha o texto acima";
      msgErro.classList.add("error");

      novoCartao.insertBefore(msgErro,document.querySelector(".novoCartao-salvar"));
    };
});
(function(controlador){
  "use strict"
$(".novoCartao").submit(function(event){
  var campoConteudo = $(".novoCartao-conteudo");
  var conteudo = campoConteudo.val().trim()
                              .replace(/\n/g,"<br>");

  if (conteudo) {
    controlador.adicionaCartao(conteudo);
    $(document).trigger("precisaSincronizar");
  };

  campoConteudo.val("");
  event.preventDefault();
});
})(controladorDeCartoes);
