var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
function getPositives(arrayofNumbers) {
    for(var i = 0; i<arrayofNumbers.length; i++){
        if(arrayofNumbers[i] > 0){
            countPositives++;
        }
    }
    return countPositives;
}

getPositives(numbers);
getPositives(numbers);
    
console.log("there are " + countPositives + " positive values");
