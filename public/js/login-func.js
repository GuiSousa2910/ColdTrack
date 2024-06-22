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
function entrar_funcionario() {
    var mensagem = '';
    var emailVar = login_input.value;
    var senhaVar = senha_input.value;

    if (tentativas != 0) {
        fetch("/usuarios/autenticar_funcionario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!");

            if (resposta.ok) {
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    mensagem = `<div style="
                    display: flex; 
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;"
    \nclasnlasfs                                <span style =" color: green"> Login correto! </span> <br>
                                <div class="loader"></div> 
                                </div>
                    `;
                    div_msg.innerHTML = mensagem;
                    sessionStorage.EMAIL_USUARIO = json.emailFuncionario;
                    sessionStorage.NOME_USUARIO = json.nomeFuncionario;
                    sessionStorage.ID_USUARIO = json.fkCliente;
                    sessionStorage.FK_CLIENTE = json.idFuncionario;
                    sessionStorage.FK_ESTABELECIMENTO = json.fkEstabelecimento;
                    setTimeout(() => {
                        window.location = "./decisaoFunc.html";
                    }, "2000");
                });

                finalizarAguardar();


                console.log('DEU CERTOOOOOOOOOOOOOOOOOOOOOO');
            } else {

                console.log("Houve um erro ao tentar realizar o login!");
                mensagem = '<span style =" color: lightcoral">Erro! Login ou senha inválidos.</span>';
                tentativas--;

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        });

        return false;
    } else if (tentativas == 0) {
        mensagem = 'Bloqueado! Recarregue a página.';

    }

    div_msg.innerHTML = mensagem;
    // console.log(tentativas);
}

function possofazerlogin() {
    tentativas = 4;
}