document.getElementById("selecione").addEventListener("change", function() {
  alteraCorFooter(this.value);
});

function alteraCorFooter(opcao) {
  const footer = document.getElementById("pageFooter");

  switch (opcao) {
    case "cor":
      footer.style.backgroundColor = "#ddd"; // Mudança de cor quando a opção "Alterar Cor Da Página" é selecionada
      break;
    case "fonte-pequena":
    case "fonte-media":
    case "fonte-grande":
      footer.style.backgroundColor = "#B3E5FC"; // Mantém o padrão para outras opções
      break;
    case "reset":
      footer.style.backgroundColor = "initial"; // Volta ao padrão
      break;
    default:
      footer.style.backgroundColor = "initial"; // Padrão
  }
}
function alteraCorFooter(opcao) {
  const footer = document.getElementById("pageFooter");

  switch (opcao) {
    case "fonte-pequena":
    case "fonte-media":
    case "fonte-grande":
      footer.style.backgroundColor = "#B3E5FC"; // Mudança de cor quando a opção "Alterar Cor Da Página" é selecionada
      break;
    case "cor":
      footer.style.backgroundColor = "#ddd"; // Mantém o padrão para outras opções
      break;
    case "reset":
      footer.style.backgroundColor = "initial"; // Volta ao padrão
      break;
    default:
      footer.style.backgroundColor = "initial"; // Padrão
  }
}

//botão ouvir

let speech = null;
let isPaused = false;

function leitorDeTexto() {
  if (speechSynthesis.speaking && !isPaused) {
    speechSynthesis.pause();
    isPaused = true;
  } else if (isPaused) {
    speechSynthesis.resume();
    isPaused = false;
  } else {
    const text = document.body.innerText;
    speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";

    speech.onend = () => {
      isPaused = false;
    };

    speechSynthesis.speak(speech);
  }
}

function verificarFimDaPagina() {
  // Verifica se o usuário chegou ao final da página
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if (speechSynthesis.speaking) {
      // Pausa ou para a leitura ao chegar no final da página
      speechSynthesis.pause();
      isPaused = true;
    }
  }
}
// Acessibilidade fonte/cor

document.addEventListener("DOMContentLoaded", function() {
  // Mapeamento de tamanhos de fonte
  const tamanhosDeFonte = {
    "fonte-pequena": "0.8em",
    "fonte-media": "1em",
    "fonte-grande": "1.9em"
  };

  // Função para alterar a cor de fundo da página
  function alterarCorDaPagina() {
    document.body.style.backgroundColor = "#ddd"; // Exemplo de cor de fundo
  }

  // Função para alterar o tamanho da fonte da página
  function alterarFonte(tamanho) {
    document.body.style.fontSize = tamanho;
  }

  // Função para resetar as configurações para o padrão
  function resetarConfiguracoes() {
    document.body.style.backgroundColor = ""; // Volta à cor padrão
    document.body.style.fontSize = "1em"; // Volta ao tamanho de fonte padrão
  }
  // Adiciona o evento 'change' ao select
  document.getElementById("selecione").addEventListener("change", function() {
    const valorSelecionado = this.value;

    if (valorSelecionado === "cor") {
      alterarCorDaPagina();
    } else if (valorSelecionado in tamanhosDeFonte) {
      alterarFonte(tamanhosDeFonte[valorSelecionado]);
    } else if (valorSelecionado === "reset") {
      resetarConfiguracoes();
    }
  });
});

document.getElementById("selecione").addEventListener("change", function() {
  alteraCorFooter(this.value);
});

// Alterando a cor do footer
function alteraCorFooter(opcao) {
  const footer = document.getElementById("pageFooter");

  switch (opcao) {
    case "cor":
      footer.style.backgroundColor = "#ddd"; // Mudança de cor quando a opção "Alterar Cor Da Página" é selecionada
      break;
    case "fonte-pequena":
    case "fonte-media":
    case "fonte-grande":
      footer.style.backgroundColor = "#B3E5FC"; // Mantém o padrão para outras opções
      break;
    case "reset":
      footer.style.backgroundColor = "initial"; // Volta ao padrão
      break;
    default:
      footer.style.backgroundColor = "initial"; // Padrão
  }
}

// Configura o evento de rolagem para verificar quando chega ao final da página
window.addEventListener("scroll", verificarFimDaPagina);

// Configura o evento de clique no botão para iniciar a leitura
document.getElementById("botaoLeitor").addEventListener("click", leitorDeTexto);
// 3. Adicione o evento ao botão "Parar":
