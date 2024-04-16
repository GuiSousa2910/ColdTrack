function cadastrarEstabelecimento() {
    var verificacao = false;
    var nomeE = input_nomeEsta.value;
    var uf = input_uf.value;
    var cidade = input_cidade.value;
    var bairro = input_bairro.value;
    var cep = input_cep.value;
    var numero = input_numero.value;
    var bairro = input_bairro.value;
    var qntRefrigeradores = input_qntRefrigeradores.value;

    if (nomeE != '' && uf != '' && cidade != '' && bairro != '' && cep != '' && numero != '' && bairro != '' && qntRefrigeradores != '') {
        alert('Estabelecimento cadastrado com sucesso!');
        verificacao = true;
    }
    if (verificacao) {
        window.location.href = 'decisao.html';
    }
    else {
        alert('Preencha todos os campos');
    }
}

function funcionario() {
    window.location.href = 'telaFunc.html';
}