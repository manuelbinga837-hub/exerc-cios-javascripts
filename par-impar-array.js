let nums=[12,9,3,18,5,20];
let i,pares=[],impares=[];
for(i=0;i<6;i++){
  if(nums[i]%2==0){
    pares.push(nums[i]); 
    }else if(nums[i]%2!=0){
      impares.push(nums[i]);    
      }
  }
console.log(`Pares: ${pares}`); 
console.log(`Impares: ${impares}`); 
