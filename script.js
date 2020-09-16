var input = document.getElementById('userinput');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');
var deleteBtns = document.getElementsByClassName("delete");

//For Removing the item from todo
function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
  }
  
 //Cancelling the todo onclick
  function getEventTarget(e){
      e = e || window.event;
      return e.target || e.srcElement;
  }
  
  
  ul.onclick = function(event){
      var target = getEventTarget(event);
      target.classList.toggle("done");
  }
  
//Game starts here
function inputLength(){
    return input.value.length;
}

//creating a list element
function createListElement(){
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.classList.add('delete');
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}

//adding items to the end
function addListAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength()>0 && event.keyCode === 13){
        createListElement();
    }
}

//Boom!!
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);

