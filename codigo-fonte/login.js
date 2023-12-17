document.addEventListener('DOMContentLoaded', function () {
  const carouselSlide = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide img');
  let counter = 0;

  function updateCarousel() {
      const size = images[0].clientWidth;
      carouselSlide.style.transition = "transform 0.5s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  function showImage(index) {
      images.forEach((image, i) => {
          if (i === index) {
              image.classList.add('active');
          } else {
              image.classList.remove('active');
          }
      });
  }

  function prevSlide() {
      if (counter > 0) {
          counter--;
      } else {
          counter = images.length - 1;
      }
      updateCarousel();
      showImage(counter);
  }

  function nextSlide() {
      if (counter < images.length - 1) {
          counter++;
      } else {
          counter = 0;
      }
      updateCarousel();
      showImage(counter);
  }

  function autoSlide() {
      nextSlide();
  }

  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  document.getElementById('nextBtn').addEventListener('click', nextSlide);

  updateCarousel(); // Exibir a imagem inicial
  showImage(counter); // Exibir a imagem inicial com opacidade

  setInterval(autoSlide, 5000);
});

function alertaEnquete() {
  alert("Enquete criada com Sucesso!");
}

function login() {
  var username = document.getElementById('usernameInput').value
  var password = document.getElementById('passwordInput').value

  // Lista de usuários permitidos
  var usuariosPermitidos = [
    { username: 'usuario1', password: 'senha1', nome: 'João Paulo' },
    { username: 'usuario2', password: 'senha2', nome: 'Maria Eduarda' },
    { username: 'usuario3', password: 'senha3', nome: 'Pedro Alves' },
    { username: 'joaolucas', password: '1234', nome: 'Pedro Alves' },
    { username: 'admin', password: 'admin', nome: 'ADM Portal Intra' }
  ]
  if (username === '' || password === '') {
    alert('Por favor, preencha todos os campos.')
    return
  }
  
  var isUserAllowed = false
  var isAdmin = false

  for (var i = 0; i < usuariosPermitidos.length; i++) {
    if (
      usuariosPermitidos[i].username === username &&
      usuariosPermitidos[i].password === password
    ) {
      localStorage.setItem('username', usuariosPermitidos[i].nome)
      isUserAllowed = true
      break
    }
  }
  console.log('MADMIN')
  if (isUserAllowed) {
   
      alert('Login bem-sucedido como usuário!')

      // Redireciona para a tela de usuário
      window.location.href =
        './HomePage Portal Intra.html?username=' + encodeURIComponent(username)
    
  } else  {
    alert('Usuário ou senha inválidos. Tente novamente.')
  }
}
const laranja = document.getElementById("btn-tema1");

  laranja.addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "tema1");
  })

  document.getElementById("btn-tema2").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "tema2");
  })

  document.getElementById("btn-tema3").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "tema3");
  })




////////////////////////// ///////////////////////////////////////
