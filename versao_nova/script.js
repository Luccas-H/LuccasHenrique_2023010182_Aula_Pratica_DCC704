// Interatividade básica sem controle de estados para tecnologias assistivas
const botao = document.getElementById('btn-mensagem');
const mensagem = document.getElementById('mensagem-secreta');
const botao_to_gh = document.getElementById('btn-mensagem');


botao.onclick = function() {
  if (mensagem.style.display === 'none' || mensagem.style.display === '') {
    mensagem.style.display = 'block';
  } else {
    mensagem.style.display = 'none';
  }
};

botao_to_gh.addEventListener("click", function() {
    
})


