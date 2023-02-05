console.log('1.Вёрстка валидная +10 \n 2.Вёрстка семантическая +20 \n 3.Вёрстка соответствует макету +48 \n 4.Требования к css + 12 \n 5.Интерактивность, реализуемая через css +15 \n Сумма 105')
const nav = document.getElementById("header_nav_burger");
const body = document.querySelector('body');
const burger = document.getElementById("nav_burger");
const openContactMenu = document.querySelector('#open-contact-menu');
const contactMenu = document.querySelector('#contact-menu');
const cityValue = document.querySelector('#city-value');
const phoneValue = document.querySelector('#phone-value');
const officeValue = document.querySelector('#office-value');
const selectedCityWrapper = document.querySelector('#selected-city-wrapper');
const cityObj = {
    city1: {
       city: "Canandaigua, NY",
       phone: "+1	585	393 0001",
       office: "151 Charlotte Street"
    },
    city2: {
        city: "New York City",
        phone: "+1	212	456 0002",
        office: "9 East 91st Street"
     },
     city3: {
        city: "Yonkers, NY",
        phone: "+1	914	678 0003",
        office: "511 Warburton Ave"
     },
     city4: {
        city: "Sherrill, NY",
        phone: "+1	315	908 0004",
        office: "14 WEST Noyes BLVD"
     }
};

nav.addEventListener("click", function () {
    burger.classList.toggle("nav_burger_open");
    nav.classList.toggle("rotate-180");
});

burger.addEventListener("click", function () {
    burger.classList.remove("nav_burger_open");
});

openContactMenu.addEventListener('click', e => {
    contactMenu.classList.toggle('hidden');
});

body.addEventListener('click', e => {
    let id = e.target.id;

    if (e.target.classList.contains('service-btn')) {        
        e.target.classList.toggle('active-btn');
        CheckActiveButton();
    }

    if(e.target.classList.contains('price-open')) {
        e.target.closest('.price_col').classList.toggle('open');
    }

    if (e.target.classList.contains("city")) {
        let value = cityObj[id];

        selectedCityWrapper.classList.remove('hidden');
        contactMenu.classList.add('hidden');        
        cityValue.innerText = value.city;
        phoneValue.innerText = value.phone;
        officeValue.innerText = value.office;
    }
})

function CheckActiveButton() {
    const cards = document.querySelectorAll('.service_list');
    const activeButtons = document.querySelectorAll('.active-btn');

    if (activeButtons.length !== 0) {
        cards.forEach(i => i.classList.add('not-active-cards'));
        activeButtons.forEach(i => {
            const cards = document.querySelectorAll('.' + i.id);
            cards.forEach(i => i.classList.remove('not-active-cards'));
        });

        if (activeButtons.length === 3) {
            activeButtons.forEach(i => i.classList.remove('active-btn'));
        }
    } else {
         cards.forEach(i => i.classList.remove('not-active-cards'));
    }
}