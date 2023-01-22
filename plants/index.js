console.log('1.Вёрстка валидная +10 \n 2.Вёрстка семантическая +20 \n 3.Вёрстка соответствует макету +48 \n 4.Требования к css + 12 \n 5.Интерактивность, реализуемая через css +15 \n Сумма 105')
const nav = document.getElementById("header_nav_burger");
const burger = document.getElementById("nav_burger");

nav.addEventListener("click", function () {
   burger.classList.toggle("nav_burger_open");
   nav.classList.toggle("rotate-180");
});

burger.addEventListener("click", function () {
    burger.classList.remove("nav_burger_open");
});