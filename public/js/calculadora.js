    ipt_nome.value = 'SPTech Market';
    ipt_refrigeradores.value = 50;
    ipt_valorMes.value = 25000;
    function calcular() {
        var nome = ipt_nome.value;
        var refrigeradores = Number(ipt_refrigeradores.value);
        var mes = Number(ipt_valorMes.value);
        var conta = mes / 30;
        var conta2 = conta * 1.26;
        var valorcom = conta2 * 30;
        var anual = valorcom * 12;
        var semcont = mes * 12;
        var final = valorcom - mes;
        var finaAnul = final * 12;


        divMensagem.innerHTML = `<span>Fizemos a simulação da empresa ${nome} <br>com ${refrigeradores} refrigeradores: <br><br>Com o aumento de 26% no valor líquido: <br> Valor mensal com sensor: <span style =" color: lightgreen">R$${valorcom.toFixed(2)} </span><br>Valor mensal sem sensor: <span style =" color: lightcoral">R$${mes.toFixed(2)} </span><br><br>
        Faturamento anual com nosso sensor: <span style =" color: lightgreen">R$${anual.toFixed(2)}</span><br> 
        Faturamento anual sem nosso sensor: <span style =" color: lightcoral">R$${semcont.toFixed(2)}</span> <br> <br>
        Seu lucro mensal será de: <span style =" color: lightgreen">R$${final.toFixed(2)}</span> com a ColdTrack<br>
        Seu lucro anual será de: <span style =" color: lightgreen">R$${finaAnul.toFixed(2)}</span> com a ColdTrack</span>`;
    }