
//Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
    arr.sort((a,b)=>b-a)
    return arr.reduce((sum, _, currentIndex)=>{
      if(arr.length-1 == currentIndex){
        return sum
        }
      return sum + (arr[currentIndex] - arr[currentIndex+1])
    }, 0)
  }
