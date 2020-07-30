//pre-existing function from previous exercise

const transpose = (matrix) => {
    let newMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push([]);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix.length === 1) {
                newMatrix.push([matrix[i][j]]);
            } else {
                newMatrix[j].push(matrix[i][j]);
            }
        }
    }
    return newMatrix;
}; //pre-existing function from previous exercise

const wordSearch = (letters, word) => {
    if (!word || !letters) { //will immediately return false if value is falsey
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(horizontalJoin);


    const findWord = (lines) => {
        let wordFound = true;

        for (let line of lines) {
            { //for each new string made from joining array
                for (let letter of line) {
                    if (letter === word[0]) {
                        { //loops through the string to see if any characters match first letter of word
                            let slicedString = line.slice(line.indexOf(letter));  //cut off all letters before first letter of word

                            for (i = 0; i < word.length; i++) { //loop through remaining string for word length
                                if (slicedString[i] !== word[i]) {//sets false and moves to next word at first non-matching character
                                    wordFound = false;
                                    break; //this is what skips words
                                } else {
                                    wordFound = true; //this will be true at end of word if no non-matching characters
                                }
                            }
                            if (wordFound) { //returns true as soon as matching word is found
                                return true;
                            }
                        }
                    }
                }
            };

            if (findWord(horizontalJoin) || findWord(verticalJoin)) { //will be true if found either horizontally or vertically
                return true;
            } else {
                return false; //otherwise false
            }
        };


        module.exports = wordSearch;