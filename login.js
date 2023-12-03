function login() {
  var username = document.getElementById('usernameInput').value
  var password = document.getElementById('passwordInput').value

  // Lista de usuários permitidos
  var usuariosPermitidos = [
    { username: 'usuario1', password: 'senha1', nome: 'João Paulo' },
    { username: 'usuario2', password: 'senha2', nome: 'Maria Eduarda' },
    { username: 'usuario3', password: 'senha3', nome: 'Pedro Alves' },
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
        'pages/home.html?username=' + encodeURIComponent(username)
    
  } else  {
    alert('Usuário ou senha inválidos. Tente novamente.')
  }
}
var laranja = document.getElementById("btn-tema1");
var azul = document.getElementById("btn-tema2");
var verde = document.getElementById("btn-tema3")

  laranja.addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "tema1");
  })

  azul.addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "tema2");
  })

  verde.addEventListener("click", function(){
    document.querySelector("body").setAttribute("class", "tema3");
  })


////////////////////////// ///////////////////////////////////////
