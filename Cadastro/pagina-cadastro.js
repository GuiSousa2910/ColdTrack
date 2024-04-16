var senha_pode_cadastrar = false;
var email_pode_cadastrar = false;
var CNPJ_pode_cadastrar = false;



function valida_email() {
    var email = email_input.value;
    var arroba = email.indexOf('@');
    var ponto = email.indexOf('.');
    var tamanho_email = email.length;
    var ultimaletra = email[tamanho_email - 1];
    var primeiraletra = email[0];
    if ((arroba == -1 || ponto == -1) || (ponto < arroba) || (ponto == arroba + 1) || (ultimaletra == '.') || (primeiraletra == '@')) {
        alerta_email.innerHTML = `<p style='color:red; margin: 10px;' 
>Insira um email válido!</p>`;
        email_pode_cadastrar = false;

    } else {
        alerta_email.innerHTML = '';
        email_pode_cadastrar = true;
    }
}
function valida_senha() {
    var senha1 = senha_input.value;
    var tamanho = senha1.length;
    if (tamanho > 5) {
        alerta_senha.innerHTML = `<p style='color:lightgreen; margin: 10px;'>Senha forte!</p>`;
    } else {
        alerta_senha.innerHTML = `<p style='color:red; margin: 10px;'>Senha fraca!</p>`;

    }
}
function valida_senha2() {
    var senha1 = senha_input.value;
    var senha2 = senha2_input.value;
    if (senha1 != senha2) {
        alerta_confirme_senha.innerHTML = `<p style='color:red; margin: 10px;'>As senhas não podem ser diferentes!<p>`;
        senha_pode_cadastrar = false;

    }
    else {
        alerta_confirme_senha.innerHTML = "";
        senha_pode_cadastrar = true;
    }
}

function valida_cnpj() {
    var cnpj = cnpj_input.value;
    var cnpj_tamanho = cnpj.length;
    //modelo do cnpj: XX.XXX.XXX/XXXX-XX
    //metodo 1 da mascara do cnpj  
    if (cnpj_tamanho == '2') {
        cnpj_input.value += '.';
    }
    else if (cnpj_tamanho == '6') {
        cnpj_input.value += '.';
    }
    else if (cnpj_tamanho == '10') {
        cnpj_input.value += '/';
    }
    else if (cnpj_tamanho == '15') {
        cnpj_input.value += '-';
    }


    //metodo 2 da mascara do cnpj
    // if (cnpj_tamanho > 2){
    // cnpj_input.value = cnpj.substring(0, 2) + '.' + cnpj.substring(3)
    // }
    // if (cnpj_tamanho > 6){
    // cnpj_input.value = cnpj.substring(0, 6) + '.' + cnpj.substring(7)
    // }
    // if (cnpj_tamanho > 10){
    // cnpj_input.value = cnpj.substring(0, 10) + '/' + cnpj.substring(11)
    // }
    // if (cnpj_tamanho > 15){
    // cnpj_input.value = cnpj.substring(0, 15) + '-' + cnpj.substring(16)
    // }
    //condições para o cnpj ser falso
    var cnpj_correto = true;

    //for que percorre o tamanho do meu texto e valida se ele esta correto
    for (var cnt = 0; (cnt <= cnpj_tamanho - 1); cnt++) {

        if (cnt != 2 && cnt != 6 && cnt != 10 && cnt != 15) { //esse if representa os caracteres do cnpj, exceto os caracteres 2, 6, 10 e 15
            if ( //esse if valida se os caracteres inseridos são numeros de 0 a 9 
                cnpj[cnt] != "0" &&
                cnpj[cnt] != "1" &&
                cnpj[cnt] != "2" &&
                cnpj[cnt] != "3" &&
                cnpj[cnt] != "4" &&
                cnpj[cnt] != "5" &&
                cnpj[cnt] != "6" &&
                cnpj[cnt] != "7" &&
                cnpj[cnt] != "8" &&
                cnpj[cnt] != "9"
            )//se eles forem diferentes dos numeros de 0 a 9, o cnpj esta errado    
            {
                cnpj_correto = false;
            }

        } else { //esse else representa e excessão do if de cima, ou seja, os caracteres 2, 6, 10 e 15 (que precisam necessariamente ser "." ou "-" ou "/")
            if ( //esse if valida se os caracteres estão na condição correta  
                cnpj[2] != "." ||
                cnpj[6] != "." ||
                cnpj[10] != "/" ||
                cnpj[15] != "-"
            ) { //se eles nao estiverem, o cnpj esta errado
                cnpj_correto = false;
            }
        }
    }

    if (cnpj_tamanho != 18 || cnpj_correto == false) {
        alerta_cnpj.innerHTML = `<p style='color:red; margin: 10px;'>Insira um CNPJ válido!<p>`;
        cnpj_pode_cadastrar = false;

    }
    else {
        alerta_cnpj.innerHTML = "";
        cnpj_pode_cadastrar = true;
    }
}
// var texto_final = '';
// function validarCNPJ() {
//     var cnpj = input_cnpj.value;
//     var ponto = cnpj.indexOf('.');

//     if (cnpj.indexOf(2) >= 0) {
//         texto_final = cnpj;
//     }

//     if (cnpj.length == 2) {
//         texto_final = "";
//     }    
//     if (cnpj.indexOf(1) >= 2) {
//         texto_final = cnpj;
//     }

//     input_cnpj.value = texto_final;
//     alerta_cnpj.innerHTML = texto_final;

//     // if (ponto == 2) {
//     //     texto_final = cnpj;
//     // }
//     // else{
//     //     texto_final = "";
//     // }
// }


function cadastrar() {
    var mensagem = '';

    if (senha_pode_cadastrar && email_pode_cadastrar && cnpj_pode_cadastrar) {
        mensagem = 'Cadastro realizado com sucesso!';
    } else {
        mensagem = 'Erro! Cadastro não realizado';
    }
    alert(mensagem);
    if (mensagem == 'Cadastro realizado com sucesso!') {
        document.location.href = "../Principal Cadastrado/principal-cadastrado.html";
    }
}