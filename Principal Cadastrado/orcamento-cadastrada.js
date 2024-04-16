
var nomeEmpresa = '';
var email = '';
var mensagem = '';

function enviar() {
    if (nomeEmpresa != '' && email != '' && (mensagem != '' && mensagem.length >= 50)) {
        divMensagem.innerHTML = `<span style =" color: lightgreen">Orçamento enviado com sucesso!</span>`;
    }
    else if (mensagem == '' && email == '' && nomeEmpresa == '') {
        divMensagem.innerHTML = `<span style =" color: lightcoral">Preencha todos os campos.</span>`;
    }
    else if (mensagem.length < 50) {
        divMensagem.innerHTML = `<p style='color:lightblue'>Escreva uma mensagem mais <br>detalhada antes de enviar!</p>`;
    }
}

function escrevendo() {

    nomeEmpresa = input_empresa.value;
    email = input_email.value;
    mensagem = input_mensagem.value;
    var arroba = email.indexOf('@');
    var ponto = email.indexOf('.');
    var tamanhoMensagem = mensagem.length;

    if ((arroba == -1 || ponto == -1) || (ponto < arroba) || (ponto == arroba + 1)) {
        divMensagem.innerHTML = `<p style='color:red'>Insira um email válido!</p>`;

    }
    else if (tamanhoMensagem < 50) {
        divMensagem.innerHTML = `<p style='color:lightblue'>Faça uma mensagem detalhada!</p>`;
    }


}