const btnCadastro = document.getElementById("btnCadastro");
const btnLogin = document.getElementById("btnLogin");

btnCadastro.addEventListener("click", () => {
    window.location.href = "cadastro.html";
});

btnLogin.addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario === "admin" && senha === "1234") {
        localStorage.setItem("logado", "true");
        window.location.href = "parquimetro.html";
    } else {
        mensagem.textContent = "Usuário ou senha inválidos";
    }
});
