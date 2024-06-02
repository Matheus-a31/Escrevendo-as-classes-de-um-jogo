class Heroi{
    static tiposDeAtaque = {
        mago: "magia",
        guerreiro: "espada",
        ninja: "shuriken",
    }
    constructor(nome, idade, tipo ){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo.toLowerCase()
    }
    atacar(){
        const tiposDeAtaques = Heroi.tiposDeAtaque[this.tipo] || "ataque padrão";
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${tiposDeAtaques}`);
    }
}

let matheus = new Heroi("Matheus",19,"guerreiro")
matheus.atacar()

let heroi2 = new Heroi("João",29,"NINJA")
heroi2.atacar()