$(function(){

    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            
            $('.bg').fadeIn();
        });
    }

    function verificarCliqueFechar(){

        var el = $('body, .close-btn');

        el.click(function(){
            $('.bg').fadeOut();
        })
        $('.form').click(function(e){
            e.stopPropagation();
        })


    }

    $('form#form1').submit(function(e){
        e.preventDefault();
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        //contando a quantidade de espaços e os respectivos valores
        var amount = nome.split(' ').length
        var splitStr = nome.split(' ');
        if( amount >= 2){
            for(var i = 0; i < amount; i++){
               if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                
               }else{
                   aplicarCamposInvalido($('input[name=nome]'));
                   return false;
               }
           
            }
                  
        }else{
            aplicarCamposInvalido($('input[name=nome]'));
            return false;

        }

        //se chegou até aqui é por que est[a tudo okay!

    })

        function aplicarCamposInvalido(el){
            el.css('border','2px solid red');
            el.data('invalido','true')
            el.val('Campos inválido!')
        }
    

});