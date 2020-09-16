//select the elements first
var input = document.getElementById('userinput');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');

//write in functions then

//for Deleting buttons
function removeTodo(evt){
    evt.target.removeEventListener('click', removeTodo, false);
    evt.target.parentNode.remove();
}

//for stroke or cancellation
function cancelTodo(e){
    e=e||e.window.event;
    return e.target || e.srcElement;
}

ul.onclick = function(event){
    var target = cancelTodo(event);
    target.classList.toggle('done');
}

//for creating a todo
function inputLength(){
    return input.value.length;
}

//creating a new list element
function createListElement(){
    //for adding button
    var btn = document.createElement('button');
    btn.innerHTML = 'Delete';
    btn.classList.add('delete');
    btn.onclick = removeTodo;
    //for list
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = '';
}

//combine altogether
function addAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}

function addAfterKeyPress(event){
    if(inputLength()>0 && event.keyCode === 13){
        createListElement();
    }
}

//time for assembling!
button.addEventListener('click', addAfterClick);
input.addEventListener('keypress', addAfterKeyPress);
