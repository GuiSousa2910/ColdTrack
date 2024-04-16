var tentativas = 4;
function valida_email() {
    var email = login_input.value;
    var arroba = email.indexOf('@');
    var ponto = email.indexOf('.');
    var tamanho_email = email.length;
    var ultimaletra = email[tamanho_email - 1];
    var primeiraletra = email[0];
    if ((arroba == -1 || ponto == -1) || (ponto < arroba) || (ponto == arroba + 1) || (ultimaletra == '.') || (primeiraletra == '@')) {
        alerta_email.innerHTML = `<p style='color:red; margin: 10px' 
>Insira um email válido!</p>`;


    } else {
        alerta_email.innerHTML = '';

    }
}
function login() {
    var login = login_input.value;
    var senha = senha_input.value;
    var mensagem = '';
    if (login == 'cliente@gmail.com' && senha == '123' && tentativas > 0) {
        mensagem = '<span style =" color: green"> Login correto! </span> ';
        setTimeout(function espera() {
            window.location.href = '../Principal Cadastrado/principal-cadastrado.html';
        }, 2300);
    } else if (tentativas != 0) {
        mensagem = ' <span style =" color: lightcoral">Erro! Login ou senha inválidos.</span>';
        tentativas--;
    } else if (tentativas == 0) {
        mensagem = 'Bloqueado! Recarregue a página.';

    }


    div_msg.innerHTML = mensagem;
    console.log(tentativas);
}

function possofazerlogin() {
    tentativas = 4;
}