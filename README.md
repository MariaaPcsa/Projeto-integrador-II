# Projeto-integrador-II
# Mentaltech - Seu abraço virtual

## Descrição
Mentaltech é uma plataforma online que oferece suporte à saúde mental. Esta página, intitulada "Cadastro", faz parte do projeto, permitindo que os usuários (pacientes, psicólogos e psiquiatras) se cadastrem para acessar recursos, depoimentos e conteúdos como músicas e filmes relaxantes. O site também visa criar uma comunidade de suporte emocional, oferecendo informações úteis e um espaço seguro para os usuários.
## Estrutura do Projeto
O site é composto por várias páginas, incluindo:

- **Home**: Página inicial com uma visão geral dos serviços.
- **Recursos de Apoio**: Conteúdos e links de suporte para saúde mental.
- **Depoimentos**: Depoimentos de usuários sobre suas experiências.
- **Músicas & Filmes**: Lista de músicas relaxantes e filmes indicados.
- **FAQ**: Perguntas frequentes sobre a plataforma.
- **Quem Somos**: Informações sobre a equipe e o propósito da plataforma.
- **Cadastro**: Página de registro de novos usuários.

## Tecnologias Utilizadas

### Front-end:
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização personalizada da página e layout responsivo.
- **Bootstrap 5.3**: Framework para design responsivo e componentes prontos.
- **Google Fonts**: Fontes customizadas para melhor experiência visual.
  
### JavaScript:
- Arquivos JavaScript para validação de formulário e interações com o usuário.
  
## Funcionalidades Principais
- **Cadastro de Usuários**: O formulário de cadastro permite que usuários escolham seu tipo (Paciente, Psicólogo, Psiquiatra), insiram seus dados pessoais como nome, e-mail, telefone e criem uma senha para acesso à plataforma.
- **Validação de Formulários**: O formulário é validado para garantir que os campos obrigatórios estejam preenchidos corretamente antes de enviar os dados.
- **Layout Responsivo**: O design é responsivo, funcionando bem em dispositivos móveis e desktop.

## Como Rodar o Projeto

### Pré-requisitos:
- Navegador web atualizado (Google Chrome, Firefox, etc.)
- Acesso à internet (para carregar o Bootstrap e as fontes do Google)

### Executando Localmente:
1. Baixe o projeto.

2
2. Abra o arquivo `index.html` em seu navegador.
3. Navegue pelas diferentes seções utilizando o menu lateral.

## Estrutura de Arquivos
mentaltech/
│
├── css/
│   ├── index.css
│   └── cadastro.css
│
├── img/
│   └── logo1.ico
│
├── pages/
│   ├── apoio.html
│   ├── depoimentos.html
│   ├── musica.html
│   ├── faq.html
│   ├── quem.html
│   └── cadastro.html
│
├── script.js/
│   └── cadastro.js
│
└── index.html


## Funcionalidades Principais

### 1. Acessibilidade de Interface
   - **Mudança de Cor e Tamanho da Fonte**: 
     - O site permite que o usuário ajuste o tamanho da fonte e altere a cor do fundo para melhorar a legibilidade. Há três opções de tamanho de fonte ("pequena", "média" e "grande") e uma opção de cor de fundo padrão.
   - **Modificação do Footer**: 

   
     - O rodapé altera sua cor dependendo das opções selecionadas pelo usuário, com um padrão azul claro para opções de fonte e uma cor cinza para a opção de alteração de cor da página.

### 2. Leitor de Texto

   
   - **Botão de Leitura em Voz**: 

   
     - Ao clicar no botão "Ouvir", o texto da página é lido em voz alta. O leitor permite pausar e retomar a leitura conforme desejado, proporcionando suporte adicional para acessibilidade.
   - **Verificação de Rolagem até o Final da Página**: 
     - Quando o usuário chega ao final da página, o leitor pausa automaticamente, dando ao usuário controle sobre a navegação e leitura.

### 3. Estrutura do Código

  
   - **HTML e JavaScript**:
     - O código HTML está estruturado para definir a página, e o JavaScript controla as funcionalidades dinâmicas, incluindo o leitor de texto e ajustes de acessibilidade.

  
   - **Funções**:

 
     - `alteraCorFooter(opcao)`: ajusta a cor do rodapé conforme a seleção do usuário.

 
     - `leitorDeTexto()`: controla a leitura em voz alta, permitindo pausar, retomar e iniciar a leitura.

  
     - `alterarCorDaPagina()`, `alterarFonte(tamanho)` e `resetarConfiguracoes()`: permitem configurar o fundo e o tamanho da fonte da página.
     - `verificarFimDaPagina()`: verifica se o usuário chegou ao final da página para pausar o leitor de texto.

## Como Usar



1
1. **Alterar Configurações**:
   - Selecione uma opção de acessibilidade para ajustar cor ou tamanho da fonte através do menu "Acessibilidade".

2. **Ouvir o Texto da Página**:

   
   - Clique no botão de leitura para ouvir o conteúdo em voz alta.
   - A leitura pausará automaticamente ao chegar no fim da página.

## Dependências

Este projeto usa a API de síntese de fala do navegador para o recurso de leitura em voz alta. Nenhuma dependência adicional é necessária.

## Licença
Este projeto está sob a licença **Mentaltech 2024**. Todos os direitos reservados.
