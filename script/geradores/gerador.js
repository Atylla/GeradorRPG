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

export const miniGerador = (tipo) => {
    const box = document.querySelector('.box--gerador');
    if (!box || !dadosGerador[tipo]) return;

    box.addEventListener('click', (e) => {
        const alvo = e.target.closest('.area--itens, .item-atributo');
        if (!alvo) return;

        const el = alvo.querySelector('p[class^="add-"]');
        if (!el) return;

        const classes = Array.from(el.classList);
        const classeAlvo = classes.find(c => c.startsWith('add-'));
        const chave = classeAlvo?.split('add-')[1];

        const lista = dadosGerador[tipo][chave];
        if (Array.isArray(lista)) {
            const novoValor = lista[Math.floor(Math.random() * lista.length)];
            el.textContent = novoValor;
            
            el.classList.remove('anima-preenchimento');
            void el.offsetWidth;
            el.classList.add('anima-preenchimento');
        }
    });
}


export const copiarGerador = () => {
    const geradorBox = document.querySelector('.box--gerador');
    if (!geradorBox) return;

    const tipo = document.querySelector('button[data-tipo]')?.getAttribute('data-tipo') || 'gerador';

    let texto = `${tipo} gerado\n`;

    const itens = geradorBox.querySelectorAll(':scope > .area--itens, :scope > .atributos .item-atributo');

    itens.forEach(item => {
        const labels = item.querySelectorAll('p');
        if (labels.length >= 2) {
            const chave = labels[0].textContent.trim();
            const valor = labels[1].textContent.trim();
            texto += `${chave.padEnd(16)} "${valor}"\n`;
        }
    });

    navigator.clipboard.writeText(texto).then(() => {
        alert('Conteúdo copiado!');
        console.log('Copiado:\n', texto);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}


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