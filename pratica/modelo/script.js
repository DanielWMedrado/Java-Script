function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12){
        imagem.src = 'fotoManha.png'

    }else if(hora >= 12 && hora <18) {
        imagem.src = 'fotoTarde'

    } else {
        imagem.src = 'fotoNoite'
    }

}

