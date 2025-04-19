const menuBtn = document.querySelector('#hamburger-menu');
const menuBar = document.querySelector('.menu');

menuBtn.onclick = (e) => {
    menuBar.classList.toggle('active');
    e.preventDefault();
};

document.addEventListener('click', function(e) {
    if (!menuBtn.contains(e.target) && !menuBar.contains(e.target)) {
        menuBar.classList.remove('active');
    }
});