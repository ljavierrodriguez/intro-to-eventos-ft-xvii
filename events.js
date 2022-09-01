/* 
Eventos
*/

/* function saludo(evento){
    console.log(evento.target.id)
    console.log("Hola desde Eventos")
} */

//let btnClickAqui = document.querySelector('#btnClickAqui');
//console.log(btnClickAqui);
//btnClickAqui.onclick = saludo;

/* 
btnClickAqui.addEventListener('click', saludo);
btnClickAqui.addEventListener('click', () => {
    console.log("Hola desde Listener");
});

btnClickAqui.addEventListener('click', (evento) => {
    console.log(evento.x);
    console.log(evento.y);
    saludo(evento);
});
 */

/* function mover(evento){
    evento.target.style.top = (Math.floor(Math.random() * 100) + 1) + "px";
    evento.target.style.left = (Math.floor(Math.random() * 100) + 1) + "px";
}

let box = document.querySelector('.box');
console.log(box);
box.addEventListener('mouseover', mover); */


let inputSearch = document.getElementById('search');
let pSearching = document.querySelector('.searching');

/* inputSearch.addEventListener('keyup', (evento) => {
    console.log(evento.key);
    pSearching.innerHTML += evento.key; 
}) */

/* inputSearch.addEventListener('change', (evento) => {
    console.log(evento.target.value);
    pSearching.innerHTML = evento.target.value; 
}) */

inputSearch.addEventListener('keyup', (evento) => {
    if (evento.key === 'Enter' && evento.target.value !== '') {
        pSearching.innerHTML = evento.target.value;
    }
})