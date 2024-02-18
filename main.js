const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  // classList = listar todas as classes
  // toggle = adicione caso não tenha / remova caso tenha
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);