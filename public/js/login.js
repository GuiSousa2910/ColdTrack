var tentativas = 4;
function valida_email() {
    var email = login_input.value;
    var arroba = email.indexOf('@');
    var ponto = email.indexOf('.');
    var tamanho_email = email.length;
    var ultimaletra = email[tamanho_email - 1];
    var primeiraletra = email[0];
    if ((arroba == -1 || ponto == -1) || (ponto < arroba) || (ponto == arroba + 1) || (ultimaletra == '.') || (primeiraletra == '@')) {
        alerta_email.innerHTML = `<p style='color:red; margin: 10px'>Insira um email válido!</p>`;


    } else {
        alerta_email.innerHTML = '';
    }
}
function entrar() {
    var mensagem = '';
    var emailVar = login_input.value;
    var senhaVar = senha_input.value;
    if (tentativas != 0) {
        fetch("/usuarios/autenticar", {
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
                // console.log('ENTREI AQUI');
                // console.log(resposta);

                resposta.json().then(json => {
                    // console.log('ESTOU NO JSON');
                    console.log(json);
                    // console.log(JSON.stringify(json));
                    mensagem = `<div style="
                        display: flex; 
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;"
                                    <span style =" color: green"> Login correto! </span> <br>
                                    <div class="loader"></div> 
                                    </div>
                        `;
                    div_msg.innerHTML = mensagem;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;

                    if (json.estabelecimentos == undefined) {
                        setTimeout(() => {
                            window.location = "decisao.html";
                        }, 1500);
                    } else {

                        // sessionStorage.setItem('Refrigeradores',JSON.stringify(json.refrigeradores))
                        // sessionStorage.setItem('Refrigeradores_Portas', JSON.stringify(json.portasrefrigeradores));
                        setTimeout(() => {
                            window.location = "principal-cadastrado.html";
                        }, 1500);

                    }

                });
            } else {

                console.log("Houve um erro ao tentar realizar o login!");
                mensagem = ' <span style =" color: lightcoral">Erro! Login ou senha inválidos.</span>';
                tentativas--;
                div_msg.innerHTML = mensagem;
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
        div_msg.innerHTML = mensagem;

    }


}

function possofazerlogin() {
    tentativas = 4;
}