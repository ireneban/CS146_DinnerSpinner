function getinput() {
  var username = document.getElementById("username").value;
  var comments = document.getElementById("commenting").value;

  addNewComments(username, comments);
}

function addNewComments(username, comment){
  var post = document.createElement("div");
  post.className = "post";

  var firstspan = document.createElement("span");
  firstspan.id = "cover";
  var heart = document.createTextNode("#");
  var name = document.createTextNode(username);
  firstspan.appendChild(heart);
  firstspan.appendChild(name);
  post.appendChild(firstspan);

  var radiospan = document.createElement("span");
  radiospan.id = "radio-style";
  var choose = document.getElementsByName("choose");
  var out = "";
  if(choose[0].checked) out = choose[0].value;
  if(choose[1].checked) out = choose[1].value;
  if(choose[2].checked) out = choose[2].value;
  var rate = document.createTextNode(out);
  radiospan.appendChild(rate);
  post.appendChild(radiospan);

  var secondspan = document.createElement("span");
  secondspan.id = "comments";
  var com = document.createTextNode(comment);
  secondspan.appendChild(com);
  post.appendChild(secondspan);

  var postwrapper = document.getElementById("post-wrapper");
  postwrapper.appendChild(post);

  post.addEventListener("mouseover", function(e) {
    firstspan.style.color = "pink";
  });

  post.addEventListener("mouseout", function(e) {
    firstspan.style.color = "#484848";

  });
}
