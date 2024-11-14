const input = document.getElementById("taskInput");
const checkbox = document.getElementById("checkbox");
const ul = document.getElementById("taskList");
const s = document.getElementById("sendMessageBtn");

function addTask() {
  if (input.value !== "" && checkbox.checked) {
    const li = document.createElement("li");
    li.textContent = input.value;

    const removerBotao = document.createElement("button");
    removerBotao.textContent = "Remover";
    removerBotao.onclick = function() {
      ul.removeChild(li);
    };

    li.appendChild(removerBotao);
    ul.appendChild(li);

    input.value = "";
  } else if (input.value === "" && checkbox.checked) {
    alert("Por favor, insira uma tarefa.");
  } else if (!checkbox.checked) {
    alert("Marque o checkbox para continuar.");
  }
}

function enviarDados() {
  const liItems = ul.querySelectorAll("li");
  const taskList = [];

  liItems.forEach(item => {
    taskList.push(item.textContent.replace("Remover", "").trim());
  });

  if (taskList.length === 0) {
    alert("Não há tarefas para enviar.");
    return;
  }

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const rawData = JSON.stringify({ tasks: taskList });

  const options = {
    method: "POST",
    headers: headers,
    body: rawData,
    redirect: "follow"
  };

  fetch("https://api-mentaltech.onrender.com/testimony", options)
    .then(response => response.json())
    .then(data => {
      console.log("Resposta do servidor:", data);
      alert("Dados enviados com sucesso!");
    })
    .catch(error => {
      console.error("Erro ao enviar dados:", error);
    });
}

// Apenas exemplo para requisições GET. Remova ou ajuste conforme necessário.
const getHeaders = new Headers();
getHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhOWQxMWVmOS1kZDYwLTQ2YzUtOGRjYi1jNmI0YTc5Y2Y4YmMiLCJpYXQiOjE3MzEyNzI4NTgsImV4cCI6MTczMTg3NzY1OH0.NKSHQTMSUu9z2cW_1OXcKi7MTRbT24v0N2Ggbq-BKL0"
);

fetch("https://api-mentaltech.onrender.com/testimony", {
  method: "GET",
  headers: getHeaders
})
  .then(response => response.text())
  .then(result => console.log(result));

document.getElementById("sendMessageBtn").onclick = enviarMensagem;

function enviarMensagem() {
  const liItems = ul.querySelectorAll("li");
  const taskList = [];

  liItems.forEach(item => {
    taskList.push(item.textContent.replace("Remover", "").trim());
  });

  if (taskList.length === 0) {
    alert("Não há tarefas para enviar.");
    return;
  }

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append(
    "Authorization",
    `Bearer ${localStorage.getItem("authToken")}`
  );

  const rawData = JSON.stringify({ tasks: taskList });

  const options = {
    method: "POST",
    headers: headers,
    body: rawData,
    redirect: "follow"
  };

  fetch("https://api-mentaltech.onrender.com/testimony", options)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na resposta do servidor");
      }
      return response.json();
    })
    .then(data => {
      console.log("Resposta do servidor:", data);
      alert("Dados enviados com sucesso!");
    })
    .catch(error => {
      console.error("Erro ao enviar dados:", error);
    });
}
enviarMensagem(onclick);
//https://api-mentaltech.onrender.com/testimony
//https://console.neon.tech/app/projects/wandering-heart-28908450/branches/br-flat-tooth-a509nxaq/tables?database=metaltechdb
// const headers = new Headers();
//   headers.append("Content-Type", "application/json");

//   const rawData = JSON.stringify({ tasks: taskList });

// {
//   "testimonies": [
//     {
//       "content": "string",
//       "createdAt": "2024-11-14T02:05:38.129Z",
//       "id": "string",
//       "authorId": "string"
//     }
//   ]
// }
