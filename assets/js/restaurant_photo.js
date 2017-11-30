window.addEventListener("load", function(){

  var list = document.getElementById("img_list");

  list.addEventListener("mouseover", function(e){
    if(e.target.nodeName.toLowerCase() == 'img'){
      var chosen = e.target.src;
      var newSrc = chosen.replace("small", "big");

      var mainImage = document.querySelector("#main_fig img");
      mainImage.src = newSrc;
      mainImage.title = e.target.title;
    }
  });

  var mainImage = document.getElementById("main_fig");
  mainImage.addEventListener("mouseover", function(e){
    var caption = document.querySelector("#main_fig figcaption");
    caption.style.transition = "opacity 1.5s";
    caption.style.opacity = 0.75;
    caption.innerHTML = document.querySelector("#main_fig img").title;
  });

  mainImage.addEventListener("mouseout", function(e){
    var caption = document.querySelector("#main_fig figcaption");
    caption.style.transition = "opacity 1.5s";
    caption.style.opacity = 0;
  });
});
