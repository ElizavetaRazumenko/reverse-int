module.exports = function reverse (n) {
    if (n < 0) {
         n = -1 * n;
    }
    let num = n.toString();
    let result = '';
    let i = (num.length - 1);
    while (i > -1) {
        result += num[i];
        i--;
    } return +result;
}
