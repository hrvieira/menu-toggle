const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefaul();
  const nav = document.getElementById('nav');
  // classList = listar todas as classes
  // toggle = adicione caso não tenha / remova caso tenha
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
/* Quando o evento de click é usado em um site mobile tem um atraso de 300ms, trasendo um pouco de atraso.
O menu vai ser aberto, mas não é tão responsivo */
btnMobile.addEventListener('touchstart', toggleMenu);