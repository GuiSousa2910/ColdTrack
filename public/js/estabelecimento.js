// window.load = Autenticar_Usuario(sessionStorage.NOME_USUARIO, sessionStorage.EMAIL_USUARIO, sessionStorage.ID_USUARIO);

function cadastrarEstabelecimento() {
    var verificacao = false;
    var nomeE = input_nomeEsta.value;
    var uf = input_uf.value;
    var cidade = input_cidade.value;
    var bairro = input_bairro.value;
    var telefone = input_telefone.value;
    var cep = input_cep.value;
    var numero = input_numero.value;
    var idCliente = sessionStorage.ID_USUARIO;




    if (nomeE != '' && uf != '' && cidade != '' && bairro != '' && cep != '' && numero != '' && telefone != '') {
        var mensagem = '';

        fetch("/usuarios/cadastrar_estabelecimento", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeEServer: nomeE,
                ufServer: uf,
                cidadeServer: cidade,
                bairroServer: bairro,
                telefoneServer: telefone,
                cepServer: cep,
                numeroServer: numero,
                IdClienteServer: idCliente
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
                                        <h3>Redirecionando Para a página de Refrigeradores. </h3><br>
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
                        window.location = "telaRefrigerador.html";
                    }, 2500);


                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });

        verificacao = true;
    }



}

function funcionario() {
    window.location.href = 'telaFunc.html';
}