// choose player: X & O 
// select location on board
//append x or o to location
//change player

var player
var prevPlayer

function selectX (){
    player = 'X'
    console.log('player:', player)
}

function selectO (){
    player = 'O'
}

    //el = element
    function setValue(el){
        console.log('player:', player)
    if(!player){
        alert('select a player')
    } else if (prevPlayer === player){
    alert('pick new player NOW') 
    } else {
        el.innerText = player
        prevPlayer = player
    }
}