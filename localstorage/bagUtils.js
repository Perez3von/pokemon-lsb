import { pokemondata } from '../pokemon data/pokemondata.js';
export const BAG = 'Bag';

export function pokeBag(){

    let stringData = localStorage.getItem(BAG) || '[]';
    const data = JSON.parse(stringData);
    return data;

}
export function searchPokeDex(data, id){

    let pokedex = data;

    for (let i = 0; i < pokedex.length; i++){

        if (pokedex[i].species_id === id){
            
            return pokedex[i];
        }
    }
}

export function searchBag(data, id){
    let bag_data = data;

    for (let i = 0; i < bag_data.length; i++){

        if (bag_data[i].id === id){
            
            return bag_data[i];
        }
    }

}
export function addToBag(id){

    let current_bag = pokeBag(); //arr of obj

    let pokemon = searchBag(current_bag, id); //obj
    let poke_from_dex = searchPokeDex(pokemondata, id);
    

    if (pokemon){

        pokemon.caught += 1;
    }
    else { 
        const newPokemon = { pokemon_name:poke_from_dex.pokemon, id:id, caught:1 };
        current_bag.push(newPokemon);
    }

    localStorage.setItem(BAG, JSON.stringify(current_bag)); 

}
