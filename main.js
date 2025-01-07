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