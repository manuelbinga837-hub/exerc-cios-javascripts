let nums=[11,4,8,25,3,14]
function pares(nums){
    let cont=0;
    let pares=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            
            pares.push(nums[i])
        }
    }
    return pares;
}
let res=pares(nums)
console.log(` ${res} são numeros pares!`)


