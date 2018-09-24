const mergeSort = (arr) => {
    // if arr length = 1 return arr
    if(arr.length === 1){
        return arr
    }

    //find mid point
    let midPoint = Math.floor(arr.length/2)

    //make sub arr of left and right
    let leftSide = arr.slice(0, midPoint)
    let rightSide = arr.slice(midPoint)
    //return merge(ms both left and right)
    return merge(mergeSort(leftSide), mergeSort(rightSide))
}

const merge = (left, right) => {
    // make results arr
    let results = []
    let rightIndex = 0;
    let leftIndex = 0;
    //make counters for left and right

    //while left is less than length; right same
      while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            results.push(left[leftIndex])
            leftIndex++
        } else {
            results.push(right[rightIndex])
            rightIndex++
        }
      }
      //if left value is greater than right value
        //push left into value into results arr
      // else push right value into results arr


    return results.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
}

const binarySearch = (arr, value) => {
    //make left boundary
    var floorIndex = -1
    var ceilingIndex = arr.length
    // make right boundary

    //while left side + 1 is less than right side
      //find midpoint value
      while(floorIndex + 1 < ceilingIndex){
        let distance = ceilingIndex - floorIndex
        let mid = Math.floor(distance/2)
        let midIndex = floorIndex + mid
        let midValue = arr[midIndex]
        console.log(midValue, value)
        if(arr[midIndex] === value){
            return true
        } else if( arr[midIndex] > value){
            ceilingIndex = midIndex
        } else {
            floorIndex = midIndex
        }
      }
    return false
     //if value return true
     // if midpoint value > than value,
       // ceiling = midpoint value
    // else floor = midpoint value

  //return false
}



var easy = [1,2,3,4]
var list = [1,4,5,7,8,3,4,5,1,2,3,1,33,1111,1,222,3,1,4,5,6,7,8]
console.time('lol')
var sortedList = mergeSort(list)
//console.log(sortedList)
console.log(binarySearch(sortedList,1))
console.timeEnd('lol')
