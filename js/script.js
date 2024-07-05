// Menu hamúrguer
const burger = document.getElementById('burger');
const menuList = document.getElementById('menu-list');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menuList.classList.toggle('open');
});
