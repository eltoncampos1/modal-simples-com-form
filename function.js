$(function(){

    //funções de abrir e fechar fomr

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

    //eventos do formulário

    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    })

    $('form#form1').submit(function(e){
        //e.preventDefault();
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if(verificarNome(nome) == false){
            aplicarCamposInvalido($('input[name=nome]'));
            return false;
        }else if(verificarTelefone(telefone) == false){
            aplicarCamposInvalido($('input[name=telefone]'));
            return false;
               
        }else if(verificaEmail(email)== false ){
            aplicarCamposInvalido($('input[name=email]'));
            return false;
        }else{
            alert("Formulário enviado com sucesso!")
        }



        //se chegou até aqui é por que está tudo okay!

    })

        //funçoes para estilizar o campos do form

        function aplicarCamposInvalido(el){
            el.css('color','red');
            el.css('border','2px solid red');
            //el.data('invalido','true')
            el.val('Campos inválido!')
        }

        function resetarCampoInvalido(el){
            el.css('color','#ccc');
            el.css('border','1px solid #ccc');
            el.val('');
        }

        //funções para verificar os campos

        function verificarNome(nome){
            //contando a quantidade de espaços e os respectivos valores
            if(nome == ''){
                return false;
            }
            var amount = nome.split(' ').length
            var splitStr = nome.split(' ');
            if( amount >= 2){
                for(var i = 0; i < amount; i++){
                   if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                   }else{
                       
                       return false;
                   }
               
                }
                      
            }else{
                
                return false;
    
            }
        }


        function verificarTelefone(telefone){
            if(telefone == ''){
                return false;
            }
           

            if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
                return false;
            }
        }

        function verificaEmail(email){
            if(email == '')
                return false
            if(email.match(/^([a-z0-9-._]{1,})+@+([a-z.]{1,})$/) == null){
                return false;
            }
        }


   
       
            
        
    

});