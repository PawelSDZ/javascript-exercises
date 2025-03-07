const sumAll = function(num1, num2) {
    if (
        ((num1 || num2) < 0) ||
        ((num1 || num2) % 1 !== 0) ||
        ((typeof num1 && typeof num2) !== "number")
    ){
        return "ERROR";
    }
    
    totalSum = 0;
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    for (let i = start; i <= end; i++){
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
