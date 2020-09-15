var input = document.getElementById('userinput');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

// delete waala
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:
function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
  }
  
  //click on a list item and it strikethroughs the text
  function getEventTarget(e){
      e = e || window.event;
      return e.target || e.srcElement;
  }
  
  
  ul.onclick = function(event){
      var target = getEventTarget(event);
      target.classList.toggle("done");
  }
  

function inputLength(){
    return input.value.length;
}

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

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);

