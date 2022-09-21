//Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe,
// em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as
// informações deste objeto no console.

import { CLiente } from "./src/client1";
import { Funcionario } from "./src/funcionario";

//let client1 = new client1()

//client1.nome
//client1.aniversario
//client1.endereço
//client1.ultimacompra

//console.log(`O nome do cliente é ${client1.nome} comemora o aniversário em ${client1.aniversário} mora na ${client1.endereço} e a ultima compra foi em `)

/*let pessoa2 = new Pessoadois("Liza", "054.846.235.28", "48.784.168-x", "Embu das Trevas", 26 )

pessoa2.verDados()*/

let clienteUm = new CLiente ("Ana", "feminino", "São Paulo", 25, "25 de Dezembro");

clienteUm.verDados ();

