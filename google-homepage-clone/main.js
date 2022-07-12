document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
      pesquisar()
    }
  })
  
function pesquisar(){
    // Modelo https://www.google.com/search?q=fernando+miguel+cachorro
    var input = document.getElementById("input-pesquisa").value;
    if (input.length != 0){
        var url = "https://www.google.com/search?q=";
        window.location.href = url + input;
    }
    else{
        return false;
    }
    
}

function estoucomsorte(){
    //Modelo https://www.google.com/search?q=teste&btnI=I%27m%20Feeling%20Lucky
    var input = document.getElementById("input-pesquisa").value;
    if (input.length != 0){
        var url = "https://www.google.com/search?q=";
        window.location.href = url + input + "&sourceid=chrome" +"&btnI=I'm Feeling Lucky";
    }
    else{
        return false;
    }
}