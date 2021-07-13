import { pokemondata } from '../pokemon data/pokemondata.js';


export const BAG = 'Bag';

export function viewLocalStorage(){


    let stringData = localStorage.getItem(BAG) || '[]';
    const data = JSON.parse(stringData);
    return data;

    
}


export function getPokemonById(id){

    let pokemon_data = [];

    for (let data of pokemondata){
        
        if (data._id === id){
            pokemon_data.push(data);
            console.log(data);
        }
        else{

            //alert("pokemon doesnt exist");
        }

    }

    return pokemon_data;

}



export function existInLocalStorage(id){

    const data = viewLocalStorage();
    
    //const data = pokemondata;
    let check = false;
    
    for (let item of data){

        if (item._id === id){

            console.log('it exist', item._id);
            check = true;
        }
    }
    return check;

}


export function addToLocalStorage(id){


    let status = false;

    let data = viewLocalStorage();


    if (existInLocalStorage(id) === false){

        data.push(getPokemonById(id)[0]);
        status = true;
        
        localStorage.setItem(BAG, JSON.stringify(data));
        console.log(viewLocalStorage().length);

    }

    
    return status;



}





export function emptyLocalStorage(){


    localStorage.removeItem(BAG);



}