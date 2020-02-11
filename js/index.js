// Your code goes here
const title = document.querySelector("h1");
title.addEventListener("mouseover", () =>{
    title.style.color = "red";
})//1 event

title.addEventListener("mouseleave", () =>{
    title.style.color = "#212529";
})//2 event

const images = document.querySelectorAll('img');

images[0].addEventListener("dblclick", () =>{
    images[0].style.transform = "scale(1.5)";
})//3 event

images[0].addEventListener("mouseleave", () =>{
    images[0].style.transform = "scale(1)";
})
window.addEventListener("scroll", () =>{
    images[1].style.border = "2px solid red";
})//4 event

window.addEventListener("resize", () =>{
    images[2].style.display = 'none';
})//5 event

images[3].addEventListener("click", () =>{
    images[3].style.transform = "scale(1)";
})//6 event
window.addEventListener("copy", () =>{
    images[3].style.transform = "scale(0.5)";
})//7 event


document.querySelectorAll("p").forEach(element =>{
    document.addEventListener("keydown", () =>{
        element.style.color = "purple";
    })//8 event
    document.addEventListener("keyup", () =>{
        element.style.color = "#212529";
    })//9 event
})

document.querySelectorAll(".btn").forEach(btn =>{
    document.addEventListener("wheel", () =>{
        btn.style.backgroundColor = "yellow";
        btn.style.color = "black";
        btn.style.borderRadius = "75%";
    })
})//10 event

    

