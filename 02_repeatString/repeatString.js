const repeatString = function(string, num) {
    let repeatedString = "";
    if (num < 0) {
        return "ERROR";
    };

    for (num; num > 0; num--) {
        repeatedString = repeatedString.concat(string);
    };
    
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
