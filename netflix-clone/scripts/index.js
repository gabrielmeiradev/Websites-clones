function selectUser(userNumber){
    presentImage = userNumber;
    window.location.href = "app.html";
    sessionStorage.setItem('profile-picture', presentImage);
}
