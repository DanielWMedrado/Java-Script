let valores = [5, 8, 2, 9, 3]
valores.sort() //organizar em ordem crescente


console.log(`Apresentando vetores`)

console.log(`Nosso vetor é o ${valores}`)

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos}, tem o valor ${valores[pos]}`)
    
}
*/

// para(for) cada posição(let pos) em(in) valores(valores)
for(let pos in valores){
    console.log(`A posição ${pos}, tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(8)

if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está na posição ${pos}`)
}

console.log(`E por enquanto o vetor só obtem ${valores.length} valores`)