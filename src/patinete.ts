export class Patinete{
    nome: string;
    marca: string;
    cor: string;
    ano : Number;

    constructor(
        nome: string,
        marca: string,
        cor: string,
        ano : Number,
    ){
        this.nome = nome
        this.marca = marca
        this.cor = cor
        this.ano = ano
        
    }

    verDados(){
        console.log(`O nome do Patinete é: ${this.nome}, \nA marca do Patinete é: ${this.marca}, \n A cor do Patinete é: ${this.cor}, \n O ano do Patinete é ${this.ano}, `)
    }}

