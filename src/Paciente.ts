export class Paciente{
    nome: string;
    caso: string;
    planodesaude: string;
    idade : Number;

    constructor(
        nome: string,
        caso: string,
        planodesaude: string,
        idade : Number,
    ){
        this.nome = nome
        this.caso = caso
        this.planodesaude = planodesaude
        this.idade = idade
        
    }

    verDados(){
        console.log(`O nome do Paciente é: ${this.nome}, \nA O caso do Paciente é de: ${this.caso}, \n A cor do Patinete é: ${this.planodesaude}, \n O ano do Patinete é ${this.idade}, `)
    }}

