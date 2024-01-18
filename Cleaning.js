let header = document.querySelector("header");

let cancel = document.querySelector(".fa-xmark");
let menuIcon = document.querySelector(".menuIcon");


menuIcon.onclick = () => {
    header.classList.add("showNav")
    header.classList.add("headerColor");
    menuIcon.classList.add("hideMenu");
   
}


cancel.onclick = () => {
    header.classList.remove("showNav");
    header.classList.remove("headerColor");
    menuIcon.classList.remove("hideMenu");
   
}
