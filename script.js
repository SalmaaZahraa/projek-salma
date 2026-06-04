/* ==========================
   DARK MODE
========================== */

const darkModeBtn = document.getElementById("darkMode");

if(darkModeBtn){
darkModeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});
}

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
".card, .project, .about-card, .stat, .item, .skill"
);

function revealOnScroll(){

revealElements.forEach((el)=>{

const windowHeight =
window.innerHeight;

const top =
el.getBoundingClientRect().top;

if(top < windowHeight - 100){
el.classList.add("show");
}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".stat h3");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
parseInt(
counter.innerText.replace("+","")
);

const count =
+counter.getAttribute("data-count") || 0;

const increment =
target / 40;

if(count < target){

const newCount =
Math.ceil(
count + increment
);

counter.setAttribute(
"data-count",
newCount
);

counter.innerText =
newCount + "+";

setTimeout(
updateCounter,
40
);

}else{

counter.innerText =
target + "+";

}

};

updateCounter();

});

/* ==========================
   ACTIVE NAVBAR
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(
pageYOffset >= sectionTop &&
pageYOffset <
sectionTop + sectionHeight
){
current =
section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){
link.classList.add("active");
}

});

});

/* ==========================
   PAGE LOAD
========================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* ==========================
   CURSOR GLOW
========================== */

const glow =
document.querySelector(".cursor-glow");

if(glow){

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}
);

}

/* ==========================
   CONTACT FORM -> WHATSAPP
========================== */

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const nama =
document.querySelector(
'input[type="text"]'
).value;

const email =
document.querySelector(
'input[type="email"]'
).value;

const pesan =
document.querySelector(
'textarea'
).value;

const text =
`Halo Salma,

Nama: ${nama}
Email: ${email}

Pesan:
${pesan}`;

window.open(
`https://wa.me/6288211851789?text=${encodeURIComponent(text)}`,
"_blank"
);

}
);

}