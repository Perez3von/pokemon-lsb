
export const HISTORY = 'Previous Pokemon';
export const ALL_HISTORY = 'all history';
export function getHistory(){

    let stringData = localStorage.getItem(HISTORY) || '[]';
    const data = JSON.parse(stringData);
    return data;

}

export function getAllHistory(){

    let stringData = localStorage.getItem(ALL_HISTORY) || '[]';
    const data = JSON.parse(stringData);
    return data;

}

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


export function encounters(a){





}
