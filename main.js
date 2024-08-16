function POSITIVO_NEGATIVO(){
    let x = Number(prompt(`Digite um valor inteiro: `))
    let resultado = x > 0 ? `Positivo \ntrue` : `Negativo\nfalse`

    return alert(resultado)
}

function PAR_IMPAR(){
    let x = Number(prompt(`Digite um valor inteiro: `))
    let resultado = x % 2 == 0 ? `Par \ntrue` : `Impar\nfalse`

    return alert(resultado)
}

function LIMITES(){
    let li = Number(prompt(`Digite o valor inferior: `))
    let ls = Number(prompt(`Digite o valor superior: `))
    let soma = 0

    for(let i=li; i<=ls; i++){
        if(i % 2 == 0){
            alert(`${i} `)
            soma += i
        }
    }

    return alert(`A soma é ${soma}`)
}

function VOGAL(){
    let c = prompt(`Digite um caractere: `)
    let vogais = ['a', 'e', 'i', 'o', 'u']

    for(let i=0; i<5; i++){
        if(c == vogais[i]){
            alert(`É uma vogal. \nCódigo: 1`)
            return
        }
    }

    return alert(`NÃO é uma vogal. \nCódigo: 0`)
}

function MAIOR_MENOR(){
    let l = []
    let Ma, Me

    for(let i=0; i<5; i++){
        l[i] = Number(prompt(`Digite um número(${i}): `))
    }

    Ma=l[0] 
    Me=l[0]

    for(let i=0; i<5; i++){
        Ma = l[i] > Ma ? l[i] : Ma
        Me = l[i] < Me ? l[i] : Me
    }

    alert(`Lista=${l}, Maior=${Ma}, Menor=${Me}`)
}

function ORDEM(){
    let l = []
    let Me, M, Ma

    for(let i=0; i<3; i++){
        l[i] = Number(prompt(`Digite um número(${i+1}): `))
    }

    Ma=l[0] 
    Me=l[0]

    for(let i=0; i<3; i++){
        Ma = l[i] > Ma ? l[i] : Ma
        Me = l[i] < Me ? l[i] : Me
    }
    
    for(let i=0; i<3; i++){
        if(l[i] > Me && l[i] < Ma){
            M = l[i]
        }
    }

    alert(`${Me}, ${M}, ${Ma}`)
}