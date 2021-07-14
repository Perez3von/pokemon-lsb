import { pokemondata } from './pokemon data/pokemondata.js';

export function renderPokemonToElements(ele_A, ele_B, pair){


    let pokemon_image_one = document.createElement('img');
    let pokemon_image_two = document.createElement('img');

    let pokemon_name_one = document.createElement('span');
    let pokemon_name_two = document.createElement('span');

    ele_A.appendChild(pokemon_image_one);
    ele_B.appendChild(pokemon_image_two);
    ele_B.appendChild(pokemon_name_two);
    ele_A.appendChild(pokemon_name_one);

    console.log('in here');

}

export function updatePokemonImages(ele1, ele2, pair){

    ele1.src = pair[0]['url_image'];
    ele1.style.height = '150px';
    ele1.style.width = '150px';
    ele1.textContent = pair[0]['pokemon'];
   
    ele2.textContent = pair[1]['pokemon'];
    ele2.src = pair[1]['url_image'];
    ele2.style.height = '150px';
    ele2.style.width = '150px';

}


export function randomNum(arr){

    let data_size = arr.length - 1;

    return Math.floor(Math.random() * data_size) + 1;
}

export function pokemonPair(arr){

    let pair = [];
    let num1 = randomNum(arr);
    let num2 = randomNum(arr);

    while (num1 === num2){

        num2 = randomNum(arr);
    }
    //console.log(num1, num2);
    pair.push(arr[num1]);
    pair.push(arr[num2]);
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