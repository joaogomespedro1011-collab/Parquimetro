const btnLogin = document.getElementById("btnLogin");
const btnCadastro = document.getElementById("btnCadastro");

btnLogin.addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    // login fictício (simples)
    if (usuario === "admin" && senha === "1234") {
        localStorage.setItem("logado", "true");
        window.location.href = "parquimetro.html";
    } else {
        mensagem.textContent = "Usuário ou senha inválidos";
    }
});

btnCadastro.addEventListener("click", () => {
    alert("Tela de cadastro em desenvolvimento 🚧");
});
