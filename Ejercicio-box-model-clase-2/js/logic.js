console.log('LOGIC');
var element = document.getElementById('image');

var texto = document.getElementById('texto');

var paragraphList = document.getElementsByTagName('p');
console.log('getElementsByTagName',paragraphList);

var paragraphListClass = document.getElementsByClassName('paragraph');
console.log('getElementsByClassName', paragraphListClass);

//Como agregar CSS a un elemento
texto.classList.add('title');

let btn = document.getElementById('btn');
console.log('btn', btn);

btn.addEventListener('click', changeActive);

function changeActive() {
    console.log('click');
    let paragraph = document.getElementsByClassName('g-text');
    console.log('paragraph',paragraph);
    for(let i=0; i <= paragraph.length; i++) {
        console.log('indice',i); 
    }
}