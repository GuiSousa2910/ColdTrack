async function carregar_estabelecimentos() {
    div_titulo.innerHTML = `
    <h1>Olá <b style="color: #00bfff;">${sessionStorage.NOME_USUARIO}</b>. Escolha um de seus estabelecimentos</h1>
    `;

    var cnt = 0;
    const estabelecimentos = await buscar_estabelecimentos();
    console.log(JSON.parse(estabelecimentos));
    JSON.parse(estabelecimentos).forEach(item => {
        cnt++;
        const novoelemento = document.createElement('div');
        novoelemento.classList.add('opcao');
        novoelemento.style.display = 'flex';
        novoelemento.style.textAlign = 'center';

        novoelemento.innerHTML = `
    <p style="font-size: 35px; margin-top: -50px; margin-bottom: 20px">
        Estabelecimento ${cnt}    
    </p>

    <p>
        <span style="color: #00FFFF; font-size: 27px; text-align: center; font-weight: bolder;">Nome do Estabelecimento:</span> <span style="font-size: 25px;"><br><b>${item.nomeEstabelecimento}</b> </span>
    </p>
    <p style= "font-size: 23px; font-weight: bold; margin-bottom: -40px">
        Refrigeradores: ${item.qtdRefrigeradores} 
    </p>

    `;
        novoelemento.id = [item.idEstabelecimento, item.fkCliente];
        novoelemento.onclick = () => {
            sessionStorage.idEstabelecimento = novoelemento.id[0];
            sessionStorage.nomeEstabelecimento = item.nomeEstabelecimento;
            autenticarLogado();
            setTimeout(() => {
                document.location.href = 'card-dash.html';

            }, 1000);
        };
        meio.appendChild(novoelemento);
    });



}