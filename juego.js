function silabas(){
    palabras = ["carro", "perro", "caballo", "tomate", "cereza"];
    pedazos = [];
    stringes = [];
    ases = [];
    c = 0;
    title = document.getElementById("title");
    letras = document.getElementById("letras");
    for(i=0;i<palabras.length;i++){
       // numRandom = Math.floor(Math.random(4) * 4);
       ases[i] =  document.createElement("a");
       ases[i].setAttribute("href", "#");
       ases[i].setAttribute("class", "letras");
       pedazos.push(palabras[i].substr(0,2));
       text = document.createTextNode(pedazos[i]);
       ases[i].appendChild(text);
        letras.appendChild(ases[i]);
        ases[i].onclick = function(){
            if(stringes.length != 0){
                newstr = stringes[c].replace(new RegExp("__"), this.innerHTML);
                if(newstr == palabras[c]){
                    console.log("lo lograste campeon" + newstr+ " " + palabras[c] + i);
                    ases[c].style.display = "none";
                   if(c != palabras.length - 1){
                       alert(palabras[c]);
                    c++;
                    title.innerHTML = stringes[c];
                   }else{
                       alert(palabras[c]);
                       title.innerHTML = "FELICIDADES"
                      letras.innerHTML = "Congratulations";
                   }
                }else{
                    
                    console.log("lo sentimos, " + newstr  + newstr+ " " + palabras[c] + i);
                }
            }
        }
    }
    for(i=0;i<pedazos.length;i++){
        stringes.push(palabras[i].replace(new RegExp(pedazos[i]), "__"));
        
    }
    title.innerHTML = stringes[c];
    console.log(pedazos);
    console.log(stringes);
}

window.onload = silabas;