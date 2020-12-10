const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = function(text) {
    const letterCount = {};
    const letters = text.split('');
    letters.forEach(letter => {
       if (letterCount[letter]) {
           letterCount[letter]+= 1; //if the letter exits, add one to the counter
        } else {
            letterCount[letter] = 1;//else add the letter and assign a 1 value
        }

    });

    for (const string of ALPHABET) {
        if (!letterCount[string]){
            return false;
        }
    }
    return true;
};

module.exports = isPangram;