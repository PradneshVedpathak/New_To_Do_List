////Adding ToDo////
function addToDo() {
  var list = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var text = document.createTextNode(inputValue);
  list.appendChild(text);

  //Use if to give alert if input box is empty
  if (inputValue == "") {
    alert("You must write something!!!");
  } else {
    document.getElementById("unOrderList").appendChild(list);
  }

  document.getElementById("input").value = "";

  var li = document.querySelectorAll("ul li");

  li.forEach((li, index) => {
    li.id = `li-${index + 1}`;
  });

  //Creating close symbol
  var span1 = document.createElement("span");
  var txt1 = document.createTextNode("\u00D7");
  span1.className = "closeTag";
  span1.appendChild(txt1);
  list.appendChild(span1);

  //Creating for loop to disabled list item after clicking close symbol
  var closeTag = document.getElementsByClassName("closeTag");
  for (let i = 0; i < closeTag.length; i++) {
    closeTag[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  var span2 = document.createElement("span");
  var txt2 = document.createTextNode("\u270E");
  span2.className = "editTag";
  span2.appendChild(txt2);
  list.appendChild(span2);

  var editTag = document.getElementsByClassName("editTag");
  for (let i = 0; i < editTag.length; i++) {
    editTag[i].onclick = function () {
      var editInputValue = prompt("Edit your entry");

      console.log(document.getElementById("unOrderList"));
      for (let j = 1; j <= editTag.length; j++) {
        if (i + 1 == j) {
          let a = document.getElementById(`li-${j}`);

          a.innerText = editInputValue;
        }
      }
    }
  }
}
