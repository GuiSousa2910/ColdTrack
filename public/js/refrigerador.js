
function cadastrarRefrigerador() {

    var estabelecimento = estabelecimento_slc.value;
    var local_fisico = input_local_fisico.value;
    var marca = input_marca.value;
    var modelo = input_modelo.value;
    var qntportas = input_qntportas.value;
    var produtoArmazenado = input_produto.value;
    var tipoPorta = select_tipo.value;
    var idCliente = sessionStorage.ID_USUARIO;

    if (local_fisico != '' && marca != '' && modelo != '' && qntportas != '' && idCliente != '' && produtoArmazenado != '') {
        var mensagem = '';

        fetch("/usuarios/cadastrar_refrigerador", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                local_fisicoServer: local_fisico,
                marcaServer: marca,
                modeloServer: modelo,
                qntportasServer: qntportas,
                idClienteServer: idCliente,
                idEstabelecimento: estabelecimento,
                tipoportaServer: tipoPorta,
                produtoarmazenadoServer: produtoArmazenado
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