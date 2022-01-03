const verb = ['redigerar', 'skriver', 'åldras', 'mår', 'trivas', 'sjunger', 'ljuger'];
const substantiv = ['Olle', 'farsan', 'kung', 'morbror', 'bror', 'farfar', 'servitör'];
const adjektiv = ['söt', 'fin', 'ful', 'elak', 'god', 'röd', 'blå', 'rolig', 'tråkig', 'stark', 'svag', 'glad', 'ledsen']; 
const adverb = ['snabbt', 'glatt', 'effektivt', 'smärtsamt', 'lätt', 'i hemlighet', 'tyst', 'lugnt', 'skickligt']


const buildSentance = () =>  {
    let string = '';

    string += substantiv[getRandom(substantiv)];
    string += ' är ';
    string += adjektiv[getRandom(adjektiv)];
    string += ' och ';
    string += verb[getRandom(verb)];
    string += ' ';
    string += adverb[getRandom(adverb)];


    console.log(string);

}

const getRandom = (array) => {
    return Math.floor(Math.random() * array.length); 
}

buildSentance();