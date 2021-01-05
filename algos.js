
        // Reverse a string
        // Palindrome (reads same forward and reversed)
        // Reversing an integer
        // SENTENCE CAPITALIZATION
        // ANAGRAM
        // ARRAY CHUNKING
        // FIZZ BUZZ
        // FIBONNACCI
        // MAX CHARS
        // FACTORIAL
        // PYRAMID
        // FIND VOWELS
        // STEPS
        // SPIRAL MATRIX
        // RUNTIME COMPLEXITY

        /***** DATA STRUCTURES ***/
        // QUEUES
        // LINKED-LISTS
        // STACKS

        const quadraticFormular  = (a,b,c) => {
            const ac = (4*a*c)
            const x = (b * b);
            const sqrtPart =  x - ac
            const ans1 = ((-(b) + Math.sqrt(sqrtPart)) / (2*a)).toFixed(2);
            const ans2 = ((-(b) - Math.sqrt(sqrtPart)) / (2*a)).toFixed(2);
            console.log(ans1);
            console.log(ans2);

        }
        quadraticFormular(1, -5, 6)

         /***** Find the second minimum element of an array ***/

        function minElement(arr) {
            const minElement = arr.sort()[1]
            return minElement
        }
        console.log(minElement([0,2,3,1,5,4,7,8,9]))

        /*****  First non-repeating integers in an array ***/
        function firstNonRepeatingVals(arr) {
            let obj = {}
            for(let i=0; i<arr.length; i++) {
               obj[arr[i]] = obj[arr[i]] + 1 || 1
            }
            for(let char in obj) {
                if(obj[char] === 1) {
                    return char
                }
            }
           
        }
        console.log(firstNonRepeatingVals([0, 0, 1, 1, 4, 5,5,6]))

         /***** Rearrange positive and negative values in an array ***/
         function rearrangePosNeg(arr) {
            return [...arr].sort()
         }
         console.log(rearrangePosNeg([-1, 2, 0, 3,4, -3,-5, 6,7,8]))

        const fibonacciSequence = val => {
            let fibArr = [0,1];
            for(let i=2; i<val; i++){
                fibArr.push(fibArr[i-1] + fibArr[i-2])
            } 
            return fibArr;
        }
            
        console.log(fibonacciSequence(7))

        const mumbler = str => {
            const arr = []
            for(i=0; i<str.length; i++) {
                arr.push(`${str[i].toUpperCase()}${str[i].toLowerCase().repeat(i)}`)
            }
            return arr.join("-")
        }

        console.log(mumbler("Eben"))

        const largestFive = (str) => {
            let len = str.length;
            let ff = [];
            for(i = 0; i < len; i++){
                ff.push(str.substring(i, i + 5))
            }
            return ff.sort().reverse()[0];
        }

        console.log(largestFive("8949574857475645"))


        const isPalindrome = str => str.split("").reverse().join("") === str
        console.log(isPalindrome("cac"));

        // OR USING EVERY FUNCTION
        const palindrome = str => {
            return str.split('').every((el,i) => {
                console.log(str[str.length -i - 1])
                return el === str[str.length - i -1]
            })
        }

        console.log(palindrome("cac"))

        const  anagram = (s1, s2) => s1.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("") === s2.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("")
        console.log(anagram("anagram", 'nag a rams'))

        // OR Using character maps
        function buildChatMap(str) {
            const charMap = {}
            for(let char of str.replace(/[^\w]/g, '')) {
                charMap[char] = charMap[char] + 1 || 1
            }
            return charMap
        }
        function anagrams (strA, strB) {
            const aCharMap = buildChatMap(strA)
            const bCharMap = buildChatMap(strB)

            if(Object.keys(aCharMap).length  !== Object.keys(bCharMap).length) {
                return false
            }
            for(let char in aCharMap) {
                if(aCharMap[char] !== bCharMap[char]){
                    return false
                }
            }

            return true
        } 
        console.log(anagrams("anagram", 'nagaram'))
        // FIZZBUZZ
        const fizzBuzz =  () => {
            for(let i=1; i<=100; i++) {
                i % 3 == 0 ? console.log("fizz" + i) : i % 5 == 0  ? console.log("buzz" + i) : i % 3 == 0 && i % 5 == 0 ? console.log("fizzBuzz" + i) : null
            }
        }
        // fizzBuzz()
        // Reversed String without the reverse functio9n
        function reverse(str) {
            let reversed = ""
            for (let char of str) {
                reversed = char + reversed
                console.log(reversed)
            }
            return reversed
        }
        // console.log(reverse('Eben'))

        //OR USINMG REDUCE
        function reverseRed(str) {
            return str.split('').reduce((rev, char) => (char + rev), '')
        }
        console.log(reverseRed('Segun'))


        // Integer Reversal
        function reverseInteger(n) {
            const reversedInteger =  n.toString().split('').reverse().join('')
            if(n < 0) {
                return parseInt(reversedInteger) * -1
            }
            return parseInt(reversedInteger)
        }
            
        console.log(reverseInteger(500))



        // Characters and length maps
        const string = "Ebenezer"
        const chars = {}

        for(let char of string){
            !chars[char] ?  chars[char] = 1 : chars[char] += 1
        }
        console.log(chars)

        // Most frequently occuring number in a string
        function maxChar(str) {
            const obj = {}
            str.split('').forEach(el => {
                obj[el] = obj[el] + 1 || 1
            })
            let max = 0
            let maxChar = ''
            for(let char in obj) {
                if(obj[char] > max) {
                    max = obj[char]
                    maxChar = char
                }
            }
            return maxChar;
        }

        console.log(maxChar('Ebenezer'))

        // Array Chunking
        function chunk(array, size) {
            const chunks = []
            array.forEach(el => {
                const last = chunks[chunks.length - 1]
                if(!last || last.length === size) {
                    chunks.push([el])
                }else {
                    last.push(el)
                }
            })
            return chunks
        }

        // console.log(chunk([1,2,3,4,5,6,7,8,9], 2))

        // OR USING SLICE METHOD
        function chunk(array, size) {
            let chunked = []
            let index = 0;

            while(index < array.length) {
                chunked.push(array.slice(index, index + size))
                index += size
            }
            return chunked
        }
        console.log(chunk([1,2,3,4,5,6,7,8,9], 2))


        // SENTENCE CAPITALIZATION
        const capitalize =  str => (str.split(' ').map((el,i) =>  el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' '))
        // OR 
        const capital = str => {
            let strng = str[0].toUpperCase()
            console.log(strng)

            for(let i =1; i<str.length; i++) {
                if(str[i-1] === ' ') {
                    strng += str[i].toUpperCase()
                }else {
                    strng += str[i].toLowerCase()
                }
            }

            return strng
        }

        console.log(capital('i love going, home'))

        function stairCase(n)  {
            for(let row=0; row<n; row++) {
                let stair = ''
                for(let column = 0; column < n; column++) {
                    if(column <= row) {
                        stair += '#'
                    }else {
                        stair += ' '
                    }
                }
                console.log(stair)
            }
        }
        // stairCase(5)

        // OR using Recursion
        function steps(n, row = 0, stair = '') {
            if(n === row) {
                return;
            }
            if(n === stair.length){
                console.log(stair)
                return steps(n, row + 1)
            }
            if(stair.length <= row) {
                stair += '#'
            }else {
                stair += ' ' 
            }
            steps(n, row, stair)
         }

         // steps(6)

        function stepsPyramid(n) {
            let result = ''
            let base = ((2*n) -1)
            for(let i=1; i<=n; i++) {
                let pillars = (2*i) -1;
                let spaces = (base - pillars) / 2
                result += ' '.repeat(spaces) + '#'.repeat(pillars) + ' '.repeat(spaces)  + '\n'
            }
            console.log(result);
        }

         stepsPyramid(4)

         function stepsPyramidRecursion(n, row=1) {
            let pillars = ((2*row) - 1)
            let spaces = (((2*n) - 1) - pillars) / 2
            let result = ''

            if(row === n) {
                return '#'.repeat(pillars)
            }

            result += ' '.repeat(spaces) + '#'.repeat(pillars) + ' '.repeat(spaces) + '\n' +
            stepsPyramidRecursion(n, row + 1)

            return result

         }
         console.log(stepsPyramidRecursion(4))

         // Factorial
         const Factorial = (num) => {
            // with Recursion
            if(num <= 0) {
                return 1
            }else {
                return (num * Factorial(num - 1));
            }
            // without Recursion
            // let res = 1;
            // for(let i=num; i>1; i--){
            //     res = res * i
            // }
            // console.log(res)
         }

         console.log(Factorial(6))

         const vowels = str => {
            let vowelChars  = ['a', 'e', 'i', 'o', 'u'] 
            let vowelCount = 0
            for(let i=0; i<str.length; i++) {
                let index = vowelChars.indexOf(str[i].toLowerCase())
                if(index > -1) {
                    vowelCount += 1
                }
            }
            return vowelCount
         }

         function vowelsRecursive(str, vowelCount=0, i = 0) {
            let vols = ['a', 'e', 'i', 'o', 'u'] 
            let newStr = str.slice(i)
            if(i === (str.length - 1)) {
                if(vols.includes(newStr.toLowerCase())){
                    return vowelCount += 1
                }else {
                    return vowelCount
                }
            }
            if(vols.includes(newStr.toLowerCase()[0])) {
                vowelCount += 1
            }
            return vowelsRecursive(str.toLowerCase(), vowelCount, i + 1)
        }
         console.log(vowelsRecursive('Joshua'))

        function spiralMatrix(n) {
            let counter = 1
            let matrix = []
            let startRow = 0
            let endRow = n - 1
            let startColumn = 0
            let endColumn = n - 1
            for(let i=0; i<n; i++) {
                matrix.push([])
            }

            while(startColumn <= endColumn && startRow <= endRow) {
               
                // TOP ROW
                for(i=startColumn; i<=endColumn; i++){
                    matrix[startRow][i]  = counter
                    counter++
                }
                startRow++

                // RIGHT COLUMN
                for(i=startRow; i<=endRow; i++) {
                    matrix[i][endColumn] = counter
                    counter++
                }
                endColumn--

                // BOTTOM ROW
                 for(let i=endColumn; i>=startColumn; i--){
                    matrix[endRow][i] = counter
                    counter++
                }
                endRow--

                 // LEFT COLUMN
                for(i=endRow; i>=startRow; i--) {
                    matrix[i][startColumn] = counter
                    counter++
                }
                startColumn++

            }
           return matrix
        }
        console.log(spiralMatrix(3))

        function fib(n) {
            let arrInit = [0,1]
            for(let i=2; i<=n; i++) {
                arrInit.push(arrInit[i-2] + arrInit[i-1])
            }
           return arrInit[n]
        }
        
        // QUEUES
       class Queue {
            constructor() {
                this.data = [];
            }

            add(record) {
                this.data.unshift(record);
            }

            remove() {
                return this.data.pop();
            }
            
            peek() {
                return this.data[this.data.length - 1] //Last Element in the Queue
            }

            getQUeue() {
                return this.data
            }
        }

        function  weave(que_1, que_2) {
            const q = new Queue()
            while (que_1.peek() || que_2.peek()) {
                if(que_1.peek()) {
                    q.add(que_1.remove())
                }
                if(que_2.peek()) {
                    q.add(que_2.remove())
                }
            }
            return q
        }
       let queue_1 = new Queue()
       queue_1.add(1)
       queue_1.add(2)

       let queue_2 = new Queue()
       queue_2.add('HI')
       queue_2.add('THERE')

       const q = weave(queue_1,queue_2 )
       //console.log(q)

        // STACKS
       class Stack {
            constructor() {
                this.data = []
            }
            push(record) {
                this.data.push(record)
            }
            pop() {
                return  this.data.pop()
            }
            peek() {
                return this.data[this.data.length - 1]
            }
        }
       


        class StackQueue {
            constructor() {
                this.stackA = new Stack();
                this.stackB = new Stack();
            }

            add(record) {
                this.stackA.push(record)
            }

            remove() {
                while(this.stackA.peek()) {
                    console.log(this.stackA.pop())
                    this.stackB.push(this.stackA.pop())
                }
                const  record = this.stackB.pop()

                while(this.stackB.peek()) {
                    this.stackA.push(this.stackB.pop())
                }
                return record
            }
            
            peek() {
                while(this.stackA.peek()) {
                    this.stackB.push(this.stackA.pop())
                }
                const  record = this.stackB.peek()

                while(this.stackB.peek()) {
                    this.stackA.push(this.stackB.pop())
                }

                return record;
            }

            getStackA() {
                return this.stackA
            }
            getStackB() {
                return this.stackB
            }
        }


        const sq = new StackQueue()
        sq.add('Eben')
        sq.add(3)
        sq.add(4)
        sq.remove()
        console.log(sq.getStackA())
        console.log(sq.getStackB())

        /***** LINKED LISTS ***/
        /***** In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of 
         * 
         ****/ 
        class Node {
            constructor(data, next = null) {
                this.data = data
                this.next = next
            }
        }
        
        class LinkedList {
            constructor() {
                this.head = null
            }
            insertFirst(data) {
                this.head = new Node(data, this.head)
            }
            size() {
                let count = 0
                let node = this.head

                while(node) {
                    count++
                    node = node.next
                }
                return count
            }
            getFirst() {
                return this.head
            }
            getLast() {
                if(!this.head) {
                    return null
                }
                let node = this.head

                while(node) {
                    if(!node.next) return node
                    node = node.next
                }
            }
            clearList() {
                this.head =  null
                return this.head
            }
            removeFirst() {
                if(!this.head) {
                    return
                }
                this.head = this.head.next
            }
            removeLast() {
                if(!this.head) return
                if(!this.head.next) {
                    this.head = null
                }
                let node = this.head.next
                let prev = this.head
                while(node.next) {
                    prev = node
                    node = node.next
                }
                prev.next = null
            }
            insertLast(data) {
                let lastNode = this.getLast()
                if(lastNode) {
                    lastNode.next = new Node(data)
                }else {
                    this.head = new Node(data)
                }
            }
            getAt(index) {
                if(!this.head) return null
                let count = 0
                let node = this.head

                while(node) {
                    if(count === index) {
                        return node
                    }
                    count++
                    node = node.next
                }
            }
            removeAt(index) {
                if(index === 0)  {
                    this.head = this.head.next
                    return
                }
                if(!this.head) return 
                let prevNode = this.getAt(index-1)
                if(!prevNode || !prevNode.next) return
                prevNode.next = prevNode.next.next
            }

            insertAt(data, index) {
                if(!this.head) {
                    this.head = new Node(data)
                    return
                }
                if(index === 0) {
                    this.head = new Node(data, this.head)
                    return
                }
               
                if(index > this.size()) {
                    this.getLast().next = new Node(data)
                } 
                let prevNode = this.getAt(index - 1)
                if(!prevNode) return
                const node = new Node(data, prevNode.next)
                prevNode.next = node

            }
            forEach(func) {
                if(!this.head) {
                    return
                }
                let node = this.head
                let indexCount = 0
                while(node) {
                    func(node, indexCount);  
                    node = node.next
                    indexCount
                }
            }
        }
         const nodeOne = new Node(5)
         const list = new LinkedList()
         const a = new Node('a')
         const b = new Node('b')
         const c = new Node('c')

         list.head = a
         a.next = b
         b.next = c
         c.next = b
       
        //  list.forEach((node, i) => {
        //      console.log(node)
        //      node.data += 10
        //  })

        //  console.log(list.getAt(0))

        /***** Finding the Mid point of a linked List ***/
        function midpoint(list) {
            let slowNode = list.head
            let fastNode = list.head
            if(!list.head) return
            while(fastNode.next && fastNode.next.next) {
                slowNode = slowNode.next
                fastNode = fastNode.next.next
            }
            return slowNode
           
        }
        /***** Detecting a circular linked List ***/
        function circular(list) {
            let slowNode = list.head
            let fastNode = list.head
     
            
            while(fastNode.next && fastNode.next.next) {
                slowNode = slowNode.next
                fastNode = fastNode.next.next
                if(slowNode === fastNode) {
                    return true
                }
            }
            return false
        }
        console.log(circular(list))

        function generateRandomNumber() {
            return Math.floor(Math.random() * 9)
        }

        function formatPin(pin) {
            let randNum1 = generateRandomNumber(); 
            let randNum2 = generateRandomNumber();
            let randNum3 = generateRandomNumber();

            const two = pin.substring(0, 2)
            const lastTwo = pin.slice(2)
            let newPin = `${randNum1}${two}${randNum2}${lastTwo}${randNum3}`
            console.log(newPin)
        }
        formatPin('1234')

        /***** CONCURRENCY AND ASYNCHRONOUS PROGRAMMING ***/
        const tick = Date.now();
        const log = v => console.log(`${v} - Elapsed: ${Date.now() - tick} ms`)

        // const codeBlocker = () => {
        //   return Promise.resolve().then(() => {
        //      let i = 0;
        //      while(i < 1000000000){
        //         i++;
        //      }
        //     return "Loop is Completed";
        //   })
        // }

        const codeBlocker = () => {
          return new Promise((resolve, reject) => {
             let i = 0;
             while(i < 1000000000){
                i++;
             }
            resolve("Loop is Completed");
          })
        }
                             
        log("Synchronous 1");

        codeBlocker().then(log);

        log("Synchronous 2");

        // const getIngredient = (ingredient) => {
        //     const ingredients = {
        //         banana: "Banana",
        //         chocolateMilk: "Chocolate Milk",
        //         peanutButter: "Peanut Butter"
        //       }
          
        //     return Promise.resolve(ingredients[ingredient]);
        // }

        // getIngredient("banana").then((val) => console.log(val))

        // const getIngredient = async(ingredient) => {
        //   const ingredients = {
        //     banana: "Banana",
        //     chocolateMilk: "Chocolate Milk",
        //     peanutButter: "Peanut Butter"
        //   }
          
        //   return ingredients[ingredient];
        // }

        // getIngredient("banana").then(console.log)

        // async/await syntax
        // const makeSmoothie = async() => {
        //   const a = await getIngredient("banana");
        //   const b = await getIngredient("chocolateMilk");
         
        //   return [a, b]
        // }

        // makeSmoothie().then(console.log)

        // regular promise syntax
        // const makeSmoothie = () => {
        // let a;
        //   return getIngredient("banana").then(v => {
        //     a = v;
        //     return getIngredient("chocolateMilk")
        //   })
        //   .then(v => [v, a])
        // }

        // makeSmoothie().then(console.log)


        // const getIngredient = async(ingredient) => {
        //   const ingredients = {
        //     banana: "Banana",
        //     chocolateMilk: "Chocolate Milk",
        //     peanutButter: "Peanut Butter"
        //   }
          
        //   await delay(1000) // Hypothetical 1000ms delay
          
        //   return ingredients[ingredient];
        // }
        // const delay = ms => {
        //     setTimeout(() => {

        //     }, ms)
        // }
        // const makeSmoothie = async() => {
        //   const a = await getIngredient("banana");
        //   const b = await getIngredient("chocolateMilk");
          
        //   return [a, b]
        // }
        // const consoleLog = st => {
        //     return console.log(st)
        // }
        // makeSmoothie().then((res) => consoleLog(res))

        const getIngredient = async(ingredient) => {
          const ingredients = {
            banana: "Banana",
            chocolateMilk: "Chocolate Milk",
            peanutButter: "Peanut Butter"
          }
          
          await delay(1000) // Hypothetical 1000ms delay
          
          return ingredients[ingredient];
        }
        const consoleLog = st => {
            return console.log(st)
        }
        const delay = ms => {
            setTimeout(() => {

            }, ms)
        }
        const makeSmoothie = async() => {
          const a = getIngredient("banana");
          const b = getIngredient("chocolateMilk");
          const smoothie = await Promise.all([a, b])
          
          return smoothie
        }

        // makeSmoothie().then((res) => consoleLog(res))

        (function count(){
            // alert("eben")
        })()