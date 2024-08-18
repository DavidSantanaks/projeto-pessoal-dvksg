function setDados() {

    const getNome = document.getElementById('nome').value;
    const getEmpresa = document.getElementById('empresa').value;
    const getVendedor = document.getElementById('vendedor').value;

    return { getNome, getEmpresa, getVendedor }
}



function show(setDados) {
    const nome = setDados.getNome
    const empresa = setDados.getEmpresa;
    const vendedor = setDados.getVendedor;

    const mostra = `bem vindo ${nome}, você sera atendido por ${vendedor} da empresa ${empresa}`
    document.getElementById("pdados").innerHTML = mostra;
}

function twofnc() {
    setDados();
    show(setDados());
}

