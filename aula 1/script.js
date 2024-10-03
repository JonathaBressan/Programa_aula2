$(document).ready(function() {
    $("input[name=cep]").mask("00000-000");
    $("input[name=numero]").mask("n",{
        translation: {
            'n':{
                pattern: /[0-9]/,
                recursive: true
            }
        }
    });
    $("form").on("submit", function(event){
        event.stopPropagation();
        event.preventDefault();
    });
    
    $("input[name=cep]").on("keyup", function(event){
        let cep = $("input[name=cep]").val();
        cep = cep.replace("-", "");
        if(cep.length == 8){
            $("input[name=cep]").removeClass("is-invalid");
            //alert(cep);
            $.ajax("https://viacep.com.br/ws/"+ cep +"/json")
            .done(function(data){
                let resposta = JSON.parse(data);
                if(resposta.erro){
                    $("input[name=cep]").addClass("is-invalid");
                }else{
                    $("input[name=rua]").val(resposta.logradouro);
                    $("input[name=cidade]").val(resposta.localidade);
                    $("input[name=bairro]").val(resposta.bairro);
                    $("select[name=estado]").val(resposta.uf);
                    $("input[name=complemento]").val(resposta.complemento);
                }
                
            });
            
        } 
        
        const urlEstados = 'https://'
    });

    

}); 