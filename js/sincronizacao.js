(function(){
  $("#sync").click(function(){
    $(document).trigger("precisaSincronizar");
  });


      var usuario = "valeria@exemplo.com.br";
      $.getJSON(
        "https://ceep.herokuapp.com/cartoes/carregar?callback=?",
        {usuario: usuario},
        function(res){
          console.log("ae")
          var cartoes = res.cartoes;
          console.log(cartoes.length + " carregados em " + res.usuario);
          cartoes.forEach(function(cartao){
            adicionaCartao(cartao.conteudo, "#2089c1");
          });
        }
      );

      $(document).on("precisaSincronizar", function(){
        $("#sync").removeClass("botaoSync--sincronizado");
        $("#sync").addClass("botaoSync--esperando");
      });

      $(document).on("precisaSincronizar", function(){
        var cartoes = [];

        $(".cartao").each(function(){
          var cartao ={};
          cartao.conteudo = $(this).find(".cartao-conteudo").html();
          cartoes.push(cartao);
        });


        var mural = {
          usuario: usuario,
          cartoes: cartoes
        };

        $.ajax({
          url:"https://ceep.herokuapp.com/cartoes/salvar",
          method:"POST",
          data: mural,
          success: function(res){
            $("#sync").addClass("botaoSync--sincronizado");
            console.log("success");
            console.log(res.quantidade + " cartoes salvos em " + usuario);

            var quantidadeRemovidos = controladorDeCartoes - res.quantidade;
            console.log(quantidadeRemovidos + " cartoes removidos")
          },
          error: function (){
            $("#sync").addClass("botaoSync--deuRuim");
            console.log("Náo foi possível salvar o mural");
          },
          complete: function(){
            setTimeout(function () {
                $("#sync").removeClass("botaoSync--esperando");
                console.log("complete");
            }, 600);
          }
        });
      });
  })();
