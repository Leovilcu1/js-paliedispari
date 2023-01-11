function parolaPalindroma (parola){
    console.log("Parola inserita", parola);
    let parolaInvertita = "";
    for(i = parola.length -1; i >= 0; i--){

        parolaInvertita += parola[i];
    }
    console.log(parolaInvertita);

   if(verificaParola == parolaInvertita){
        alert("parola Palindroma");
    }
    
    else{
        alert("parola non Palindroma");
    }
}
const verificaParola = prompt("inserisci parola da verificare");
const risultato = parolaPalindroma(verificaParola);