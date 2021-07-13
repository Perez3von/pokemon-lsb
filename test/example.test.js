// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { existInLocalStorage } from "../localstorage/utils.js";
import { pokemondata } from "../pokemon data/pokemondata.js";

const test = QUnit.test;

test('testing if exist', (expect) => {
   
    const expected = true;
    
    
    const actual = existInLocalStorage('5cef3501ef6005a77cd4fd17');

    
    expect.equal(actual, expected);
});
