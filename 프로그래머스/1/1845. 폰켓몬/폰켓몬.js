function solution(nums) {
    let res = [...new Set(nums)];
    let limit = nums.length/2;
    
    return res.length > limit ? limit : res.length;
}