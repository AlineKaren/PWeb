//Criar a função conta
function Conta(nomeCorrentista, nomeBanco, numConta, saldo){
    this.nomeCorrentista = nomeCorrentista;
    this.nomeBanco = nomeBanco;
    this.numConta = numConta;
    this.saldo = saldo;

    this.setNomeCorrentista = function (nome){
        nomeCorrentista = nome;
    }
    this.setNomeBanco = function (banco){
        nomeBanco = banco;
    }
    this.setNumConta = function(conta){
        numConta = conta;
    }
    this.setSaldo = function(vSaldo){
        saldo = vSaldo;
    }
    this.getnomeCorrentista = function(){
        return nomeCorrentista;
    }
    this.getNomeBanco= function(){
        return nomeBanco;
    }
    this.getNumConta = function(){
        return numConta;
    }
    this.getSaldo = function (){
        return saldo;
    }
}

//Criar a função conta corrente
function Corrente (salEspecial){
    this.salEspecial = salEspecial;

    this.setSalEspecial = function(valSaldoEsp){
        salEspecial = valSaldoEsp;
    }
    this.getSalEspecial = function (){
        return salEspecial;
    }
}

//Criar a função conta poupança
function Poupanca (juros, dataVencimento){
    this.juros = juros;
    this.dataVencimento = dataVencimento;

    
    this.setjuros = function (valJuros){
        juros = valJuros;
    }
    this.setdataVencimento = function (dataVenc){
        dataVencimento = dataVenc;
    }
    this.getjuros = function(){
        return juros;
    }
    this.getdataVencimento = function (){
        return dataVencimento;
    }
}

//criação do objeto Conta Corrente        
Corrente.prototype = new Conta();

var contaCorrente = new Corrente();

contaCorrente.setNomeCorrentista('Hermione Granger');
contaCorrente.setNomeBanco('Bansco Hogwarts');
contaCorrente.setNumConta('1000-2');
contaCorrente.setSaldo('15.000,00');
contaCorrente.setSalEspecial('10.000,00');

//Criação do Objeto Poupança
Poupanca.prototype = new Conta();

var contaPoupanca = new Poupanca();

contaPoupanca.setNomeCorrentista('Harry Potter');
contaPoupanca.setNomeBanco('Banco Grifinória');
contaPoupanca.setNumConta('0332-5');
contaPoupanca.setSaldo('90.000,00');
contaPoupanca.setjuros('0,5%');
contaPoupanca.setdataVencimento("16/05/2022");


document.getElementById('corrente').innerHTML = `CONTA CORRENTE:<br>Nome: ${contaCorrente.getnomeCorrentista()}<br>Banco: ${contaCorrente.getNomeBanco()}<br>Número da conta: ${contaCorrente.getNumConta()}<br>Saldo: R$ ${contaCorrente.getSaldo()}<br>Saldo especial: R$ ${contaCorrente.getSalEspecial()}<br>`


document.getElementById('poupanca').innerHTML = `CONTA POUPANÇA:<br>Nome: ${contaPoupanca.getnomeCorrentista()}<br>Banco: ${contaPoupanca.getNomeBanco()}<br>Número da conta: ${contaPoupanca.getNumConta()}<br>Saldo: R$ ${contaPoupanca.getSaldo()}<br>Juros: ${contaPoupanca.getjuros()}<br>Data de Vencimento: ${contaPoupanca.getdataVencimento()}`
