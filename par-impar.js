function parOuImpar(n){
    if(n%2==0){
        return "par"
    }else{
        return "ímpar"
    }
}

function verificar(n){
    return "Numero " +  n + " é " + parOuImpar(n)
}
let res=verificar(8)
console.log(res)

