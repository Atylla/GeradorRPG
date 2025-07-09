import { npcData } from "../itens-geradores/npc.js"
import { tavernaData } from "../itens-geradores/taverna.js";

export const dadosGerador = {
    npc: npcData,
    taverna: tavernaData
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

            el.classList.remove('anima-preenchimento');

            void el.offsetWidth;

            el.classList.add('anima-preenchimento');
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