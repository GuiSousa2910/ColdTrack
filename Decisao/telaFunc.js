
function cadastrarFuncionario() {
    var verificacao = false
    var nomeFunc = input_nomeFunc.value;
    var cargo = input_cargo.value;
    var telefone = input_telefone.value;
    var ondeTrabalha = input_nomeEstFuncTrab.value;

    if (nomeFunc != '' && cargo != '' && telefone != '' && ondeTrabalha != '') {
        alert('Funcionário cadastrado com sucesso!');
        verificacao = true
    }
    if (verificacao) {
        window.location.href = 'decisao.html';
    }
    else{
        alert('Preencha todos os campos')
    }


}
function estabelecimento() {
    window.location.href = 'telaEst.html';
}