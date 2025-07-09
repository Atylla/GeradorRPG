


export const carregarPaginaInterna = async (pagina) => {

    const container = document.querySelector('#page--container');

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