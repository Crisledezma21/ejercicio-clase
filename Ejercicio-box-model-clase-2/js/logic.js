console.log('LOGIC');
var element = document.getElementById('image');

var texto = document.getElementById('texto');

var paragraphList = document.getElementsByTagName('p');
console.log('getElementsByTagName',paragraphList);

var paragraphListClass = document.getElementsByClassName('paragraph');
console.log('getElementsByClassName', paragraphListClass);

//Como agregar CSS a un elemento
texto.classList.add('title');