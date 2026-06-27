let nums=[12,3,9,5,18,20];
let maior=nums[0],i;
let Smaior=nums[0];
for(i=0;i<6;i++){
  if(nums[i]>maior){
    Smaior=maior;
    maior=nums[i];       
    }else if(nums[i]>Smaior){
      Smaior=nums[i];      
      } 
   }
console.log(`Maior: ${maior}`);
console.log(`Smaior: ${Smaior}`);  
