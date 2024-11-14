document.getElementById("login").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  if (password.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({ email, password });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://api-mentaltech.onrender.com/sessions/password", requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        alert("Seja bem vindo");

        // Limpar campos de entrada
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      } else {
        console.error("Token não encontrado na resposta.");
      }
    })
    .catch(error => console.error("Erro:", error));
});
// Salvar o token de exemplo no localStorage
// const authToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhOWQxMWVmOS1kZDYwLTQ2YzUtOGRjYi1jNmI0YTc5Y2Y4YmMiLCJpYXQiOjE3MzE0NTMxNDEsImV4cCI6MTczMjA1Nzk0MX0.1Hak-n4ixMt8NbW6hsY9xoiqrF9fLIRFEI-EffKWnVQ";
// localStorage.setItem("authToken", token);
// const savedToken = localStorage.getItem("authToken");
// console.log("Saved Token:", savedToken);
