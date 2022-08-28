// //naive search algo

// const search = (val, arr) => { 
//     for(let i = 0; i < arr.length; i++){
//         if (val === arr[i]){
//             console.log(i)
//             //took 7 loops - not efficient imagine if you had 10,000,000
//             //best case scenario is the first index is the val you are looking for
//             //worst case is the last index is the val you are looking for 
//             //or that it isn't in the arr at all :(
//             return i;
//         }
//     }
//     return -1
// }

// const binary = (val, arr) =>{
//     //take full arr cut in half and check and see if val is in the left half or right half
//     //always deal with the lower and upper limits
//     let lower = 0;
//     //11-1=10 
//     let upper = arr.length - 1;
//     //keep iterating as long as the lower boundary is <= upper boundary
//     while(lower <= upper){
//         console.log("try")
//         //each iteration take the lower (0) and upper (10) and check the value right in the middle
//         //here we use Math.floor bc if you had 9 elements 9/2 = 4.5 so we will check 4th element
//        // 0 + (10-0)/2 = 5
//         const middle = lower + Math.floor((upper-lower)/2)
//         if(val === arr[middle]){
//             //return middle index if val is the middle
//             return middle;
//         }
//         //if not in  middle it's on the left or right side of the middle
//         if(val < arr[middle]){
//             //reset upper limit to be one left of the middle
//             upper = middle - 1;
//         } else {
//             //set lower limit set to the right
//             lower = middle + 1;
//         }
//     }
//     return -1
// }







const binarySearch = (val, arr)=>{
    let low = 0;
    let upper = arr.length-1;
    while(low <= upper){
        console.log('try')
        let middle = low + Math.floor((upper-low)/2)
        if(val === middle) {
            return middle
        }
        if(val < arr[middle]){
            upper = middle - 1
        }
        else{
            low = middle + 1
            
        }
    }
    return -1
}



// 
 
 
const valarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch2(8, valarr))