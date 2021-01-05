/***** verify  prime number ***/
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
const funcObjs = {
    verifyPrime,
    primefactors,
    fibonacciSequence,
    greatestCommonDivisor,
    removeArrayDuplicates,
    mergeSortedArr
}


module.exports =  funcObjs;
 