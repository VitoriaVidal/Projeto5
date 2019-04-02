jQuery.validator.addMethod("espaco", function (value, element) {
    if (value.indexOf(" ") >= 0) {
        return true
    } else {
        return false
    }
}, "Nome completo, por favor!")

jQuery.validator.addMethod("dtaNasc", function (value, element) {
    var ano = value.substring(6)

    if ((value.length != 10) || ((2019 - ano) < 1)) {
        return false
    } else {
        return true
    }
}, "Data de nascimento inválida!")

jQuery.validator.addMethod("sora", function (value, element) {
    if (value.toLowerCase().indexOf("véia") >= 0) {
        return true
    } else {
        return false
    }
}, "Cadê o véia no nome da sora?")




//Quando a página carrega
$(document).ready(function () {

    $("#cpf").mask("000.000.000-00")
    $("#dataNasc").mask("00/00/0000")

    $("#formulario").validate({
        rules: {
            nome: {
                required: true,
                minlength: 10,
                maxlength: 100,
                space_req: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true,
                cpfBR: true
            },
            dataNasc: {
                required: true,
                dtaNasc: true
            },
            sora: {
                required: true,
                sora: true
            }
        },
        submitHandler: function (form) {
            alert("Cadastrado com sucesso!")
        }
    })




})




