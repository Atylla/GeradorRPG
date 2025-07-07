import { carregarPagina } from "./app/router.js";

carregarPagina('home');


// Events
document.querySelectorAll('nav button[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
        const pagina =btn.getAttribute('data-page');
        carregarPagina(pagina);
    });
});