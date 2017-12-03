function spinnerFunc() {
    // Code for Safari
    random_num = Math.random() * 360
    counter = random_num + 1080
      document.getElementById("spinnerimg").style.transition = "transform 4s";
    
      document.getElementById("spinnerimg").style.WebkitTransform = "rotate(+"+counter+"deg)"; 
      // Code for IE9
      document.getElementById("spinnerimg").style.msTransform = "rotate(+"+counter+"deg)"; 
      // Standard syntax
      document.getElementById("spinnerimg").style.transform = "rotate(+"+counter+"deg)"; 
	
      setTimeout(function(){ if(random_num >= 0 && random_num < 45){

        window.location.assign("assets/restaurantinfo/resInfo_honey.html")
      }
      else if (random_num >= 45 && random_num < 90){
        window.location.assign("assets/restaurantinfo/resInfo_flat.html")
      } 
      else if(random_num >= 90 && random_num < 135){
        window.location.assign("assets/restaurantinfo/resInfo_bare.html")
      }
      else if(random_num >= 135 && random_num < 180){
        window.location.assign("assets/restaurantinfo/resInfo_republic.html")
      }
      else if(random_num >= 180 && random_num < 225){
        window.location.assign("assets/restaurantinfo/resInfo_pita.html")
      }
      else if(random_num >= 225 && random_num < 270){
        window.location.assign("assets/restaurantinfo/resInfo_karma.html")
      }
      else if(random_num >= 275 && random_num < 315){
        window.location.assign("assets/restaurantinfo/resInfo_gogi.html")
      }
      else if(random_num >= 315 && random_num < 360){
        window.location.assign("assets/restaurantinfo/resInfo_benny.html")
      }
    }, 4500);
      
}

