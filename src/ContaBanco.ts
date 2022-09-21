export class ContaBanco{
    nometitular: string;
    conta: Number;
    agencia: string;
    NomeBanco: string;
    saldo : Number;

    constructor(
        nometitular: string,
        conta: Number,
        agencia: string,
        NomeBanco: string,
        saldo : Number,
    ){
        this.nometitular = nometitular
        this.conta = conta 
        this.agencia = agencia 
        this.NomeBanco = NomeBanco
        this.saldo = saldo

    }

    verDados(){
        console.log(`O nome do Titular da Conta é: ${this.nometitular}, \n A Conta é: ${this.conta}, \n O dígito da conta é: ${this.agencia}, \n A idade do cliente é ${this.NomeBanco}, \n a última compra do cliente foi em ${this.saldo}`)
    }}