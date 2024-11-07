document.getElementById("login").addEventListener("submit", function(event) {
  // Obter valores dos campos
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Expressão regular para validar e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Checa se o e-mail está no formato correto
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    event.preventDefault(); // Impede o envio do formulário
    return;
  }

  // Checa se a senha atende ao comprimento mínimo
  if (password.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    event.preventDefault(); // Impede o envio do formulário
    return;
  }

  // Validação concluída com sucesso, o formulário será enviado
});
