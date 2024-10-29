let yes = document.querySelector(".yes");
let img_box = document.querySelector(".requesting");
let no = document.querySelector(".no");

yes.addEventListener("click" , e => {
    img_box.src = "happy.gif";
});

function runawayBtn() {
    const height = Math.floor(Math.random() * window.innerHeight) + "px";
    const width = Math.floor(Math.random() * window.innerWidth) + "px";

    no.style.top = height;
    no.style.left = width;
}

no.addEventListener("mouseover",runawayBtn);