//maps animation
const ButtoLocations = document.querySelectorAll(".location-item");
const locals = [
  //caruaru
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.385967733797!2d-35.99380156447647!3d-8.293195784408224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b96e8d7fd6d%3A0xa30a5c7c9e363ef5!2sCaruaru%20-%20Picada%2C%20Caruaru%20-%20PE%2C%2055032-250!5e0!3m2!1spt-BR!2sbr!4v1705661433789!5m2!1spt-BR!2sbr",
  //recife
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252837.34556411725!2d-35.10266500111969!3d-8.04180072204805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88c446e5%3A0x3c9ef52922447fd4!2sRecife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1705661516274!5m2!1spt-BR!2sbr",
  //paulo afonso
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125954.91020027836!2d-38.37684104886361!3d-9.413420314264284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70930cc78a6f9ff%3A0xdb68770589a8cabb!2sPaulo%20Afonso%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1705661627482!5m2!1spt-BR!2sbr",
  //joao pessoa
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126682.34272577353!2d-34.964000243500344!3d-7.146431196659676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa3d7%3A0x6e414a9c6d26db34!2sJo%C3%A3o%20Pessoa%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1705661689796!5m2!1spt-BR!2sbr",
];
const mapFilials = document.querySelector(".map-filials");
ButtoLocations.forEach((item, index) => {
  item.addEventListener("click", () => {
    mapFilials.src = locals[index];
  });
});

//modals
const ContentMoodal = [
  {
    title: "Banho e tosa",
    text: "Os preços para os nossos serviços de banho e tosa variam de R$ 40 a R$ 150, dependendo do tamanho do seu pet e do tipo de tosa desejada. Estamos comprometidos em fornecer um excelente serviço pelo melhor preço possível.",
  },
  {
    title: "Passeios",
    text: "Os nossos serviços de passeios com pets são cobrados semanalmente, proporcionando uma solução conveniente e acessível para manter o seu pet ativo e feliz. Estamos ansiosos para levar o seu pet para aventuras incríveis!",
  },
  {
    title: "nutricionista",
    text: "Estamos ansiosos para ajudar o seu pet a viver uma vida longa, saudável e feliz. Entre em contato conosco pelo WhatsApp para agendar uma consulta com nosso nutricionista veterinário hoje mesmo!",
  },
  {
    title: "Loja",
    text: "Estamos muito animados para compartilhar que estamos desenvolvendo uma nova loja de comércio eletrônico para melhor atender às suas necessidades de compra de produtos para pets. Esta plataforma online permitirá que você compre todos os seus produtos para pets favoritos com o clique de um botão, no conforto da sua casa.",
  },
];

const modal = document.querySelector(".item-modal");
const itemsServices = document.querySelectorAll(".item-service");
itemsServices.forEach((item, index) => {
  item.addEventListener("click", () => {
    modal.innerHTML = `<div><h1>${ContentMoodal[index].title}</h1><p>${ContentMoodal[index].text}</p></div>`;
    modal.classList.add("active");
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});

//icone menu

const menuIcone = document.querySelector(".icone-menu-mobile");
var menu = document.querySelector(".menu-mobile");
menuIcone.addEventListener("click", () => {
  if (menu.classList.contains("menu-disable")) {
    menuIcone.classList.add("hidden-icone");
    menu.classList.add("menu-active");
    menu.classList.remove("menu-disable");
  } else {
    menuIcone.classList.remove("hidden-icone");
    menu.classList.add("menu-disable");
    menu.classList.remove("menu-active");
  }
});
