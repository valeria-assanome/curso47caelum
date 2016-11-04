var controladorDeCartoes = (function(){

var adicionaCartao = (function(){
  "use strict"

// // var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
// // for (var index = 0; index < botoes.length; index++) {
// //   botoes[index].addEventListener("click",removeCartao);
// // }
//
function removeCartao(){
//  var idCartao = this.getAttribute("data-idcartao"); //cartao1
  var cartao = document.querySelector("#cartao"+this.idCartao); //#cartao1
  cartao.classList.add("cartao--some");
  setTimeout(function(){
    cartao.remove();
    $(document).trigger("precisaSincronizar");
  },400);
};
});


var contador = $(".cartao").length;
var usuario ="valeria@exemplo.com.br";

var contador = 0;

function adicionaCartao(conteudo,cor){
  contador++;

  var opcoes = criaOpcoesDoCartao(contador);

  var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
                                 .addClass("opcoesDoCartao-opcoes")
                                 .attr("data-idcartao", "cartao"+contador)
                                 .text("Remover")
                                 .click(removeCartao);

  var opcoes = $("<div>").addClass("opcoesDoCartao")
                         .append(botaoRemove);

  var tipoCartao = decideTipoCartao(conteudo);

  var conteudoTag = $("<p>").addClass("cartao-conteudo")
                            .append(conteudo);

  $("<div>").addClass("cartao")
            .addClass("tipoCartao")
            .attr("id", "cartao" + contador)
            .append(opcoes)
            .append(conteudoTag)
            .css("background-color", cor)
            .prependTo(".mural");
}
return {
  adicionaCartao:adicionaCartao,
  idUltimoCartao : function(){
    return contador;
  }
}
})();
