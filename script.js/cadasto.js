document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.getElementById("cadastro-form");
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    resetErrorMessages();

    if (!validateAge()) {
      alert("Você deve ter pelo menos 18 anos.");
      return;
    }

    if (!validateRequiredFields()) {
      return;
      ed;
    }

    if (!comparePasswords()) {
      alert("As senhas não coincidem.");
      return;
    }

    this.submit();
  });

  function validateRequiredFields() {
    let requiredFields = document.querySelectorAll(".obrigatoria");
    let fieldsValid = true;

    for (let i = 0; i < requiredFields.length; i++) {
      let field = requiredFields[i];
      if (field.value === "" || field.value === null) {
        displayError(field, "Este campo é obrigatório");
        fieldsValid = false;
      }
    }

    return fieldsValid;
  }

  function comparePasswords() {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    return senha === confirmarSenha;
  }

  function displayError(element, message) {
    let errorMessage = element.parentElement.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "inline-block";
  }

  function resetErrorMessages() {
    let errorMessages = document.querySelectorAll(".error-message");
    for (let i = 0; i < errorMessages.length; i++) {
      errorMessages[i].textContent = "";
    }
  }

  function validateAge() {
    const birthDate = new Date(
      document.getElementById("data_nascimento").value
    );
    const today = new Date();
    const minimumAge = 18;

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age >= minimumAge;
  }

  document
    .getElementById("data_nascimento")
    .addEventListener("change", function() {
      const ageError = document.getElementById("idade-error");

      if (!validateAge()) {
        ageError.textContent = "Você deve ter pelo menos 18 anos";
      } else {
        ageError.textContent = "";
      }
    });
});

//botão ouvir

// let speech = null;
// let isPaused = false;

// function leitorDeTexto() {
//   if (speechSynthesis.speaking && !isPaused) {
//     speechSynthesis.pause();
//     isPaused = true;
//   } else if (isPaused) {
//     speechSynthesis.resume();
//     isPaused = false;
//   } else {
//     const text = document.body.innerText;
//     speech = new SpeechSynthesisUtterance(text);
//     speech.lang = "pt-BR";

//     speech.onend = () => {
//       isPaused = false;
//     };

//     speechSynthesis.speak(speech);
//   }
// }

// function verificarFimDaPagina() {
//   // Verifica se o usuário chegou ao final da página
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     if (speechSynthesis.speaking) {
//       // Pausa ou para a leitura ao chegar no final da página
//       speechSynthesis.pause();
//       isPaused = true;
//     }
//   }
// }
// // Acessibilidade fonte/cor

// document.addEventListener("DOMContentLoaded", function() {
//   // Mapeamento de tamanhos de fonte
//   const tamanhosDeFonte = {
//     "fonte-pequena": "0.8em",
//     "fonte-media": "1em",
//     "fonte-grande": "1.9em"
//   };

//   // Função para alterar a cor de fundo da página
//   function alterarCorDaPagina() {
//     document.body.style.backgroundColor = "#ddd"; // Exemplo de cor de fundo
//   }

//   // Função para alterar o tamanho da fonte da página
//   function alterarFonte(tamanho) {
//     document.body.style.fontSize = tamanho;
//   }

//   // Função para resetar as configurações para o padrão
//   function resetarConfiguracoes() {
//     document.body.style.backgroundColor = ""; // Volta à cor padrão
//     document.body.style.fontSize = "1em"; // Volta ao tamanho de fonte padrão
//   }
//   // Adiciona o evento 'change' ao select
//   document.getElementById("selecione").addEventListener("change", function() {
//     const valorSelecionado = this.value;

//     if (valorSelecionado === "cor") {
//       alterarCorDaPagina();
//     } else if (valorSelecionado in tamanhosDeFonte) {
//       alterarFonte(tamanhosDeFonte[valorSelecionado]);
//     } else if (valorSelecionado === "reset") {
//       resetarConfiguracoes();
//     }
//   });
// });

// document.getElementById("selecione").addEventListener("change", function() {
//   alteraCorFooter(this.value);
// });

// function alteraCorFooter(opcao) {
//   const footer = document.getElementById("pageFooter");

//   switch (opcao) {
//     case "cor":
//       footer.style.backgroundColor = "#ddd"; // Mudança de cor quando a opção "Alterar Cor Da Página" é selecionada
//       break;
//     case "fonte-pequena":
//     case "fonte-media":
//     case "fonte-grande":
//       footer.style.backgroundColor = "#B3E5FC"; // Mantém o padrão para outras opções
//       break;
//     case "reset":
//       footer.style.backgroundColor = "initial"; // Volta ao padrão
//       break;
//     default:
//       footer.style.backgroundColor = "initial"; // Padrão
//   }
// }

// // Configura o evento de rolagem para verificar quando chega ao final da página
// window.addEventListener("scroll", verificarFimDaPagina);

// // Configura o evento de clique no botão para iniciar a leitura
// document.getElementById("botaoLeitor").addEventListener("click", leitorDeTexto);
// // 3. Adicione o evento ao botão "Parar":
