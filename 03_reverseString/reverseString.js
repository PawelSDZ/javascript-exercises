const reverseString = function(string) {
    const words = string.split(" ");
    reversedWords = [];
    for (let word of words) {
        reversedWords.push(word.split("").reverse().join(""));
    }
    reversedWords.reverse();
    return reversedWords.join(" ")
}
   

// Do not edit below this line
module.exports = reverseString;
