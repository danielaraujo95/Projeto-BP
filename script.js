//seleciona todos os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

//adiciona um evento de clique para cada link do menu
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    //previne o comportamento padrão do link
    event.preventDefault();
    //obtém o destino do link a partir do atributo href
    const target = document.querySelector(link.getAttribute('href'));
    //calcula a posição do destino em relação ao topo da página
    const targetPosition = target.offsetTop;
    //realiza o scroll suave até a posição do destino
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

