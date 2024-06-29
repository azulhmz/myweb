let menuVisible = false;
//function menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}


//Changes lenguage
var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.checked;
    if(id==false){
        location.href="en-index.html";
    }else{
        location.href="index.html";
    }
}


//Animation for skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("cnet");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("php");
        habilidades[7].classList.add("java");
        habilidades[8].classList.add("oracle");
        habilidades[9].classList.add("critical");
        habilidades[10].classList.add("proactive");
        habilidades[11].classList.add("communication");
        habilidades[12].classList.add("learning");
        habilidades[13].classList.add("respon");
        habilidades[14].classList.add("organized");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}