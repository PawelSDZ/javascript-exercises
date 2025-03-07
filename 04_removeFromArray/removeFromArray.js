const removeFromArray = function(array,...moreRemovals) {
    for (argument of moreRemovals) {
        if (array.includes(argument)) {
            removalIndex = array.indexOf(argument);
            array.splice(removalIndex,1);
            if (array.indexOf(argument) != -1 ) {
                removalIndex = array.indexOf(argument);
                array.splice(removalIndex,1);
        }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
