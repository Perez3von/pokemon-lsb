
export const HISTORY = 'history';

export function getHistory(){

    let stringData = localStorage.getItem(HISTORY) || '[]';
    const data = JSON.parse(stringData);
    return data;

}

export function addToHistory(a){

    let history = getHistory();

    if (history.length === 2){

        history[0] = history[1];
        history[1] = a;

    }
    else {

        history.push(a);

    }

    localStorage.setItem(HISTORY, JSON.stringify(history)); 

}
