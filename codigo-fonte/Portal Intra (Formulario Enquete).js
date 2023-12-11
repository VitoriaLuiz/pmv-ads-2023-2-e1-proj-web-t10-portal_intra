document.addEventListener('DOMContentLoaded', function() {
  
    document.getElementById('tema da Enquete').addEventListener('input', function() {

       document.getElementById('Titulo da Enquete').innerText = this.value;
    });
    document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
       event.preventDefault(); 
      
       const temaDaEnquete = document.getElementById('tema da Enquete').value;
       const opcaoA = document.getElementById('Opção A').value;
       const opcaoB = document.getElementById('Opção B').value;
       const opcaoC = document.getElementById('Opção C').value;
   
       if (temaDaEnquete && opcaoA && opcaoB && opcaoC) {
       } else {
         
       }
    });
   });
   
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('inicio').addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicou em Inicio');
      });

      document.getElementById('criar-enquete').addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicou em Criar Enquete');
      });

      document.getElementById('gerar-denuncias').addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicou em Gerar Denúncias');
      });

      document.getElementById('criar-usuario').addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicou em Criar Usuário');
      });

      document.getElementById('sair').addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicou em Sair');
      });
    });
    
