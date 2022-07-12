function profile(number){
    window.location.href = "app.html";
    sessionStorage.setItem('profile-picture', number);
}

function checkandchange(){
    y = document.getElementById("profile-icon-x");
    var data = sessionStorage.getItem('profile-picture');
    console.log(data);
    if(data == 1){
        y.src="img/profiles/1.jpg";
    }

    else if (data == 2){
        y.src="img/profiles/2.png";
    }

    else if (data == 3){
        y.src="img/profiles/3.png";
    }

    else if (data == 4){
        y.src="img/profiles/4.png";
    }

    else if (data == 5){
        y.src="img/profiles/5.png";
    }


}

var counter = 1;
function mutarToggle(){
    var x = document.getElementById("volume-icon");
    if (counter > 0) {
        x.src="img/volume-mute.svg";
        counter = 0;
    }
    else{
        counter++;
        x.src="img/volume.svg";
    }
    
}


function exitareaon(){
var x = document.getElementById("exitarea");
x.style.visibility = "visible";
x.style.opacity = 1;

let ls = document.getElementById("l-s");
ls.style.transform = "rotate(180deg)";
}

function exitareaoff(){
var x = document.getElementById("exitarea");
x.style.visibility = "hidden";
x.style.opacity = 0;

let ls = document.getElementById("l-s");
ls.style.transform = "rotate(0deg)";
}
