        /*Atora: Aline Herculano
        * *Atividade 10 
        
        * * Criar o Objeto:
        * Aluno1(propriedades: RA, Nome).
        * Atribua valores para as propriedades.
        * * Utilizar 3 formas diferentes
        * * Disponibilizar como Atividade10 no GITHUB.
        * * -> Seunome/PWEB/Atividade10
        * */

//1ª forma:
aluno1 = new Object();//usando construtor
aluno1.ra = "123000";
aluno1.nome = "Antônio Carlos";//cria propriedade e atribui valor

//2ª forma:
var aluno2 = {}; //o mesmo que newObject() 
aluno2.ra = '456000';
aluno2.nome = 'Ana Carolina';

//3ª forma: 
var aluno3 = { ra: "789000", nome: "Gabriel Luiz"}; //cria propriedade e atribui 

alert("Nome: " + aluno1.nome + "\n" + "RA: " + aluno1.ra)
alert("Nome: " + aluno2.nome + "\n" + "RA: " + aluno2.ra)
alert("Nome: " + aluno3.nome + "\n" + "RA: " + aluno3.ra)

