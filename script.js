function mudar(){
    var data = new Date()
    var diasemana = data.getDay()
    //var diasemana = 2
    var content = document.getElementById("content")
    var img = document.getElementById("img")

    switch(diasemana){
        case 0:
            content.innerHTML = "Hoje é Domingo, em japonês nós temos: <br> <span>日曜日</span> <br> nós pronunciamos Nichiyõbi"
            img.src = "imagens/domingo.jpg"
            document.body.style.background = "#F2C230"
            break
         case 1:
            content.innerHTML = "Hoje é segunda-feira, em japonês nós temos <br> <span>月曜日</span> <br> nós pronunciamos Getsuyõbi"
            img.src = "imagens/segunda.jpg"
            document.body.style.background = "#0365AB"
            break
        case 2:
            content.innerHTML = "Hoje é terça-feira, em japonês nós temos: <br> <span>火曜日</span> <br> nós pronunciamos Kayõbi"
            img.src = "imagens/terca.jpg"
            document.body.style.background = "#fb6704"
            break
        case 3:
            content.innerHTML = "Hoje é quarta-feira, em japonês nós temos: <br> <span>水曜日</span> <br> nós pronunciamos Suyõbi"
            img.src = "imagens/quarta.jpg"
            document.body.style.background = "#126b9b"
            break
        case 4:
            content.innerHTML = "Hoje é quinta-feira, em japonês nós temos: <br> <span>木曜日</span> <br> nós pronunciamos Mokuyõbi"
            img.src = "imagens/quinta.jpg"
            document.body.style.background = "#0D8917"
            break
        case 5:
            content.innerHTML = "Hoje é sexta-feira, em japonês nós temos: <br> <span>金曜日</span> <br> nós pronunciamos Kinyõbi"
            img.src = "imagens/sexta.jpg"
            document.body.style.background = "#8f8340"
            break
        case 6:
            content.innerHTML = "Hoje é Sábado, em japonês nós temos: <br> <span>土曜日</span> <br> nós pronunciamos Doyõbi"
            img.src = "imagens/sabado.jpg"
            document.body.style.background = "#A67A53"
            break
        }   

}