let card=document.querySelectorAll("a")
let bascet=0
let h3=document.querySelector(".bascet")
for(let card2=0; card2 <card.length; card2++ ) 
{
 card[card2].addEventListener("click",function ( ){
    if(bascet==50  ){
        
    }
    else{
        bascet++
h3.innerHTML=bascet
    }

 })

  
}


