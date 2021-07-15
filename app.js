import { addToBag } from './localstorage/bagUtils.js';
import { pokemondata } from './pokemon data/pokemondata.js';
import { pokemonPair, renderPokemonToElements } from './appUtils.js';
import { addToHistory } from './localstorage/lastPokemonUtils.js';


const pokemon_one = document.getElementById('pokemon-one');
const pokemon_two = document.getElementById('pokemon-two');
//const view_pokemon_btn = document.getElementById('view-pokemon-btn');
let pair = pokemonPair(pokemondata);
renderPokemonToElements(pokemon_one, pokemon_two, pair);
addToHistory(pair);
addToBag(pair[0].species_id);


