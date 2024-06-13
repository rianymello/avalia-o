document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o LocomotiveScroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    // Função de animação para a seção 4
    function page4Animation() {
        var elemC = document.querySelector("#elem-container");
        var fixed = document.querySelector("#fixed-image");
        elemC.addEventListener("mouseenter", function () {
            fixed.style.display = "block";
        });
        elemC.addEventListener("mouseleave", function () {
            fixed.style.display = "none";
        });

        var elems = document.querySelectorAll(".elem");
        elems.forEach(function (e) {
            e.addEventListener("mouseenter", function () {
                var image = e.getAttribute("data-image");
                fixed.style.backgroundImage = `url(${image})`;
            });
        });
    }

    // Função de inicialização do Swiper com autoplay
    function swiperAnimation() {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 100,
            loop: true, // Permite que o swiper continue a deslizar infinitamente
            autoplay: {
                delay: 3000, // Tempo de atraso entre slides em milissegundos
                disableOnInteraction: false, // Autoplay não será desativado após interação do usuário
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // Função de animação do carregador
    function loaderAnimation() {
        var loader = document.querySelector("#loader");
        setTimeout(function () {
            loader.style.top = "-100%";
        }, 4200);
    }

    // Chama as funções de animação
    swiperAnimation();
    page4Animation();
    loaderAnimation();
});
