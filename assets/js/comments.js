function getinput() {
  var username = document.getElementById("username").value;
  var comments = document.getElementById("commenting").value;

  addNewComments(username, comments);
}

/*
<div class="post">
  <span>username</span>
  <span id = "cover">comments</span>
</div>
*/

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

  var secondspan = document.createElement("span");
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
