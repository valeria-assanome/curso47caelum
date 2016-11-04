var criaOpcoesDoCartao = (function(){
  "use script";

  function removeCartao(){
    var cartao= document.querySelector("#cartao_" +this.data-idcartao.ref);
    cartao.classList.add("cartao--some");
    setTimeout(function(){
      cartao.remove();
      $(document).trigger("precisaSincronizar");
    },400);
  }

  var ehPraEditar = false;
  function toggleEdicao(){
      var cartao = $("#cartao_"+this.data-idcartao.ref);
      var conteudo = cartao.find(".cartao-conteudo");

      if(ehPraEditar){
        ehPraEditar = false;
        conteudo.attr("contenteditable",false);
        conteudo.blur();
      }else{
        ehPraEditar=true;
        conteudo.attr("contenteditable",true);
        conteudo.blur();
      }
  }


  return function(idNovoCartao){

    var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
                                  . addClass("opcoesDoCartao-opcao")
                                  .attr("data-idcartao", idNovoCartao)
                                  .text ("Remover")
                                  .click(removeCartao) ;
    var botaoEdita =$("button").addClass("opcoesDoCartao-edita")
                               .addClass("opcoesDoCartao-opcao")
                               .attr("data-idcartao", idNovoCartao)
                               .text("Editar")
                               .click(toggleEdicao);

    var opcoes = $("<div>").addClass("opcoesDoCartao")
                           .append(botaoRemove);

    return opcoes

  }
})();
