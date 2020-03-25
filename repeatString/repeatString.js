const repeatString = function(str, x) { 
    if (x > 1) return str + repeatString(str, x - 1);
    else if (x === 1) return str;
    else if (x === 0) return '';
    else if (x < 0) return 'ERROR';
} 

module.exports = repeatString
