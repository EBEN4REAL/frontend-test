/***** Module, Prototype, Observer, and Singleton design patterns, ***/
(function() {

    // declare private variables and/or functions

    return {
        // declare public variables and/or functions
    }

})();

/***** Currying ***/
curryedMultiply = (n) => (m) => n * m
curryedMultiply(3)(4) === 12 // true

multiply = (n, m) => curryedMultiply(n)(m)
multiply(3, 4) === 12 // true

/***** PArtial Application ***/
multiply = (n, m) => n * m
multiply(3, 4) === 12 // true

triple = (m) => multiply(3, m)
triple(4) === 12 // true