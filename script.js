function setDados() {

    const getNome = document.getElementById('nome').value;
    const getEmpresa = document.getElementById('empresa').value;
    const getVendedor = document.getElementById('vendedor').value;

    return { getNome, getEmpresa, getVendedor }
}

function selectTemplate() {

    const dados = setDados();

    const select = document.querySelector("#chose-template")
    if (select.value === "Bem-vindo") {
        const show = `Ola ${dados.getNome} seja bem vindo`
        document.getElementById("template-select").innerHTML = show;
    }

    if (select.value === "atendido-por") {
        const show = `${dados.getNome} voce sera atendido por o vendedor: ${dados.getVendedor}`
        document.getElementById("template-select").innerHTML = show;
    }

    if (select.value === "editar") {
        const show = `editar editar JS`
        document.getElementById("template-select").innerHTML = show;
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

