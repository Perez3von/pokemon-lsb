

export function renderPokemonToElements(ele_A, ele_B, pair){


    let pokemon_image_one = document.createElement('img');
    let pokemon_image_two = document.createElement('img');

    let pokemon_name_one = document.createElement('span');
    let pokemon_name_two = document.createElement('span');

    pokemon_image_one.src = pair[0]['url_image'];
    pokemon_image_one.style.height = '150px';
    pokemon_image_one.style.width = '150px';

    pokemon_name_one.textContent = pair[0]['pokemon'];
    pokemon_name_two.textContent = pair[1]['pokemon'];

    pokemon_image_two.src = pair[1]['url_image'];
    pokemon_image_two.style.height = '150px';
    pokemon_image_two.style.width = '150px';

    ele_A.appendChild(pokemon_image_one);
    ele_B.appendChild(pokemon_image_two);
    ele_B.appendChild(pokemon_name_two);
    ele_A.appendChild(pokemon_name_one);

    //console.log('in here');

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