$("#ajuda").click(function(){
  $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",
      function(res){
      res.instrucoes.forEach(function(instrucao){
        adicionaCartao(instrucao.conteudo, instrucao.cor);
        console.log("ee");
      });
    }
  );
});
