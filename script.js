const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


// typing text
var i=0,Tulisan;
Tulisan = "Selesaikan pekerjaan lebih cepat dan lebih baik bersama kami"

function typing() {
    if(i<Tulisan.length){
    document.getElementById("Tulisan").innerHTML += Tulisan.charAt(i);
    i++;
    setTimeout(typing,80);
    }
}
typing();