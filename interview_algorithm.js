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
        return a - b; 
    });
    for(let i=0; i<A.length; i++) {
        if(A[i] > -1 && A[i] == min) {
            min++
        }else {
            return min
        }
    }
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
    binaryGap
}

 