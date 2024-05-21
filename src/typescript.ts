// primitivos
let texto: string = "3000";
let valor: number = 3000;
let isPago: boolean = true;
let livre: any = "";

//arrays
const lista: number[] = [];
lista.push(12)

// Tipos personalizados(Type Alias)
type transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number
}

//Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: transacao  = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
  };