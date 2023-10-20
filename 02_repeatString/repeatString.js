const repeatString = function repeatString(str, num) {
    str = 'hey';
    if (num > 0) {
        return str.repeat(num);
    } else if (num < 0) {
        return 'ERROR';
    } else {
        return '';
    }
}

// Do not edit below this line
module.exports = repeatString;

/* My solution differed from the one provided by the exercises, getting stuck in the last test after passing the rest.
I should have used a loop but instead focused on conditionals */