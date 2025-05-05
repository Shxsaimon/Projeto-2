function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!"; // atribui um texto para a variavel mensagem que será usada a seguir
            
    let inputTarefa = document.getElementById("inputTarefa"); //pega o input do html e armazena em uma variavel
    let tarefa = inputTarefa.value;//pega apenas o valor do input, não todo o texto que tem dentro
    if (tarefa === ""){
        alert("Por favor, adiocione uma tarefa.")   
    } 
    else {   document.getElementById("mensagem").textContent = mensagem; //puxa o elemento p do html e atribui ele o valor da variavel mensagem

        let listaTarefas = document.getElementById("listaTarefas");//declara uma variavel com o valor da lista do html puxada pelo id
        let novaTarefa = document.createElement("li");//declara uma nova variavel criando elementos li como valor

        novaTarefa.textContent = tarefa //atribui um novo valor a variavel recem criada em li com o valor digitado no input, retirado pela variavel tarefa

        listaTarefas.appendChild(novaTarefa);//adiciona um elemento filho(li) a variavel listaTarefas(ul)


        inputTarefa.value = "";//limpa o input
    }
   
 }