const verifyPrime = (num)  => {
    let res
    num % 2 !== 0 ? res = true : res = false
    return res
}

const primefactors = num => {
    let factors = []
    for(let i=0; i<=num; i++) {
        if(num % i === 0) {
            factors.push(i)
        }
    }
    return factors.join(', ')
}
const fibonacciSequence = num => {
    let preNumbers = [0, 1]
    for(let i=2; i<num; i++) {
        preNumbers.push(preNumbers[i-1] + preNumbers[i-2])
    }
    return preNumbers.join(', ')
}
const greatestCommonDivisor = (num1, num2) => {
    let factors = []
    let greaterNumber = Math.max(num1, num2)
    for(let i=0; i<=greaterNumber; i++) {
        if(num1 % i === 0 && num2 % i === 0) {
            factors.push(i)
        }
    }
    return Math.max(...factors)
} 

const removeArrayDuplicates = arr => {
    let newArr = []
    arr.forEach((el) => {
        const getIndex = newArr.indexOf(el)
        if(getIndex === -1) {
            newArr.push(el)
        }
    })
    return newArr.sort((a, b) => a - b)
}
const mergeSortedArr = (arr1, arr2) =>  [...arr1, ...arr2].sort((a,b) => a - b)    
const swap = a => b => {
    [a, b] = [b, a];
    return `a: ${a} b: ${b}`
}
const reverse = str =>  str.split('').reverse().join('')

const reverseWords = str =>  str.split('').reverse().join('')

const reversInPlace = str => {
    let strArr = str.split(' ')
    for(let i=0; i<strArr.length; i++) {
        strArr[i] =  strArr[i].split('').reverse().join('')
    }
    return strArr.join(' ')
}

const firstNonRepeatingChar = str => {
    let obj = {}
    for(let i=0; i<str.length; i++) {
        if(str[i] !== ' ') {
            obj[str[i]] =  obj[str[i]] + 1 || 0
        }
    }
    for(let j in obj) {
        if(obj[j] === 0)  return j
    }
}

const removeStringDuplicateChars = str => {
    let obj = {}
    for(let i=0; i<str.length; i++) {
        if(str[i] !== ' '){
            obj[str[i]] = obj[str[i]] + 1 || 0
        }
    }
    let pureString = ''
    for(let j in obj) {
        if(obj[j] === 0) {
            pureString += j
        }
    }
    return pureString
}

const palindrome = str => str === str.split('').reverse().join('')

const generateRandomNumbers = min => max => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const findMissingNumber = arr => {
    const sortedArray = Array.from(new Set([...arr].sort(function(a, b){return a-b})));
    for(let i=0; i<sortedArray.length; i++){
        if(sortedArray[i] + 1 !== sortedArray[i + 1]) {
            return sortedArray[i] + 1
        }
    }
}

const sumFinder = arr => sum => {
    const sortedArray = Array.from(new Set(arr.sort(function(a, b){return a-b})));
    for(let i=0; i<sortedArray.length; i++) {
        for(let j=1; j<sortedArray.length; j++) {
            const foundSum  = sortedArray[i] + sortedArray[j]
            if(foundSum === sum) {
                return true
            }
        }
    }
    return false
}
const largestSumTwo = arr => {
    const sortedArr = Array.from(new Set(arr.sort(function(a, b){return a-b})))
    return sortedArr[sortedArr.length - 1]  + sortedArr[sortedArr.length - 2]
}

const numberOfZeros = num => {
    return (num / 10) + 1
}
function smallestIntergerNotInArray(A) {
    var min = 1;
    A.sort(function(a,b){
       // Sort the array explicit way
       return a - b; 
    });

    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
               min++;
        }
    }

    return min;
}
const binaryGap = n => {
    let base2Val = n.toString(2)
    let countArr = []
    let count = 0 
    for(let i=0; i<base2Val.length; i++){
        if(base2Val[i] == 0) {
            count += 1
        }
        if(base2Val[i] == 1) {
            countArr.push(count)
            count = 0
        }
    }
    return Math.max(...countArr)
}

