function deduplicateArray(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(arr[i+1], 1);
            // console.log(arr);
            continue;
        }else{
            continue;
        }
    }
    return arr;
}

arr1 = [1, 1, 2, 2, 3, 3, 3, 5, 5, 18];

console.log(deduplicateArray(arr1));