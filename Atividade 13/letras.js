/*

Autor: Aline Herculano - PWeb

Atividade 13 - Criar um Input Text e dois Input Checkbox. 

1º CheckBox - transforma o conteúdo do Input Text em letras maiúsculas. 
2º CheckBox - transforma o conteúdo do Input Text em letras minúscula.
*/

const toUpper = () =>{
      const input = document.body.querySelector('#inputText');
      input.value = input.value.toUpperCase();
};

const toLower = () =>{
      const input = document.body.querySelector('#inputText');
      input.value = input.value.toLowerCase();
};



