import { Animal } from "./src/Animal"

export class Preguiça extends Animal{


    constructor(
        nome: string,
        idade: number,

    ){
        super(nome, idade)


    }
    VerPreguiça(){
        console.log (`O nome da preguiça é ${this.nome}, \nA idade da preguiça é ${this.idade}`)
    }
    Som(){
        console.log("som de silêncio e sono")
    }
    SubirArvores(){
        console.log("A preguiça subiu na árvore")
    }
}