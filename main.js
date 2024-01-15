document.getElementById("New1").onclick = function(){
    showCard("NewClass");
    document.getElementById("Arrow").style.display = "none";
}

document.getElementById("bv1").onclick = function(){
    showCard("bvClass");
    document.getElementById("Arrow").style.display = "flex";
}

document.getElementById("bisnes1").onclick = function(){
    showCard("bisnesClass");
    document.getElementById("Arrow").style.display = "none";
}

document.getElementById("eco1").onclick = function(){
    showCard("ecoClass");
    document.getElementById("Arrow").style.display = "flex";
}

function showCard(cardClass) {
    // Сховати всі картки
    var allCards = document.querySelectorAll('.NewClass, .bvClass, .bisnesClass, .ecoClass');
    allCards.forEach(function(card) {
        card.style.display = "none";
    });

    // Показати обрану картку
    var selectedCards = document.getElementsByClassName(cardClass);
    for (var i = 0; i < selectedCards.length; i++) {
        selectedCards[i].style.display = "block";
    }
}

Arrow.onclick = function(){
    document.getElementById("cards").style.display = "none";
    document.getElementById("cards2").style.display = "flex";
    document.getElementById("Arrow").style.display = "none";
    document.getElementById("Arrow1").style.display = "flex";
}

Arrow1.onclick = function(){
    document.getElementById("cards").style.display = "flex";
    document.getElementById("cards2").style.display = "none";
    document.getElementById("Arrow").style.display = "flex";
    document.getElementById("Arrow1").style.display = "none";
}

let anims = false
    if(anims == false){
        anim.onclick = function(){
            kage.style.animation = "anima1 1s backwards"
            anims = true
        }
    }else{
        kage.style.animation = "none"
    }