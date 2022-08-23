//naive search algo

const search = (val, arr) => { 
    for(let i = 0; i < arr.length; i++){
        if (val === arr[i]){
            console.log(i)
            //took 7 loops - not efficient imagine if you had 10,000,000
            //best case scenario is the first index is the val you are looking for
            //worst case is the last index is the val you are looking for 
            //or that it isn't in the arr at all :(
            return i;
        }
    }
    return -1
}


const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(search(7, values))