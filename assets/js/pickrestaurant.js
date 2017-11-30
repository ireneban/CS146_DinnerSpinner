function gotoRespage() {
  var pick = document.getElementById("res-pick");
  var dest = "assets/restaurantinfo/resInfo_"+
         pick.options[pick.selectedIndex].value+
         ".html"
  window.open(dest);
}
