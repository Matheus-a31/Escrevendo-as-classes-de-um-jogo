class Heroi{
    constructor(nome, idade, tipo ){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }
    atacar(){
        let ataque=""
        if (this.tipo.toLowerCase()==="mago"){
            ataque="magia"
        }else if(this.tipo.toLowerCase()==="guerreiro"){
            ataque="espada"
        }else if(this.tipo.toLowerCase()==="ninja"){
            ataque="shuriken"
        }else{
            ataque="ataque padrão"
        }
        console.log(`o ${this.tipo.toLowerCase()} atacou usando ${ataque}`)

    }
}

let matheus = new Heroi("Matheus",19,"guerreiro")
matheus.atacar()

let heroi2 = new Heroi("João",29,"NINJA")
heroi2.atacar()