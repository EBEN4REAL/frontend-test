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
    return Array.from(Array.prototype.sort.call(new Set([...arr])))

    // OR THIS
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

    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
            min++;
        }
    }

    return min;
}
const binaryGap = n => {
    let base2Val = n.toString(2)
    console.log(base2Val)
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
    console.log(countArr)
    return Math.max(...countArr)
}

function cyclicRotationArray(A, K) {
    let count = 0
    if(!A) return 0
    for(let i=0; i<A.length; i++) {
        if(K > A.length) {
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



/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 // Leetcode problems
 function reverseLinkedList(head) {
    let prev = null
    while(head !== null) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
};
function twoSum(nums, target) {
    let map = new Map
    for(let i=0; i<nums.length; i++){
        let complement = target - nums[i]
        if(map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
};
 function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0), currentHead = dummyHead, carry = 0
 
    while(l1 || l2) {
       let l1Val = l1 ? l1.val : 0
       let l2Val = l2 ? l2.val : 0
       let sum = l1Val + l2Val + carry
       
       carry = Math.floor(sum/10)
       if(sum > 9) {
           sum %= 10
       }
       currentHead.next = new ListNode(sum)
       currentHead = currentHead.next
       
       if(l1) {
           l1 = l1.next
        }
        if(l2) {
           l2 = l2.next
        }
    }
    return dummyHead.next
};


var reverseInterger = function (x) {
    if (x > Math.pow(2, 31) || x < Math.pow(-2, 31) || x === 0) return 0;

    let answer =
        x > 0
          ? parseInt(x.toString().split("").reverse().join(""))
          : parseInt(Math.abs(x).toString().split("").reverse().join("")) * -1;

    return answer < Math.pow(-2, 31) || answer > Math.pow(2, 31) - 1 ? 0 : answer;
};

var isPalindrome = function(x) {
    return x.toString().split('').join('') === x.toString().split('').reverse().join('')
};

var romanToInt = function(s) {

    let total = 0
    let prev
    
    const romans = {
        "I" : 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    for(let i=s.length-1; i>=0; i--) {
        let romFigure = s[i]
        
        if(prev && romans[romFigure] < romans[prev]) {
            total -= romans[romFigure]
        }else {
            total += romans[romFigure]
        }
        prev = romFigure
    }
     
     return total
 };

 var longestCommonPrefix = function(strs) {
    
    let longCommonPrefix = ""
    
    let index = 0
    
    if(strs === null || strs === [] || strs.length == 0) {
        return longCommonPrefix
    }
    
    for(char of strs[0]) {
        for(let i=1; i<strs.length; i++) {
            if(index > strs[i].length || strs[i].charAt(index) !== char) {
                return longCommonPrefix
            }
        }
        longCommonPrefix += char
        index++
    }
    
    return longCommonPrefix
};

function repeatedString(s, n) {
    
    const as = s.split("").filter(c => c === "a" ).length;
    const times = parseInt(n / s.length);
    const rest = n % s.length;
    
    const totalAs = times * as
        + s.slice(0, rest).split("").filter(c => c === "a").length
    
    return totalAs;
    
 }


 const isValidParentheses = function isValid(s) {
    const bracketsObj = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    
    let leftBracketStack = []
    
    for(let i=0; i<s.length; i++) {
        if(bracketsObj[s[i]]) {
            leftBracketStack.push(s[i])
        }else {
            const lastLeftBracket = leftBracketStack.pop()
            if(bracketsObj[lastLeftBracket] !== s[i]) return false
        }
    }
    return leftBracketStack.length == 0
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let dummyList = new ListNode(-1)
    let head = dummyList
    
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val){
            dummyList.next = l1
            l1 = l1.next
        }else {
            dummyList.next = l2
            l2 = l2.next
        }
        dummyList = dummyList.next
        
    }
     if(l1 !==null) {
        dummyList.next = l1
    }else {
        dummyList.next = l2
    }
    return head.next 
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicatesFromAnArray = function(nums) {
    
    if(nums.length === 0) return 0
    
    let p1 = 0
    
    for(let p2=1; p2<nums.length; p2++) {
        if(nums[p1] !== nums[p2]) {
            p1++
            nums[p1] = nums[p2]
        }
    }
    
    return p1 + 1
    
//     let sample = new Set(nums);
//     nums = [];
//     for(let i of sample){
//         nums.push(i);
//     }
    
//     return nums
    
};

var strStr = function(haystack, needle) {
    // Returns first index of the that matches the needle string  in haystack 
    if(needle === '') return 0
    
    if(haystack.match(needle)) {
        return haystack.match(needle).index
    }else {
        return  -1
    }
}    


// HACKERRANK SOLUTIONS
function sockMerchant(n, ar) {
    let sortedArr = ar.sort()
    let pairs = 0
    
    for(let i=0; i<sortedArr.length; i++) {
        if(sortedArr[i] === sortedArr[i+1]) {
            pairs++
            i++
        }
    }
    return pairs
}

function countingValleys(steps, path) {
    
    let valleys = 0
    let currentLevel = 0
    
    for(let i=0; i<path.length; i++) {
        if(path[i] === 'U') {
            currentLevel++
        }else {
            currentLevel--
        }
        if(currentLevel === 0 && path[i] === 'U') {
            valleys++
        }
    }
    return valleys
}
function jumpingOnClouds(c) {
    let jumps = 0
    for(let i=0; i<c.length-1;) {
        if(c[i+2] !== 1) {
            i += 2
        }else {
            i+=1
        }
        jumps++
    }
   
    return jumps
}

const deepCopyFunction = (obj) => {
    let clone, value, key
  
    if (typeof obj !== "object" || obj === null) {
      return obj 
    }
  
    clone = Array.isArray(obj) ? [] : {}
  
    for (key in obj) {
      value = obj[key]
      clone[key] = deepCopyFunction(value)
    }

    return clone
  }
 
  function countApplesAndOranges(s, t, a, b, apples, oranges) {

    const appsArr = apples.map(apple => a + apple)
    const orangesArr = oranges.map(orange => b + orange)
    
    let applesCount = 0
    let orangesCount = 0
    
    appsArr.forEach(app => {
        if(app >= s && app <= t) {
            applesCount++
        }
    })
    
    orangesArr.forEach(or => {
        if(or >= s && or <= t) {
            orangesCount++
        }
    })
    
}

function birthdayCakeCandles(candles) {
    const maxNum  = Math.max(...candles)
    return candles.filter(num => num === maxNum).length
}
function timeConversion(s) {
    const mode  = s.slice(s.length - 2)
    const timeStr = s.slice(0, s.length - 2)
    const timeStrArr = timeStr.split(":")
    let hour = parseInt(timeStrArr[0])
    
    if(mode == 'PM') {
        if(hour < 12) {
            hour = 12 + hour
            timeStrArr[0] = hour.toString()
        }
    }else {
        hour = hour < 10 ? "0" + hour.toString() : hour.toString()
        timeStrArr[0] = hour == 12 ? '00' : hour
    }
    
    return timeStrArr.join(':')
    
}

function intThousands(num) {
    if (num < 1) return 0
    
    let start = new StringBuilder()
    let end   = new StringBuilder()

    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            start.append('1')
        } else {
            start.append('0')
        }
        end = (parseInt(start) * 10) - 1
    }

    console.log(start.toString())
    console.log(end)
}

function StringBuilder(value) {
    this.strings = new Array("");
    this.append(value);
}

// Appends the given value to the end of this instance.
StringBuilder.prototype.append = function (value) {
    if (value) {
        this.strings.push(value);
    }
}

// Clears the string buffer
StringBuilder.prototype.clear = function () {
    this.strings.length = 1;
}

// Converts this instance to a String.
StringBuilder.prototype.toString = function () {
    return this.strings.join("");
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
    frogRiverOne,
    deepCopyFunction,
    intThousands
}
