let area00 = document.getElementById("area00")
let area01 = document.getElementById("area01")
let area02 = document.getElementById("area02")
let area10 = document.getElementById("area10")
let area11 = document.getElementById("area11")
let area12 = document.getElementById("area12")
let area20 = document.getElementById("area20")
let area21 = document.getElementById("area21")
let area22 = document.getElementById("area22")
let jogador = document.getElementById('jogador')
let reinicio = document.getElementById('reinicie')


reinicio.addEventListener('click' , reiniciar)


    let matriz = [area00 , area01 , area02,
                  area10 , area11 , area12,
                  area20 , area21 , area22]


let arrayClique = ['X' , "O" , "X" , "O" , 'X' , 'O' , 'X' , 'O' , 'X' , 'O']
let i = 0



area00.addEventListener('click' , clicou)
area01.addEventListener('click' , clicou)
area02.addEventListener('click' , clicou)
area10.addEventListener('click' , clicou)
area11.addEventListener('click' , clicou)
area12.addEventListener('click' , clicou)
area20.addEventListener('click' , clicou)
area21.addEventListener('click' , clicou)
area22.addEventListener('click' , clicou)


function clicou(event){

    var area = event.target
    area.innerHTML = arrayClique[i]
    
    jogador.innerHTML = arrayClique[i + 1]
    
    area.style.fontSize = '30px'
    area.style.transition = 'all 0.5s'
    i ++
    if(i >= arrayClique.length){
        erro()
    }
    
    if(area00.innerHTML == 'X' && area01.innerHTML == 'X' && area02.innerHTML == 'X' || area00.innerHTML == 'X' && area10.innerHTML == 'X' && area20.innerHTML == 'X' || area00.innerHTML == 'X' && area11.innerHTML == 'X' && area22.innerHTML == 'X' || area01.innerHTML == 'X' && area11.innerHTML == 'X' && area21.innerHTML == 'X' || area02.innerHTML == 'X' && area11.innerHTML == 'X' && area20.innerHTML == 'X' || area02.innerHTML == 'X' && area12.innerHTML == 'X' && area22.innerHTML == 'X' || area10.innerHTML == 'X' && area11.innerHTML == 'X' && area12.innerHTML == 'X' || area20.innerHTML == 'X' && area21.innerHTML == 'X' && area22.innerHTML == 'X'){
        resultadoX()
    }

    if(area00.innerHTML == 'O' && area01.innerHTML == 'O' && area02.innerHTML == 'O' || area00.innerHTML == 'O' && area10.innerHTML == 'O' && area20.innerHTML == 'O' || area00.innerHTML == 'O' && area11.innerHTML == 'O' && area22.innerHTML == 'O' || area01.innerHTML == 'O' && area11.innerHTML == 'O' && area21.innerHTML == 'O' || area02.innerHTML == 'O' && area11.innerHTML == 'O' && area20.innerHTML == 'O' || area02.innerHTML == 'O' && area12.innerHTML == 'O' && area22.innerHTML == 'O' || area10.innerHTML == 'O' && area11.innerHTML == 'O' && area12.innerHTML == 'O' || area20.innerHTML == 'O' && area21.innerHTML == 'O' && area22.innerHTML == 'O'){
        resultadoO()
    }

        // else{
        //     empate()
        // }
    
}




function erro(){
    alert('operação indisponível')
    location.reload()
}
    
function reiniciar(){
    location.reload()
}


function resultadoX(){
    jogador.innerHTML = 'Jogador X ganhou'
}

function resultadoO(){
    jogador.innerHTML = 'Jogador O ganhou'
}
function empate(){
    jogador.innerHTML = 'EMPATE'
}