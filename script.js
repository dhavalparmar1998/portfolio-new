// toggler style switcher
const styleswitchertoggle = document.querySelector(".style-switcher-toggler");
styleswitchertoggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
// theme colors
const alternatestyles = document.querySelectorAll(".alternate-style");
function setactivestyle(color) {
  alternatestyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// theme light and dark
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.toggle("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// typing animation
var typed = new Typed(".typing", {
  strings: [
    "Web Designer",
    "Full-Stack Developer",
    "Back-End Developer",
    "Front-End Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// aside
const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalnavlist = navlist.length,
  allsection = document.querySelectorAll(".section"),
  totalsection = allsection.length;
for (let i = 0; i < totalnavlist; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    removebacksection();

    for (let j = 0; j < totalnavlist; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        addbacksection(j);
        allsection[j].classList.add("back-section");
      }
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showsection(this);
    if (window.innerWidth < 1200) {
      asidesectiontogglerbtn();
    }
  });
}
function removebacksection() {
  for (let i = 0; i < totalsection; i++) {
    allsection[i].classList.remove("back-section");
  }
}
function addbacksection(num){
    allsection[num].classList.add("back-section");

}
function showsection(element) {
  for (let i = 0; i < totalsection; i++) {
    allsection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalnavlist; i++) {
    navlist[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navlist[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navlist[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function() {
  const sectionindex = this.getAttribute("data-section-index");
  console.log(sectionindex);
  showsection(this);
  updateNav(this);
  removebacksection();
  addbacksection(sectionindex);
});
const navtogglerbtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navtogglerbtn.addEventListener("click", () => {
  asidesectiontogglerbtn();
});

function asidesectiontogglerbtn() {
  aside.classList.toggle("open");
  navtogglerbtn.classList.toggle("open");
  for (let i = 0; i < totalsection; i++) {
    allsection[i].classList.toggle("open");
  }
}
// filter portfolio section
let mixer = mixitup(".portfolio", {
  selectors: {
      target: '.project-item'
  },
  animation: {
      duration: 300
  }
});