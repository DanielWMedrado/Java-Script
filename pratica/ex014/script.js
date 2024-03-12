function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    // Dia
    /*#feefd8*/ 

    //Tarde
    /*#ffc193*/ 
    /*#f3a34c*/ 

    //Noite
    /*#20383f*/

    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotoManha.png'
        document.body.style.background = '#feefd8'

    }else if(hora >= 12 && hora <18) {
        //BOA TARDE !
        img.src = 'fotoTarde.png'
        document.body.style.background =  '#ffc193'
    } else {
        //BOA NOITE!
        img.src = 'fotoNoite.png'
        document.body.style.background = '#20383f'
    }

}
