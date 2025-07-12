import { btnGerador, gerador, dadosGerador, copiarGerador, miniGerador } from "../geradores/gerador.js";


// functions
export const carregarPagina = async (pagina) => {

    const container = document.querySelector('#page--gerador');

    container.className = container.className
        .split(' ')
        .filter(c => !c.startsWith('pages--'))
        .join(' ');

    container.classList.add(`pages--${pagina}`);

    try {
        const res = await fetch(`../../pages/${pagina}.html`);
        const html = await res.text();

        container.innerHTML = html;

        switchPages(pagina);
        
    } catch (err) {
        console.error(`Erro ao carregar página "${pagina}":`, err)
    }
}

const switchPages = (pagina) => {
    switch (pagina) {
        case 'home':
            paginaHome(pagina);
            break;
        case 'npc':
            paginaNpc(pagina);
            break;
        case 'taverna':
            paginaTaverna(pagina);
            break;
        case 'cidade':
            paginaCidade(pagina);
            break;
        case 'reinos':
            paginaReinos(pagina);
            break;
        case 'enc-aleatorios':
            paginaEncAleatorios(pagina);
            break;
    }
}
const paginaHome = (pag) => {
    botaoAtivo(pag);
}
const paginaNpc = (pag) => {
    btnGerador();
    botaoAtivo(pag);
    setTimeout(() => {
        const btnCopiar = document.querySelector('#btn-copiar');

        if (btnCopiar) {
            btnCopiar.addEventListener('click', () => copiarGerador('npc'));
        }

        miniGerador('npc')
        gerador(dadosGerador['npc']);
    }, 100)
}
const paginaTaverna = (pag) => {
    btnGerador();
    botaoAtivo(pag);
    setTimeout(() => {
        const btnCopiar = document.querySelector('#btn-copiar');

        if (btnCopiar) {
            btnCopiar.addEventListener('click', () => copiarGerador('taverna'));
        }

        miniGerador('taverna');
        gerador(dadosGerador['taverna']);
    }, 100)
}
const paginaCidade = (pag) => {
    btnGerador();
    botaoAtivo(pag);
    setTimeout(() => {
        const btnCopiar = document.querySelector('#btn-copiar');

        if (btnCopiar) {
            btnCopiar.addEventListener('click', () => copiarGerador('cidade'));
        }

        miniGerador('cidade');
        gerador(dadosGerador['cidade']);
    }, 100)
}
const paginaReinos = (pag) => {
    btnGerador();
    botaoAtivo(pag);
}
const paginaEncAleatorios = (pag) => {
    btnGerador();
    botaoAtivo(pag);
}

const botaoAtivo = (pagina) => {
    document.querySelectorAll('nav button[data-page]').forEach(btn => {
        const page = btn.getAttribute('data-page');
        btn.classList.toggle('button-select', page === pagina);
    });
}