const botaoLogin = document.getElementById('botao-login');
const inputSenha = document.getElementById('senha');
const inputEmail = document.getElementById('email');
botaoLogin.addEventListener('click', () => {
  const email = inputEmail.value;
  const senha = inputSenha.value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const botao = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
checkbox.addEventListener('click', (event) => {
  const botaoClicado = event.target.checked;
  if (botaoClicado) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});
