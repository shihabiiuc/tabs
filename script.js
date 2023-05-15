// horizontal
var tabNavLinks = document.querySelectorAll('.tab-nav a');
var tabPanes = document.querySelectorAll('.tab-pane');

for (var i = 0; i < tabNavLinks.length; i++) {
  tabNavLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    var tabId = this.getAttribute('data-tab');

    for (var j = 0; j < tabNavLinks.length; j++) {
      tabNavLinks[j].classList.remove('active');
    }

    for (var k = 0; k < tabPanes.length; k++) {
      tabPanes[k].classList.remove('active');
    }

    this.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
}

// vertical
var VtabNavLinks = document.querySelectorAll('.v-tab-nav a');
var VtabPanes = document.querySelectorAll('.v-tab-pane');

for (var i = 0; i < VtabNavLinks.length; i++) {
  VtabNavLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    var tabId = this.getAttribute('data-tab');

    for (var j = 0; j < VtabNavLinks.length; j++) {
      VtabNavLinks[j].classList.remove('active');
    }

    for (var k = 0; k < VtabPanes.length; k++) {
      VtabPanes[k].classList.remove('active');
    }

    this.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
}

// vertical EQUAL HEIGHT
// var tabNavLinks = document.querySelectorAll('.v-tab-nav a');
// var tabPanes = document.querySelectorAll('.v-tab-pane');
// var maxHeight = 0;

// for (var i = 0; i < tabPanes.length; i++) {
//   if (tabPanes[i].offsetHeight > maxHeight) {
//     maxHeight = tabPanes[i].offsetHeight;
//   }
// }

// for (var i = 0; i < tabPanes.length; i++) {
//   tabPanes[i].style.height = maxHeight + 'px';
// }

// for (var i = 0; i < tabNavLinks.length; i++) {
//   tabNavLinks[i].addEventListener('click', function(e) {
//     e.preventDefault();
//     var tabId = this.getAttribute('data-tab');

//     for (var j = 0; j < tabNavLinks.length; j++) {
//       tabNavLinks[j].classList.remove('active');
//     }

//     for (var k = 0; k < tabPanes.length; k++) {
//       tabPanes[k].classList.remove('active');
//     }

//     this.classList.add('active');
//     document.getElementById(tabId).classList.add('active');
//   });
// }