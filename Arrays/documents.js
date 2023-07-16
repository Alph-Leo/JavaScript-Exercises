// console.log(screen.width, screen.height);
// console.log(navigator.onLine);
// console.log(navigator.language);
// console.log(history.length); 

// // console.log(document.body.childNodes);
// // console.log(document.body.children)
// // console.log(document.body.firstElementChild);

// let cls = document.getElementsByClassName("second div");
// let tag = document.getElementsByTagName("p");
// let id = document.getElementById("Fifteen");

// let children = document.body.children;
// let parent = document.body.parentElement;
// let sibling = document.body.previousElementSibling;

// console.log(children);
// console.log(parent);
// console.log(sibling);
// console.log(cls[0].children);
// console.log(cls[0].previousElementSibling);
 
// for(let i of cls){
//     console.log(i);
// }

// let name = document.createElement("p");
// let name2 = document.createElement("p");
// name.innerHTML = "Change the background colour";
// name.textContent = "Change the button colour";
// cls[0].append(name);
// cls[1].prepend(name2);


let printOut = window.navigator.appName;
let area = screen.height * screen.width;
let host = window.location.host;
let url = window.location.href;

let wbp = document.getElementsByClassName("first-class");
let webOut = wbp[0].children[1].textContent += printOut;
let theArea = wbp[0].children[2].textContent += area;
let theHost = wbp[0].children[4].textContent += host;
let theUrl = wbp[0].children[5].textContent += url;



