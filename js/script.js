document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const menuList = document.getElementById("menu-list");

    // Função para alternar o menu
    const toggleMenu = () => {
        menu.classList.toggle("active");
    };

    // Evento de clique no botão burger
    burger.addEventListener("click", toggleMenu);

    // Evento de clique fora do menu para fechar
    document.addEventListener("click", function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        if (!isClickInsideMenu) {
            menu.classList.remove("active");
        }
    });

    // Evento de clique nos links do menu para fechar
    menuList.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            menu.classList.remove("active");
        }
    });
});
