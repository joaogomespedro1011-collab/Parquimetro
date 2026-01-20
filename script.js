class Estacionamento {
    constructor(placa, valor) {
        this.placa = placa;
        this.valor = valor;
        this.entrada = new Date();
    }

    calcularTempo() {
        if (this.valor < 1) {
            return { erro: "Valor insuficiente." };
        }

        if (this.valor >= 3) {
            return { tempo: 120, custo: 3 };
        }

        if (this.valor >= 1.75) {
            return { tempo: 60, custo: 1.75 };
        }

        return { tempo: 30, custo: 1 };
    }

    calcularSaida(minutos) {
        const saida = new Date(this.entrada);
        saida.setMinutes(saida.getMinutes() + minutos);
        return saida;
    }

    registrar() {
        const dados = this.calcularTempo();

        if (dados.erro) {
            return dados;
        }

        const saida = this.calcularSaida(dados.tempo);
        const troco = (this.valor - dados.custo).toFixed(2);

        return {
            placa: this.placa,
            entrada: this.entrada.toLocaleString(),
            saida: saida.toLocaleString(),
            tempo: dados.tempo,
            troco
        };
    }
}

document.getElementById("calcular").addEventListener("click", () => {
    const placa = document.getElementById("placa").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    const estacionamento = new Estacionamento(placa, valor);
    const registro = estacionamento.registrar();

    if (registro.erro) {
        resultado.textContent = registro.erro;
    } else {
        resultado.innerHTML = `
<strong>Placa:</strong> ${registro.placa}<br>
<strong>Entrada:</strong> ${registro.entrada}<br>
<strong>Saída:</strong> ${registro.saida}<br>
<strong>Tempo:</strong> ${registro.tempo} minutos<br>
<strong>Troco:</strong> R$ ${registro.troco}
        `;
    }
});
