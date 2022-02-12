const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
 };
 
 function decode(expr) {
    let result = '';
    
    for (let i = 0; i < expr.length; i = i + 10) {
        let tenChar = expr.substr(i, 10);

        if (tenChar === '**********') {
          result = result + ' '
        }
        else {
          let y = '';
          tenChar = tenChar.replace(/^0+/, '');
          for (let j = 0; j < tenChar.length; j = j + 2) {
             if (tenChar.slice(j, j + 2) === '10') {
                y = y + '.';
             } else {
                y = y + '-';
             }
          }
          
          for (let key in MORSE_TABLE) {
             if (key === y) {
                result = result + MORSE_TABLE[key];
             }
          }
       }
    }
    return result;
 }
 
 module.exports = {
    decode
 }