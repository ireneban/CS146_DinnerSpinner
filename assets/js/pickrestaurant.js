/*--CS146: Final Project: JavaScript
----Team3: Mijeong Ban, Ian Gomez, Dana McGuire, Caroline Rubino, Luke Bukowiec
----I pledge my honor that I have abided by the Stevens Honor System. */

function gotoRespage() {
  var pick = document.getElementById("res-pick");
  var dest = "assets/restaurantinfo/resInfo_"+
         pick.options[pick.selectedIndex].value+
         ".html"
  window.open(dest);
}
