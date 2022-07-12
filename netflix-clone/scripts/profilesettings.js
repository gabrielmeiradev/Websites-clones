let nomes = ["Gabriel Meira", "Guilherme Meira", "Elton Kleber", "Michele Meira", "Teste"];

let us1 = document.getElementById("us1");
let us2 = document.getElementById("us2");
let us3 = document.getElementById("us3");
let us4 = document.getElementById("us4");
let us5 = document.getElementById("us5");

if (sessionStorage.getItem('nome1') != null){
    us1.innerHTML = sessionStorage.getItem('nome1');
}
else{
    us1.innerHTML = nomes[0];
}

if (sessionStorage.getItem('nome2') != null){
    us2.innerHTML = sessionStorage.getItem('nome2');
}
else{
    us2.innerHTML = nomes[1];
}

if (sessionStorage.getItem('nome3') != null){
    us3.innerHTML = sessionStorage.getItem('nome3');
}
else{
     us3.innerHTML = nomes[2];
}


if (sessionStorage.getItem('nome4') != null){
    us4.innerHTML = sessionStorage.getItem('nome4');
}
else{
    us4.innerHTML = nomes[3];
}


if (sessionStorage.getItem('nome5') != null){
    us5.innerHTML = sessionStorage.getItem('nome5');
}
else{
    us5.innerHTML = nomes[4];
}
