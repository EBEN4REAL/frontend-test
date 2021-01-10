const functions = require("./interview_algorithm.js");

console.log(functions.reverseWords("I love Eben"))
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


