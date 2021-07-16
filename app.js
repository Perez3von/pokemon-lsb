import { addToBag } from './localstorage/bagUtils.js';
import { pokemondata } from './pokemon data/pokemondata.js';
import { pokemonPair, renderLastSeenImages, renderPokemonToElements } from './appUtils.js';
import { addToHistory, getHistory } from './localstorage/lastPokemonUtils.js';


const pokemon_one = document.getElementById('pokemon-one');
const pokemon_two = document.getElementById('pokemon-two');
const pokemon_three = document.getElementById('pokemon-three');
const last_seen = document.getElementById('last-caught-pokemon-name');
const last_seen_text = document.getElementById('last-caught-messsage');
const view_pokemon_btn = document.getElementById('view-pokemon-btn');
let pair = pokemonPair(pokemondata);
let history = getHistory();

//addToBag(pair[0].species_id);

view_pokemon_btn.addEventListener('click', ()=>{

    const user_selected_item = document.querySelector('input[type=radio]:checked');
    const user_item = user_selected_item.value;
    addToBag(Number(user_item));
    location.reload();

});

if (history.length === 2){
    let count = compare(history, pair);
    if (count === 3){
        pair = pokemonPair(pokemondata);
        addToHistory(pair);
        renderPokemonToElements(pokemon_one, pokemon_two, pokemon_three, pair);
        renderLastSeenImages(last_seen, history);
       
    }
    else {
        addToHistory(pair);
        last_seen_text.textContent = 'LAST SEEN POKEMON';
        last_seen.textContent = `${history[1][0].pokemon_name}  ${history[1][1].pokemon_name}  ${history[1][2].pokemon_name}`;
        renderPokemonToElements(pokemon_one, pokemon_two, pokemon_three, pair);
        renderLastSeenImages(last_seen);
        
    } 
}
else if (history.length === 1){
    let count = compare(history, pair);
    if (count === 3){
        pair = pokemonPair(pokemondata);
    }
    else {
        last_seen_text.textContent = 'LAST SEEN POKEMON';
        last_seen.textContent = `${history[0][0].pokemon_name}  ${history[0][1].pokemon_name}  ${history[0][2].pokemon_name}`;
        addToHistory(pair);
        renderPokemonToElements(pokemon_one, pokemon_two, pokemon_three, pair);
        renderLastSeenImages(last_seen, history);
    }
}
else {
    addToHistory(pair);
    renderPokemonToElements(pokemon_one, pokemon_two, pokemon_three, pair);
}



function compare(hist, curr){
    let arr = hist[0];
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
  
        for (let j = 0; j < curr.length; j++){

            if (arr[i].pokemon_name === curr[j].pokemon){
             
                counter = counter + 1;
            }
        }
    }
    return counter;
}



