var adicionaCartao = (function(){

// var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
// for (var index = 0; index < botoes.length; index++) {
//   botoes[index].addEventListener("click",removeCartao);
// }

function removeCartao(){
  var idCartao = this.getAttribute("data-idcartao"); //cartao1
  var cartao = document.querySelector("#"+idCartao); //#cartao1
  cartao.classList.add("cartao--some");
  cartao.addEventListener("transitionend", function(){
    cartao.remove();
  });
};

var contador = $(".cartao").length;
var usuario ="valeria@exemplo.com.br";

function adicionaCartao(conteudo,cor){
  contador++;

  var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
                                 .addClass("opcoesDoCartao-opcoes")
                                 .attr("data-idcartao", "cartao"+contador)
                                 .text("Remover")
                                 .click(removeCartao);

  var opcoes = $("<div>").addClass("opcoesDoCartao")
                         .append(botaoRemove);

  var conteudoTag = $("<p>").addClass("cartao-conteudo")
                            .append(conteudo);

  $("<div>").addClass("cartao")
            .attr("id", "cartao" + contador)
            .append(opcoes)
            .append(conteudoTag)
            .css("background-color", cor)
            .prependTo(".mural");

};

return adicionaCartao;
// chamando a funcao adiciona cartao que estava encapsulada
})();
