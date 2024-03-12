function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    //Define a quantidade de caracteres aceitos
    if (fano.value.length < 4 || fano.value.length > 4){
        window.alert('[ERRO] Quantidade de caracteres invalida verifique os dados')
    } else {
        //se o comprimento do valor fano for igual a 0 ou então o valor do fano for igual ao ano atual
        /*Verifica se a caixa esta vazia || Verifica se o ano é maior que o ano atual*/ 
        if (fano.value.length == 0  || Number(fano.value) > ano ){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gen = ''
            var img = document.createElement('img') //criar tag
            img.setAttribute('id', 'foto') //colocar um id na tag criada

            if (fsex[0].checked){
                gen = 'Homem'
                if(idade >=0 && idade <=12){
                    //Criança
                    img.setAttribute('src', 'bebeH.png')

                } else if (idade >=13 && idade <=21){
                    //Jovem
                    img.setAttribute('src', 'jovemH.png')
                } else if (idade <= 50){
                    //Adulto
                    img.setAttribute('src', 'adultoH.png')
                } else{
                    //Idoso
                    img.setAttribute('src', 'idosoH.png')
                }

            } else if (fsex[1].checked){
                gen = 'Mulher'

                if(idade >=0 && idade <=12){
                    //Criança
                    img.setAttribute('src', 'bebeM.png')
                    
                } else if (idade >=13 && idade <=21){
                    //Jovem
                    img.setAttribute('src', 'jovemM.png')
                } else if (idade <= 50){
                    //Adulto
                    img.setAttribute('src', 'adultoM.png')
                } else{
                    //Idoso
                    img.setAttribute('src','idosoM.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos <strong>${gen}</strong> com ,<strong>${idade}</strong> anos.`

            res.appendChild(img) //adicionar um elemnto (img)
        }
    }
    
    
}

