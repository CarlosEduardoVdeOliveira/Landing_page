// script que verifica de tempos em tempos o valor do scroll
const verifyScroll = () => {
  const returnTop = document.querySelector(".scroll");
  let scrolly = window.scrollY;
  if (scrolly <= 100) {
    returnTop.style.display = "none";
  } else {
    returnTop.style.display = "block";
  }
};
window.addEventListener("scroll", verifyScroll);

// fim do script q verifica o tempo

// Script que faz a rolagem do scroll ir para o topo da pagina
const scroll = document.querySelector(".scroll");

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

scroll.addEventListener("click", scrollToTop);
// fim do script que faz a rolagem do scroll para o topo
