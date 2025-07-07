import { npcData } from "../itens-geradores/npc"

export const npcGerador = (npc) => {
    const result = {};

    for(const chave in npc){
        const array = npc[chave];
        const random = array[Math.floor(Math.random() * array.length)];
        result[chave] = random;
    }

    return result;
}