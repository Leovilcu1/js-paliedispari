
 let select = document.getElementById("select");
 let newInput = document.getElementById("mio-input");
  let newbutton = document.getElementById("button");

  newbutton.addEventListener("click",
    function(){
        newInput = parseInt(newInput.value);

        console.log("select.value",select.value, typeof select.value);
        console.log("newInput.value",newInput,typeof newInput);
        
        if( isNaN(newInput) == true ||newInput < 1 || newInput > 5){
            alert("valore non valido");
        }
        else{
            let somma = newInput + numeroRandom(1, 5);
            console.log("somma", somma,typeof somma);
            const verificaNum = PariDispari(somma);
            console.log( "verificaNum", verificaNum , typeof verificaNum);

            if(select.value == verificaNum){
                alert("hai vinto");
            }
            else{
                alert("hai perso....")
            }
        }
    })

    function numeroRandom(min, max){
        const num = Math.floor(Math.random()*(max - min+1)) + min;
        console.log("num", num , typeof num);
        return num;
    }
    function PariDispari(num){
        if (num % 2 == 0) {
            return "pari";
        }
        else{
            return "dispari";

        }
    }
  
