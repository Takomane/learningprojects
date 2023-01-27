/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length)
        return false;
    const mapq = [256];
    const mapw = [256];
    for(let idx=0; idx <s.length; idx++){
        if(mapq[s.charAt(idx)] != mapw[t.charAt(idx)])
        return false;
        mapq[s.charAt(idx)] = idx + 1;
        mapw[t.charAt(idx)] = idx + 1;
    }
    return true;
};