document.addEventListener('DOMContentLoaded', function () {
    const burguer = document.getElementById('burguer');
    const menu = document.querySelector('.menu-lista');

    burguer.addEventListener('click', function () {
        burguer.classList.toggle('active')
        menu.classList.toggle('active');
    });
});
