/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let x=nums.length;
for(let i=0;i<nums.length;i++){
    if(nums[i]==val){
        nums[i] = '_';
        x-=1;
    }
}
nums.sort();
console.log(nums,x)
return x;
};