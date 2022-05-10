/**
 * Autora: Aline Herculano
 * Atividade 9 - Programação Web  
 */

 function maior(num1,num2,num3){


     if(num1 > num2 && num1 > num3){
         return("O Maior valor é: " + num1);
     }
     else if(num2 > num1 && num2 > num3){
         return("O Maior valor é: " + num2);
     }
     else{
         return("O Maior valor é: " + num3);
     }
 }

function crescente(a, b){
    
  return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}

 var num1, num2, num3;

     num1 = parseFloat(prompt("Digite o primero valor: "));
     num2 = parseFloat(prompt("Digite o segundo valor: "));
     num3 = parseFloat(prompt("Digite o terceiro valor: "));

     numeros = [num1,num2,num3];
     numeros.sort(crescente);

     alert(maior(num1,num2,num3));
     alert("Ordem Crescente: " + numeros);

 
