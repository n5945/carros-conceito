class Carro {
    constructor(marca, cor, consumoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }
    descrever(){
        console.log(`${this.marca} da cor ${this.cor}, tem media de gasto de combustivel de ${this.consumoMedio}`);
    }


valorGastoPorViagem(distancia, valorCombustivel){
    const litrosConsumidos = distancia / this.consumoMedio
    const valorGastoPorViagem = litrosConsumidos * valorCombustivel
    console.log("Valor gasto a viagem sera de " + valorGastoPorViagem)
}

marcadorCombustivel(capacidadeDoTanque, litrosAtual){
if(nivel === capacidade) {
    console.log("Tanque Cheio")
}else if(nivel > (capacidade * 0.75) && nivel < capacidade) {
    console.log("3/4 de combustivel");
}else if(nivel > (capacidade * 0.5) && nivel < (capacidade * 0.75)){
    console.log("1/2 tanque de combustivel");
}else {
    console.log("1/4 de tanque de combustivel");
}

}

}

const fusca = new Carro("Volkswagen", "branco", 5)
fusca.valorGastoPorViagem(100, 5.899)