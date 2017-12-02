var a = [1,2,3,4,5]
a = a.filter(x => x == 1)
console.log(a)
function spinnerFunc() {
    // Code for Safari
    random_num = Math.random() * 360;
    counter = random_num + 1080
      document.getElementById("spinnerimg").style.transition = "transform 4s";
    
      document.getElementById("spinnerimg").style.WebkitTransform = "rotate(+"+counter+"deg)"; 
      // Code for IE9
      document.getElementById("spinnerimg").style.msTransform = "rotate(+"+counter+"deg)"; 
      // Standard syntax
      document.getElementById("spinnerimg").style.transform = "rotate(+"+counter+"deg)"; 
	
      setTimeout(function(){ if(random_num < 180){

        window.location.assign("assets/restaurantinfo/resInfo_aether.html")
      }
      else if (random_num > 180){
        window.location.assign("assets/restaurantinfo/resInfo_amandas.html")
      } 
    }, 4500);
      
}
lst1 = ["hi", "ho", "lets go", "hi", "ho", "lets","hi", "go"];
console.log(lst1);
console.log(filter_list(lst1))
console.log(filter_list2(lst1))
function filter_list(lst){
  var seen = {};
  return lst.filter(function(item){
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });

}
function filter_list2(lst){
  seen = {};
  return lst.filter(function(item){
    if (item in seen){
      return false;
    }
    else{
     seen[item] = true; 
     return true
    }
  });
}
