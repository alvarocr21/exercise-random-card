window.onload = function() {
    //write your code here
 let carta = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
 let palo = ["♥","♦","♠","♣"]

 let cartaRan = Math.floor(Math.random()*13)
 let paloRan = Math.floor(Math.random()*4)
//  console.log(cartaRan)
//  console.log(paloRan)


let logSup = document.getElementById("logsup");
logSup.innerText= palo[paloRan];
let loginfo = document.getElementById("logoInfo");
loginfo.innerText= palo[paloRan];
let numCard = document.getElementById("numCarta");
numCard.innerText= carta[cartaRan];

if (paloRan == 0 || paloRan == 1){
    logSup.className = "logsup rojo"
    loginfo.className = "logoInfo rojo"
    numCard.className = "numCarta rojo"
}else{
    logSup.className = "logsup black"
    loginfo.className = "logoInfo black"
    numCard.className = "numCarta black"
}

  };
  