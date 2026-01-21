document.getElementById("cep").addEventListener("blur", (evento) => {
    const cepInformado = evento.target.value.replace(/\D/g, '');

    if (cepInformado.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado");
                return;
            }

            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade; // ✅
            document.getElementById("estado").value = data.uf;         // ✅
        })
        .catch(error => console.error("Erro ao buscar CEP:", error));

        document.getElementById("btnVoltar").addEventListener("click", () => {
    window.location.href = "login.html";
});

});
