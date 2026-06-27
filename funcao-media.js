function media(n1,n2){
    return (n1+n2)/2
}

function situacao(n1,n2){
    let m=media(n1,n2)
    if(m>=10){
        return "Aprovado!"
    }else{
        return "Reprovado!"
    }
}
console.log(situacao(5,14))

