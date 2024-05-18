
    let todoList = [];

        const listfromLocalStorage = localStorage.getItem("todoList");
        if(listfromLocalStorage)
        {
            todoList = JSON.parse(listfromLocalStorage);
            renderToDoList();
        }
        function review(){
            alert("Review Added Successfully....😍");
            const inputElement = document.getElementById('input-element');
            todoList.push(inputElement.value);

            localStorage.setItem("todoList",JSON.stringify(todoList));

            inputElement.value = "";
            renderToDoList();
        }

        function renderToDoList()
        {
            const listContainer = document.getElementById('list-container');
            listContainer.innerHTML = "";

            for(const todoItem of todoList)
             {
                listContainer.innerHTML += `<div class="todo-Item">
                
                ${todoItem}
            </div>
                `
             }
        }