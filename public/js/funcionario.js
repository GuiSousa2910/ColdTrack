window.load = Autenticar_Usuario(sessionStorage.NOME_USUARIO, sessionStorage.EMAIL_USUARIO, sessionStorage.ID_USUARIO);

function estabelecimento() {
    window.location.href = 'telaEst.html';
}

function cadastrarFuncionario() {

    var estabelecimento = estabelecimento_slc.value;
    var nomeFunc = input_nomeFunc.value;
    var cargo = input_cargo.value;
    var telefone = input_telefone.value;
    var email = input_emailFunc.value;
    var senha = input_senhaFunc.value;
    var fkcliente = sessionStorage.ID_USUARIO;

    if (nomeFunc != '' && cargo != '' && telefone != '' && email != '' && senha != '') {




        fetch("/usuarios/cadastrar_funcionario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                idEstabelecimento: estabelecimento,
                nomeFuncServer: nomeFunc,
                cargoServer: cargo,
                telefoneServer: telefone,
                emailServer: email,
                senhaServer: senha,
                idClienteServer: fkcliente
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {


                    tudoE.classList.add('invisivel');
                    setTimeout(() => {
                        tudoE.style.display = 'none';
                        var novoelemento = document.createElement('div');
                        novoelemento.classList.add('painel_sucesso');
                        novoelemento.id = 'painel_sucesso';
                        novoelemento.innerHTML = `
                                                <h1>Cadastro realizado com sucesso!</h1> <br>
                                                <br>
                                                <h3>Redirecionando Para a página principal. </h3><br>
                                                <br>
                                                <div class="loader"></div>
                                                `;
                        document.body.appendChild(novoelemento);
                        setTimeout(() => {
                            painel_sucesso.classList.add('visivel');
                        }
                            , 100);
                    }
                        , 500);

                    setTimeout(() => {
                        window.location = "principal-cadastrado.html";
                    }, 2500);


                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });


    }
}