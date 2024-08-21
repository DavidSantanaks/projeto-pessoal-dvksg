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

function selectTemplate() {

    const dados = setDados();

    const select = document.querySelector("#chose-template")
    if (select.value == "Bem vindo") {
        const show = `Ola ${dados.getNome} seja bem vindo, vocë sera atendido pela empresa ${dados.getEmpresa}`
        document.getElementById("template-select").innerHTML = show;
    }
    if (select.value === "x") {
        console.log("XXXXXXXX")
    }

}

function copy() {
    var copyText = document.getElementById("template-select");
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
}

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão e o campo escondido
    const toggleButton = document.getElementById('btEnviar');
    const textArea = document.getElementById('areaTemplate');

    toggleButton.addEventListener('click', function () {
        textArea.style.display = 'flex'
    })

}
);

