var toggleBtn = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleBtn.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
})