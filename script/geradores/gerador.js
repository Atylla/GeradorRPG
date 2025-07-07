import { npcData } from "../itens-geradores/npc.js"

const dadosGerador = {
    npc: npcData,
}

export const btnGerador = () => {
    const botao = document.querySelector('button[data-tipo]');

    if (!botao) {
        console.warn('Botão de gerar não encontrado!');
        return;
    }

    botao.addEventListener('click', (e) => {
        const tipo = e.target.dataset.tipo;
        const data = dadosGerador[tipo];

        if (data) {
            gerador(data);
        } else {
            console.warn(`Não há dados para o tipo: "${tipo}"`);
        }
        console.log('executanod botao')
    })
}


export const gerador = (dataObj) => {

    const elements = document.querySelectorAll('[class^="add-"]');

    elements.forEach(el => {
        const classes = Array.from(el.classList);
        const classeAlvo = classes.find(c => c.startsWith('add-'));
        const chave = classeAlvo?.split('add-')[1];

        if(dataObj[chave]){
            const valor = dataObj[chave][Math.floor(Math.random() * dataObj[chave].length)];
            el.textContent = valor;
        }
    });
};


/*
export const gerador = (obj) => {
    const result = {};

    for(const chave in obj){
        const array = obj[chave];
        const random = array[Math.floor(Math.random() * array.length)];
        result[chave] = random;
    }

    return result;
}
    */