function cyclicRotationArray(A, K) {
    let count = 0
    for(let i=0; i<A.length; i++) {
        if(K >= A.length) {
            K = K % A.length
        }
        if (K == 0) return A;
        if(count < K) {
            let lastItem = A[A.length - 1]
            A.pop()
            A.unshift(lastItem)
            count++
        }
    }
    return A
}
function unPairedValue(A) { // Inefficient solution
    let obj = {}
    for(i in A) {
        obj[A[i]] = obj[A[i]] + 1 || 1
    }
    for(key of Object.keys(obj)) {
        if(obj[key] == 1) {
            return parseInt(key)
        }
    }
}
function unpairedValue(A) { // Efficient solution
    stack = new Object();
    for (let i = 0; i < A.length; i++){
        if (stack.hasOwnProperty(A[i])) {
            delete stack[A[i]]; 
        } else {
            stack[A[i]] = 1;
        }
    }
    solution = Object.keys(stack);
    return parseInt(solution[0]);
}

function frogJump(X, Y, D, jump=0) {  // Recursive solution
    if(X < Y) {
        let newPos = X + D
        let newJump  = jump  + 1
        return frogJump(newPos, Y, D, newJump)
    }else {
        return jump
    }
}
function frogJmp(X, Y, D, jump=0) {  // Effiicient solution
    return Math.ceil((Y-X)/D)
}
function missingElement (A) { // Inefficient solution
    if(A.length < 1 || !A) return 1
     A.sort((a,b) => a - b)
    for(let i=0; i<=sortedArr.length; i++) {
        if(A[i+1] !== A[i] + 1) {
            return A[i] + 1
        }else {
            continue
        }
    }
}
function missingElemen (A) { // Efficient solution
    if (A.length === 0 || !A) {
        return 1;
    }

    A.sort((a, b) => a - b);
    let count = A[0];
    if (count !== 1) { return 1 }
    for (let i = 0; i <= A.length; i++) {
        if (A[i + 1] === count + 1) {
            count ++;
            continue
        }
        return count + 1;
    }
}
function TapeEquilibrium(A) {   // Ineffificient solution
    let secondIndex = 1
    let sums = []
    for(let i=0; i<A.length; i++) {
        if(i == (A.length -2)) return Math.min(...sums) 
        const firstArr = A.slice(0, secondIndex)
        let firstSum = firstArr.reduce((acc,cur) => acc += cur, 0)
        const secondSum = A.slice(secondIndex).reduce((acc,cur) => acc += cur, 0)
        const abSum = Math.abs(firstSum - secondSum)
        sums.push(abSum)
        secondIndex++
    }
}
function TapeEquilibriu(A){ // Efficient Solution
    let left = A[0];
    let right = 0;    
    for (let i = 1; i < A.length; i++){
        right += A[i]
    }
    let min = Math.abs(left - right);
    for (let i = 1; i < A.length-1; i++){
        left += A[i];
        right -= A[i];
        if (min > (Math.abs(left - right))) {
            min = Math.abs(left - right);
        }
    }
    return min;
}
function frogRiverOne(X, A) {
    let holdValues = new Set();
     for(i=0;i<A.length;i++) {
         holdValues.add(A[i]);
         if(holdValues.size == X)  return i;
     }
     return -1;
 }

//  Check if a string contains all the letters of the alphabets
function isPangram(string){
  let newObj = {}
  for(let i=0; i<string.length; i++) {
    if(string[i] !== ' ' &&  string[i] !== ".") {
       newObj[string[i]] = newObj[string[i]] + 1 || 0
    }
  }
  if(Object.keys(newObj).length < 26) {
    return false
  }else {
    return true
  }
}
 
module.exports =  {
    verifyPrime,
    primefactors,
    fibonacciSequence,
    greatestCommonDivisor,
    removeArrayDuplicates,
    mergeSortedArr,
    swap,
    reverse,
    reverseWords,
    reversInPlace,
    firstNonRepeatingChar,
    removeStringDuplicateChars,
    palindrome,
    generateRandomNumbers,
    findMissingNumber,
    sumFinder,
    largestSumTwo,
    numberOfZeros,
    smallestIntergerNotInArray,
    binaryGap,
    cyclicRotationArray,
    unpairedValue,
    frogRiverOne
}

 