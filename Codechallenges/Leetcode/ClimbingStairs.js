/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const upup = [1, 2];
    for (let i=2; i<= n; i++){
        upup[i] = upup [i-1] + upup[i -2];
    }
    return upup[n-1];
};