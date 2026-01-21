const campos = [
    "cep",
    "logradouro",
    "bairro",
    "cidade",
    "estado",
    "numero"
];

/* 🔹 RESTAURA dados ao carregar a página */
window.addEventListener("DOMContentLoaded", () => {
    campos.forEach(campo => {
        const valor = localStorage.getItem(campo);
        if (valor) {
            document.getElementById(campo).value = valor;
        }
    });
});

/* 🔹 SALVA enquanto digita */
campos.forEach(campo => {
    document.getElementById(campo).addEventListener("input", (e) => {
        localStorage.setItem(campo, e.target.value);
    });
});

/* 🔹 BUSCA CEP */
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
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;

            // 🔹 salva dados vindos da API
            localStorage.setItem("logradouro", data.logradouro);
            localStorage.setItem("bairro", data.bairro);
            localStorage.setItem("cidade", data.localidade);
            localStorage.setItem("estado", data.uf);
        })
        .catch(error => console.error("Erro ao buscar CEP:", error));
});

/* 🔹 BOTÃO VOLTAR */
document.getElementById("btnVoltar").addEventListener("click", () => {
    window.location.href = "login.html";
});

/* 🔹 LIMPA storage após cadastro (opcional) */
document.querySelector("form").addEventListener("submit", () => {
    campos.forEach(campo => localStorage.removeItem(campo));
});
