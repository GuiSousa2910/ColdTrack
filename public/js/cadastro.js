var senhas_iguais = false;
var senha_forte = false;
var email_pode_cadastrar = false;
var CNPJ_pode_cadastrar = false;

var nomeVar = nome_input.value;

function valida_email() {
    var email = email_input.value;
    var arroba = email.indexOf('@');
    var ponto = email.indexOf('.');
    var tamanho_email = email.length;
    var ultimaletra = email[tamanho_email - 1];
    var primeiraletra = email[0];
    if ((arroba == -1 || ponto == -1) || (ponto < arroba) || (ponto == arroba + 1) || (ultimaletra == '.') || (primeiraletra == '@')) {
        alerta_email.innerHTML = `<span class = 'invalido'> Insira um email válido!</span>`;
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
        alerta_senha.innerHTML = `<p style='color:green; padding: 5px; background-color: white; border-radius: 10px;'>Senha forte!</p>`;
        senha_forte = true;
    } else {
        alerta_senha.innerHTML = `<span class = 'invalido' >Insira pelo menos 6 dígitos!</span>`;
        senha_forte = false;
    }
}
function valida_senha2() {
    var senha1 = senha_input.value;
    var senha2 = senha2_input.value;
    if (senha1 != senha2) {
        alerta_confirme_senha.innerHTML = `<span class = 'invalido'>As senhas não podem ser diferentes!</span>`;
        senhas_iguais = false;

    }
    else {
        alerta_confirme_senha.innerHTML = "";
        senhas_iguais = true;
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
        alerta_cnpj.innerHTML = `<span class = 'invalido'>Insira um CNPJ válido!</span>`;
        cnpj_pode_cadastrar = false;

    }
    else {
        alerta_cnpj.innerHTML = "";
        cnpj_pode_cadastrar = true;
    }
}

function cadastrar() {
    var mensagem = '';
    if (senhas_iguais && senha_forte && email_pode_cadastrar && cnpj_pode_cadastrar) {




        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome_input.value,
                emailServer: email_input.value,
                senhaServer: senha_input.value,
                cnpjServer: cnpj_input.value
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    painel1.classList.add('invisivel');
                    setTimeout(() => {
                        painel1.style.display = 'none';
                        var novoelemento = document.createElement('div');
                        novoelemento.classList.add('painel_sucesso');
                        novoelemento.id = 'painel_sucesso';
                        novoelemento.innerHTML = `
                                        <h1>Cadastro realizado com sucesso!</h1> <br>
                                        <br>
                                        <h3>Redirecionando Para a página de Login. </h3><br>
                                        <br>
                                        <div class="loader"></div>

                                    
                                        `;
                        container.appendChild(novoelemento);
                        setTimeout(() => {
                            painel_sucesso.classList.add('visivel');
                        }
                            , 100);
                    }
                        , 500);

                    setTimeout(() => {
                        window.location = "decisaoLogin.html";
                    }, 2000);



                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });

    }
}