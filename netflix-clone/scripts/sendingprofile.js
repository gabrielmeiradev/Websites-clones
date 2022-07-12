var editando = sessionStorage.getItem('editando');

function change(profileNumber){
    if (editando == null){
        sessionStorage.setItem('editando', profileNumber);
        window.location.href = "editar-perfil.html";
    }
    else{
        localStorage.removeItem('editando');
        sessionStorage.setItem('editando', profileNumber);
        window.location.href = "editar-perfil.html";
    }
}
