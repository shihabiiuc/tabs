// horizontal
let tabNavLinks = document.querySelectorAll(".tab-nav a");
let tabPanes = document.querySelectorAll(".tab-pane");

for (let i = 0; i < tabNavLinks.length; i++) {
  tabNavLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    let tabId = this.getAttribute("data-tab");

    for (let j = 0; j < tabNavLinks.length; j++) {
      tabNavLinks[j].classList.remove("active");
    }

    for (let k = 0; k < tabPanes.length; k++) {
      tabPanes[k].classList.remove("active");
    }

    this.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
}

// vertical
let VtabNavLinks = document.querySelectorAll(".v-tab-nav a");
let VtabPanes = document.querySelectorAll(".v-tab-pane");

for (let i = 0; i < VtabNavLinks.length; i++) {
  VtabNavLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    let tabId = this.getAttribute("data-tab");

    for (let j = 0; j < VtabNavLinks.length; j++) {
      VtabNavLinks[j].classList.remove("active");
    }

    for (let k = 0; k < VtabPanes.length; k++) {
      VtabPanes[k].classList.remove("active");
    }

    this.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
}
