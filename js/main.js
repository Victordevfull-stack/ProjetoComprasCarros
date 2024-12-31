$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true,
        arrows:false
    });

    
    // Máscaras para CPF, telefone e CEP
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu Nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfIvalids();
            console.log(camposIncorretos)
        }
    });
    

})