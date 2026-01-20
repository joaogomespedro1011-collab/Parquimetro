class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {
        if (this.valor < 1) {
            return { mensagem: "Valor insuficiente." };
        }

        if (this.valor >= 3) {
            return {
                tempo: 120,
                troco: (this.valor - 3).toFixed(2)
            };
        }

        if (this.valor >= 1.75) {
            return {
                tempo: 60,
                troco: (this.valor - 1.75).toFixed(2)
            };
        }

        return {
            tempo: 30,
            troco: (this.valor - 1).toFixed(2)
        };
    }
}

document.getElementById("calcular").addEventListener("click", () => {
    const valorInformado = parseFloat(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    const parquimetro = new Parquimetro(valorInformado);
    const retorno = parquimetro.calcularTempo();

    if (retorno.mensagem) {
        resultado.textContent = retorno.mensagem;
    } else {
        resultado.textContent = `
Tempo: ${retorno.tempo} minutos
Troco: R$ ${retorno.troco}
        `;
    }
});
