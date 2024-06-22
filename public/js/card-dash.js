function exibirRefrigeradores() {
    estabelecimento = sessionStorage.nomeEstabelecimento;
    div_titulo.innerHTML = `
<p class="refrigeradores">Refrigeradores do Estabelecimento<span style= 'color: #00FFFF; margin-left: 7px'>${estabelecimento}</span> </p>
`;
    var refrigeradores = JSON.parse(sessionStorage.getItem('Refrigeradores'));
    // console.log(refrigeradores);
    refrigeradores.forEach(item => {
        //   console.log(item);
        document.getElementById("tudoCard").innerHTML += `
                   <div class="card-refrigerador"  onclick="exibirPortas(${item.idRefrigerador})">
                    <div class="title-refrigerador">
                        <h1>Refrigerador ${item.idRefrigerador}</h1>
                        <h2>Local: ${item.localFisico}</h2>
                    </div>
                    <div class="desc-refrigerador">
                    <div class="temperatura">
                        <p id="temp_refrigerador_${item.idRefrigerador}">-°C</p>
                    </div>
                    <div class="cor-alerta" id="card_${item.idRefrigerador}"></div>
                </div>
                </div>
                    
            `;
        // obterDadosRefrigerador(item.Refrigerador_id)
    });
}

function exibirPortas(idRefrigerador) {
    tudoCard.classList.toggle('invisivel');
    setTimeout(() => {
        tudoCard.style.display = 'none';
        var tag = 'div';
        var texto = `

                <div style="display: flex; justify-content: center; align-items: center;">
                    <h1 class='teste'>Portas do Refrigerador ${idRefrigerador}</h1>
                    <button class="card-btn" onclick='fecharPortas(cardportarefrigerador.id)'>X</button>
                
                </div>
                        
                    

                `;
        var id = `cardportarefrigerador`;
        var classe = 'card-portas-refrigerador';
        const card = document.getElementById('cardportarefrigerador');
        if (card) {
            card.remove();
        }
        // Cria um novo elemento
        var novoElemento = document.createElement(tag);
        var porta_refrigeradores = JSON.parse(sessionStorage.getItem('PortasRefrigeradores'));
        porta_refrigeradores.forEach(item => {
            //   console.log(item);

            if (item.fkRefrigerador == idRefrigerador) {

                texto += `
                        <div class="card-refrigerador1">
                            <div class="title-refrigerador">
                                <h1>Porta ${item.idPorta}</h1>
                                <h2>Produto Armazenado: ${item.produtoArmazenado}</h2>
                                <h2>Tipo Abertura: ${item.tipoAbertura}</h2>
                                
                                </div>
                                <div class="desc-portas">
                                    <div class="temperatura">
            <p id="abertura_porta_${item.idPorta}_refrigerador_${item.fkRefrigerador}" class="aberturas">Aberturas:</p>
                                        </div>
                                        <div class="cor-alerta" id="card_${item.idPorta}"></div>
                                        </div>
                                        </div>
                                        
                                        `;
            }
            // obterDadosRefrigerador(item.Refrigerador_id)
        });



        novoElemento.innerHTML = texto;
        novoElemento.id = id;
        novoElemento.classList.add(classe);
        document.body.appendChild(novoElemento);


    }, 750);
}

function fecharPortas(id) {
    const painel_porta = document.getElementById(id);
    painel_porta.remove();
    setTimeout(() => {
        tudoCard.style.display = 'flex';
        tudoCard.classList.toggle('invisivel');

    }, 250);
}