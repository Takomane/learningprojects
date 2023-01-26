/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function(nums) {
    let runSum = new Array(nums.length+2).fill(0);
    runSum[1] = nums[0];
    for(let i=0; i<nums.length; i++){
        runSum[i+1] = nums[i] + runSum[i];
    }
    for(let i=1; i<runSum.length-1;i++){
        if(runSum[i-1]===runSum[nums.length]-runSum[i]){
            return i-1;
        }
    }
    return -1;
};