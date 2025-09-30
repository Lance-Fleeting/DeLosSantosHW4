function myArray(arr) {
    return{
        firstElement: arr[0],
        lastElement:  arr[arr.length-1],
        length: arr.length
    }


}

let numArray = [10, 20, 30, 40, 50, 60]
const arr = numArray

console.log(myArray(arr))


