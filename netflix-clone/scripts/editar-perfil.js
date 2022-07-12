document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
      salvarnome()
    }
  })

var editando = sessionStorage.getItem('editando');

var nc = document.getElementById("nome-correspondente");

// Mostrando imagem correspondente

pe = document.getElementById("profile-editing");
pe.src=`img/profiles/${editando}.png`;
nc.innerHTML = sessionStorage.getItem(`nome${editando}`);

function salvarnome(){
    // DOM Element from input 
    var novonome = document.getElementById("new-name").value;

    sessionStorage.removeItem('nome' + editando);
    sessionStorage.setItem('nome' + editando, novonome);
    window.location.href = "index.html";
}