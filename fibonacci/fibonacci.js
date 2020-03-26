const fibonacci = function(x) {
    if (x < 0) return "OOPS";
    else if (x === 0) return 0;
    else if (x === 1) return 1;
    else return fibonacci(x - 1) + fibonacci(x - 2);
}

module.exports = fibonacci

// x = 6:
// lhs = fibonacci(5), rhs = fibonacci(4)
// lhs = fibonacci(4) + fibonacci(3), rhs = fibonacci(3) + fibonacci(2)
// lhs = fibonacci(3) + fibonacci(2) + fibonacci(1) + fibonacci(0), rhs = fibonacci(2) + fibonacci(1) + fibonacci(1) + fibonacci(0)
// ...
// return 5 + 3