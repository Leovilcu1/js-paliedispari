
 
 let select = document.getElementById("select");
 let newInput = document.getElementById("mio-input");
  let newbutton = document.getElementById("button");
  let flag;
  
    newbutton.addEventListener("click",
    function(){
        console.log(select.value,typeof select.value)
        if(newInput.value < 0 || newInput.value >5){
            alert("non puoi entrare");
        }
        else{
            console.log(newInput.value , typeof newInput.value, "newInput");
           
            
            let vilcu = numeroRandom(1 ,5) + parseInt(newInput.value);
            
            console.log(vilcu,"vilcu");
            vilcu = PariDispari(vilcu);
            
        }
}
)

function numeroRandom(min, max){
    const num = Math.floor(Math.random()*(max + 1 - min))+ min;
    console.log(num);
    return num;
}

function PariDispari (num){
    if(num % 2 == 0){
        console.log("numero pari");


    }
    else{
        console.log("numero dispari");

    }
    
    
}


