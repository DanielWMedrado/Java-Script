var agora = new Date() //Sempre usar esse comando para pegar qualquer coisa referente a data exemplo: hora, mês, dia etc
var hora = agora.getHours() //para apartir da variavel que absorveu a informações sobre dara e horario atual absorver a hora atual

console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 5){
    console.log(`Boa Madrugada!`)

} else if (hora <=12 ){
    console.log(`Bom Dia!`)
} 
else if(hora <= 17) /*else if(hora >=12 && hora < 18)*/ {
    console.log(`Boa Tarde!`)

} else if (hora <=23){
    console.log(`Boa Noite!`)
} 