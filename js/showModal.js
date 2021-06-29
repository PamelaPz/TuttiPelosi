const btnBarras = document.querySelector('#showModal');
const modalMenu = document.querySelector('#showHideClassName');
let estado = false;

btnBarras.addEventListener('click', () => {
    estado = !estado;
    if(estado) {
        modalMenu.classList.remove('display-none');
        modalMenu.classList.add('display-block');
    } else {
        modalMenu.classList.remove('display-block');
        modalMenu.classList.add('display-none');
    }
})