document.addEventListener("DOMContentLoaded", function() {
    // Oculta a página até o scroll ser restaurado
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }

    // Mostra a página novamente após ajustar o scroll
    document.body.classList.remove('hidden');
});

window.onbeforeunload = function() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
};

document.addEventListener("DOMContentLoaded", function() {
    // Oculta a página até o scroll ser restaurado
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }

    // Mostra a página novamente após ajustar o scroll
    document.body.classList.remove('hidden');
});

window.onbeforeunload = function() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
};

function mobileNavbar(mobileMenuSelector, navListSelector, navLinksSelector) {
    const mobileMenu = document.querySelector(mobileMenuSelector);
    const menuList = document.querySelector(navListSelector);
    const navLinks = document.querySelectorAll(navLinksSelector);
    const activeClass = "active";

    function animateLinks(open) {
        navLinks.forEach((link, index) => {
            if (open) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                link.style.animation = "none"; // Reseta a animação ao fechar
            }
        });
    }

    function handleClick() {
        const isActive = menuList.classList.contains(activeClass);
        
        if (isActive) {
            menuList.classList.remove(activeClass);
            mobileMenu.classList.remove(activeClass);
            animateLinks(false); // Remove animação ao fechar
        } else {
            menuList.classList.add(activeClass);
            mobileMenu.classList.add(activeClass);
            setTimeout(() => animateLinks(true), 10); // Aplica animação ao abrir
        }
    }

    function closeMenu(event) {
        if (!menuList.contains(event.target) && !mobileMenu.contains(event.target)) {
            menuList.classList.remove(activeClass);
            mobileMenu.classList.remove(activeClass);
            animateLinks(false);
        }
    }

    function addClickEvent() {
        if (mobileMenu) {
            mobileMenu.addEventListener("click", handleClick);
            document.addEventListener("click", closeMenu);
        }
    }

    addClickEvent();
}

// Inicializa a função passando os seletores desejados
mobileNavbar(".mobile-menu", ".menu-list", ".menu-list li");