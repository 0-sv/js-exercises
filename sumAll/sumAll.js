const sumAll = function(m, n) {
    if (m < 0 || n < 0) return "ERROR";
    if (typeof(m) !== typeof(0) || typeof(n) !== typeof(0)) return "ERROR";
    
    result = 0;
    for (let i = Math.min(n, m); i <= Math.max(m, n); ++i) result += i;
    return result; 
}

module.exports = sumAll
