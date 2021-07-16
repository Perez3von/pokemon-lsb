
export const HISTORY = 'Previous Pokemon';
export const ALL_HISTORY = 'all history';
export function getHistory(){

    let stringData = localStorage.getItem(HISTORY) || '[]';
    const data = JSON.parse(stringData);
    return data;

}

// export function getAllHistory(){

//     let stringData = localStorage.getItem(ALL_HISTORY) || '[]';
//     const data = JSON.parse(stringData);
//     return data;

// }

export function addToHistory(a){

    let history = getHistory();

    let newHistory = [
        {
            pokemon_name: a[0].pokemon,
            id: a[0].species_id,
            seen:0
        },
        {
            pokemon_name: a[1].pokemon,
            id: a[1].species_id,
            seen:0
        },
        {
            pokemon_name: a[2].pokemon,
            id: a[2].species_id,
            seen:0
        }

    ];
   
    if (history.length === 2){
        history[0] = history[1];
        history[1] = newHistory;
        
    }
    else {
    
        history.push(newHistory);
    }
    
    localStorage.setItem(HISTORY, JSON.stringify(history)); 

}
// export function addtoAllHistory(id){

//     let hist = getAllHistory();
//     let curr = getHistory();
//     let poke = searchHistory(curr[0], id);
//     let obj = searchHistory(hist, id);

//     if (obj){
//         obj.seen += 1;
//     }
//     else{

//         let newObj = {pokemon:poke['pokemon_name'], id:id, seen:0};
//         hist.push(newObj);
    
//     }

//     localStorage.setItem(ALL_HISTORY, JSON.stringify(hist));

// }



export function searchHistory(history, id){

    let hist = history;

    for (let i = 0; i < hist.length;i++){


        if (id === hist[i]){

            return hist[i];
        }
    }
    
}




// export function encounterUpdate(){

//     let hist = getAllHistory();
//     let curr = getHistory();
//     for (let i = 0; i < hist.length; i++){

//         for (let j = 0; j < curr[0].length; j++){

//             if (hist[i].id === curr[0][j].id){

//                 hist[i].seen += 1;
//             }
//         }

//     }
  
// }
