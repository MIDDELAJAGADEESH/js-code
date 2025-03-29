let nums = [3,2,4];
let target=6
let data=new Map();
    let ans=[];
    for(let i=0;i<nums.length;i++){
        if(data.has(target-nums[i])){
            ans.push(data.get(target-nums[i]))
            
            ans.push(i);
            
        }
        else{
            data.set(nums[i],i)
        }
    }
    console.log(ans)