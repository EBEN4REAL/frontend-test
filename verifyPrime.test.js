const functions = require("./interview_algorithm.js");

console.log(functions.frogRiverOne(4, [1, 3, 1, 4, 2, 3, 5, 4]))
test("Return reversed string", () => {
    expect(functions.reverse('Eben')).toBe('nebE');
});
test("Rmove duplicates", () => {
    const duplicatesArray = functions.removeArrayDuplicates([1,3,1,3,4,5])
    const duplicates = [1,3,4,5]
    expect(duplicatesArray).toEqual(expect.arrayContaining(duplicates));
});

test('verify Prime' , () => {
    expect(functions.verifyPrime(2)).toBe(false)
})
test('verify Prime factors' , () => {
    expect(functions.primefactors(4)).toBe('1, 2, 4')
})

test("Reverse in place", () => {
    let reverseInPlace = functions.reversInPlace("I Love Eben")
    expect(reverseInPlace).toBe("I evoL nebE")
})

test("Largest Two sum", () => {
    expect(functions.largestSumTwo([1,3,1,3,4,5])).toEqual(9)
})