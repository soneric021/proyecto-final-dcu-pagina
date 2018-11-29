ases = [];
numerodeases = 40;
letras = ["p", "q", "d", "b"];
app = document.getElementById("app");
content = document.getElementById("contenet");
title = document.getElementById("title");
contador  = 0;
window.onload = function() {
    letraRandom = letras[Math.floor(Math.random(10) * letras.length)];
    for(let i = 0;i<numerodeases;i++){
        ases[i] =  document.createElement("a");
        ases[i].setAttribute("href", "#");
        ases[i].setAttribute("class", "letras");
        numeroRandom = Math.floor(Math.random(10) * letras.length);
        text = document.createTextNode(letras[numeroRandom]);
        
        ases[i].appendChild(text);
        app.appendChild(ases[i]);
        ases[i].onclick = function(){
           if(ases[i].innerHTML == letraRandom ){
            if(ases[i].innerHTML == "b" ){
                ases[i].style.backgroundColor = "blue";
                ases[i].style.color = "white";
                contador++;
                if(ases[i].style.backgroundColor == "blue"){
                    letraRandom = letras[Math.floor(Math.random(10) * letras.length)];
                    title.innerHTML = "SELECCIONA LA letra " + letraRandom;
                }
             }else if(ases[i].innerHTML == "d"){
              ases[i].style.backgroundColor = "green";
              ases[i].style.color = "white";
              contador++;
              if(ases[i].style.backgroundColor == "green"){
               
                letraRandom = letras[Math.floor(Math.random(10) * letras.length)];
                title.innerHTML = "SELECCIONA LA letra " + letraRandom;
            }
          }else if(ases[i].innerHTML == "q"){
              ases[i].style.backgroundColor = "yellow";
              ases[i].style.color = "black";
              contador++;
              if(ases[i].style.backgroundColor == "yellow"){
                letraRandom = letras[Math.floor(Math.random(10) * letras.length)];
                title.innerHTML = "SELECCIONA LA letra " + letraRandom;
            }
          }else if(ases[i].innerHTML == "p"){
              ases[i].style.backgroundColor = "red";
              ases[i].style.color = "white";
              contador++;
              if(ases[i].style.backgroundColor == "red"){
                letraRandom = letras[Math.floor(Math.random(10) * letras.length)];

                title.innerHTML = "SELECCIONA LA letra " + letraRandom;
            }
          }else{
              alert("esa no es");
          }
           }
        }
        
    }
    if(contador == numerodeases){
        title.innerHTML = "Haz ganado";
    }
    title.innerHTML = "SELECCIONA LA letra " + letraRandom;

    

        // numeroRandom = Math.floor(Math.random(10) * numerodeases);
        // ases[numeroRandom].innerHTML = "d";
        // ases[numeroRandom].onclick = function(){
        //     alert("lo hiciste");
        // }
        // console.log(numeroRandom);
}