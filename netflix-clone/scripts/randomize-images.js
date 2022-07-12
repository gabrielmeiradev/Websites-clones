var random = Math.floor(Math.random() * 11);

// DOM ELEMENTS
let logo = document.getElementById("logo-featured");
let bg = document.getElementById("b-m");
let desc = document.getElementById("descricao-featured");
let clas = document.getElementById("classificacao-featured");

if(random < 3){
    logo.src="img/featured-logos/minions.webp";
    bg.style.backgroundImage = "url('img/banners/minions.webp')";
    desc.innerHTML = "Eles são os lacaios amarelos e inconfundíveis de Meu Malvado Favorito. Neste filme, veja a história de sua devoção por vilões desde o início.";
    clas.src = "img/classificacao/l.png";
}
else if(random >= 3 && random < 6){
    logo.src="img/featured-logos/lar-doce-lar.webp";
    clas.src = "img/classificacao/10.png";
    bg.style.backgroundImage = "url('img/banners/lar-doce-lar.webp')";
    desc.innerHTML = "Elas parecem perigosas, mas essas criaturas incompreendídas tem um coração de ouro - e estão saindo do cativeiro para voltar para casa.";
}
else if(random >= 6) {
    logo.src="img/featured-logos/o-mar-da-tranquilidade.webp";
    clas.src = "img/classificacao/16.png";
    bg.style.backgroundImage = "url('img/banners/o-mar-da-tranquilidade.webp')";
    desc.innerHTML = "Em uma missão perigosa na Lua, exploradores espaciais tentam recuperar amostras em uma estação de pesquisa abandonada e repleta de segredos.";
}
