let nums=[5,12,18,3,9,20];
let i;
let menor=nums[0];
let posMenor=0;
for(i=0;i<6;i++){
    
   if(nums[i]<menor){
      menor=nums[i];  
      posMenor=i;             
     }
   
      
  }
console.log(`Menor: ${menor}`);
console.log(`Posição: ${posMenor}`);
