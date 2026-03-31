let tarefaInput = document.getElementById("tarefa");
let botao = document.getElementById("adicionar");
let lista = document.getElementById("lista");

botao.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = tarefaInput.value;
    lista.appendChild(li);
    tarefaInput.value = "";
})

lista.addEventListener("click", function(event) {
    const item = event.target;
    if (item.tagName === "LI") {
        item.style.textDecoration = "line-through";
    }
})

lista.addEventListener("dblclick", function(event) {
    const item = event.target;
    if (item.tagName === "LI") {
        lista.removeChild(item);
    }
})