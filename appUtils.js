

import { searchPokeDex } from './localstorage/bagUtils.js';
import { getHistory } from './localstorage/lastPokemonUtils.js';
import { pokemondata } from './pokemon data/pokemondata.js';


export function renderPokemonToElements(ele_A, ele_B, ele_c, pair){

    let pokemon_image_one = document.createElement('img');
    let pokemon_image_two = document.createElement('img');
    let pokemon_image_three = document.createElement('img');

    let pokemon_name_one = document.createElement('span');
    let pokemon_name_two = document.createElement('span');
    let pokemon_name_three = document.createElement('span');
    
    let pokemon_input_one = document.createElement('input');
    let pokemon_input_two = document.createElement('input');
    let pokemon_input_three = document.createElement('input');


    pokemon_input_one.setAttribute('type', 'radio');
    pokemon_input_one.setAttribute('name', 'pokemon');
    pokemon_input_one.setAttribute('value', pair[0]['species_id']);

    pokemon_input_two.setAttribute('type', 'radio');
    pokemon_input_two.setAttribute('name', 'pokemon');
    pokemon_input_two.setAttribute('value', pair[1]['species_id']);

    pokemon_input_three.setAttribute('type', 'radio');
    pokemon_input_three.setAttribute('name', 'pokemon');
    pokemon_input_three.setAttribute('value', pair[2]['species_id']);


    pokemon_image_one.src = pair[0]['url_image'];
    pokemon_image_one.style.height = '150px';
    pokemon_image_one.style.width = '150px';

    pokemon_image_two.src = pair[1]['url_image'];
    pokemon_image_two.style.height = '150px';
    pokemon_image_two.style.width = '150px';

    pokemon_image_three.src = pair[2]['url_image'];
    pokemon_image_three.style.height = '150px';
    pokemon_image_three.style.width = '150px';

    pokemon_name_one.textContent = pair[0]['pokemon'];
    pokemon_name_two.textContent = pair[1]['pokemon'];
    pokemon_name_three.textContent = pair[2]['pokemon'];
    
    ele_A.appendChild(pokemon_input_one);
    ele_A.appendChild(pokemon_image_one);
    ele_A.appendChild(pokemon_name_one);
    
    ele_B.appendChild(pokemon_input_two);
    ele_B.appendChild(pokemon_image_two);
    ele_B.appendChild(pokemon_name_two);

    ele_c.appendChild(pokemon_input_three);
    ele_c.appendChild(pokemon_image_three);
    ele_c.appendChild(pokemon_name_three);
}


export function randomNum(arr){

    let data_size = arr.length - 1;

    return Math.floor(Math.random() * data_size) + 1;
}

export function pokemonPair(arr){

    let pair = [];
    let num1 = randomNum(arr);
    let num2 = randomNum(arr);
    let num3 = randomNum(arr);

    while (num1 === num2 || num1 === num3 || num2 === num3){

        num2 = randomNum(arr);
        num3 = randomNum(arr);
    }
    
    pair.push(arr[num1]);
    pair.push(arr[num2]);
    pair.push(arr[num3]);

    return pair; 
}

export function compareTypes(arr){

    let pokemon_one_type = arr[0]['type_1'];
    let pokemon_two_type = arr[1]['type_1'];
    let status = true;

    if (pokemon_one_type === pokemon_two_type){
        status = false;
    }
    return status;

}

export function renderLastSeenImages(ele){
    let history = getHistory();
    let pokemon_image_one = document.createElement('img');
    let pokemon_image_two = document.createElement('img');
    let pokemon_image_three = document.createElement('img');
    
    let x = searchPokeDex(pokemondata, history[0][0].id);
    let y = searchPokeDex(pokemondata, history[0][1].id);
    let z = searchPokeDex(pokemondata, history[0][2].id);
    
    pokemon_image_one.src = x['url_image'];
    pokemon_image_one.style.height = '50px';
    pokemon_image_one.style.width = '50px';

    pokemon_image_two.src = y['url_image'];
    pokemon_image_two.style.height = '50px';
    pokemon_image_two.style.width = '50px';

    pokemon_image_three.src = z['url_image'];
    pokemon_image_three.style.height = '50px';
    pokemon_image_three.style.width = '50px';

    ele.appendChild(pokemon_image_one);
    ele.appendChild(pokemon_image_two);
    ele.appendChild(pokemon_image_three);
}