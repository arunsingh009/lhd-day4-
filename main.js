const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
var total = document.getElementById('total')
const add = document.querySelector('.add');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


//Item create kiya hai yaha pe
class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name) {
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");

        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        var down = document.createElement('button');
        down.classList.add('down');
        down.innerHTML = "Add Process";
        down.addEventListener('click', () => this.down(Form));

        var Form = document.createElement('name');
        Form.classList.add('form');
        Form.setAttribute("id", "form");

        //add Procedure
        var y = document.createElement("TEXTAREA");
        y.placeholder = "Procedure";
        y.classList.add('forminput');


        var z = document.createElement("button");
        z.classList.add('save');
        z.innerHTML = "Save";
        // down.addEventListener('click', () => this.down(Form));


       //Appending
        container.appendChild(itemBox);

        itemBox.appendChild(checkbox);
        itemBox.appendChild(input);
        itemBox.appendChild(down);
        itemBox.appendChild(Form);
        Form.appendChild(y);
        Form.appendChild(z);
    }

    edit(input, name) {
        if (input.disabled == true) {
            input.disabled = !input.disabled;
        }
        else {
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }
    down(Form){
        Form.querySelector("form");
        Form.classList.toggle("display");
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if (inputValue.value != "") {
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    }
}

for (var v = 0; v < todos.length; v++) {
    new item(todos[v]);
}


