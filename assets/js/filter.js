/*--CS146: Final Project: JavaScript
----Team3: Mijeong Ban, Ian Gomez, Dana McGuire, Caroline Rubino, Luke Bukowiec
----I pledge my honor that I have abided by the Stevens Honor System. */

var food_types = {
	"Seafood" : ["Surf Taco", "Makai Poke"],
	"Vegetarian" : ["Quality Greens Kitchen", "Honeygrow"],
	"Fast_Food" : ["Gogi Grill","Pita Pit"],
	"Asian" : ["Gogi Grill","Karma Kafe", "Koro Koro", "Honeygrow", "Chicken Factory", "Robongi"],
 	"Mediterranean" : ["Flatbread Grill", "Mamoun's Falafel Restaurant", "It's Greek To Me"],
 	"Salad" : ["Makai Poke", "Bareburger", "Quality Greens Kitchen "],
 	"Cuban" : ["La Casa"],
 	"Sandwiches" : ["Midtown Philly Steaks","Flatbread Grill", "Mr. Wrap", "Hoboken Hot Bagels", "Pita Pit", "Giovanni's Pizzeria & Restaurant"],
 	"Coffee" : ["Bluestone Lane", "Kung Fu Tea", "bwe kafe", "Aether Game Cafe", "Empire Coffee & Tea Company"],
 	"Tea" : ["Bluestone Lane", "Kung Fu Tea", "bwe kafe", "Empire Coffee & Tea Company"],
 	"American" : ["Midtown Philly Steaks", "Bareburger", "Quality Greens Kitchen", "Amanda's Restaurant"],
 	 "Burgers" : ["Bareburger"],
 "Mexican" : ["Surf Taco"],
 "Breakfast" : ["Bluestone Lane", "Hoboken Hot Bagels", "Amanda's Restaurant", "Bagels On The Hudson"],
 "Italian" : ["Giovanni's Pizzeria & Restaurant"],
 "Pizza" : ["Benny Tudino's Pizzeria", "Grimaldi's Pizzeria", "Giovanni's Pizzeria & Restaurant", "Pizza Republic"],
 }
var links = { "Aether Game Cafe" : "assets/restaurantinfo/resInfo_aether.html",
"Amanda's Restaurant" : "assets/restaurantinfo/resInfo_amandas.html",
"Bagels On The Hudson" : "assets/restaurantinfo/resInfo_bagels.html",
"Bareburger" : "assets/restaurantinfo/resInfo_bare.html",
"Benny Tudino's Pizzeria": "assets/restaurantinfo/resInfo_benny.html",
"Bluestone Lane" : "assets/restaurantinfo/resInfo_bluestone.html",
"bwe kafe" : "assets/restaurantinfo/resInfo_bwe.html",
"Chicken Factory" : "assets/restaurantinfo/resInfo_chicken.html",
"Empire Coffee & Tea Company" : "assets/restaurantinfo/resInfo_empire.html",
"Flatbread Grill" : "assets/restaurantinfo/resInfo_flat.html",
"Giovanni's Pizzeria & Restaurant": "assets/restaurantinfo/resInfo_gio.html",
"Gogi Grill": "assets/restaurantinfo/resInfo_gogi.html",
"It's Greek To Me" : "assets/restaurantinfo/resInfo_greek/html",
"Grimaldi's Pizzeria" : "assets/restaurantinfo/resInfo_grimaldis.html",
"Honeygrow" : "assets/restaurantinfo/resInfo_honey.html",
"Hoboken Hot Bagels" : "assets/restaurantinfo/resInfo_hot.html",
"Karma Kafe" : "assets/restaurantinfo/resInfo_karma.html",
"Koro Koro" : "assets/restaurantinfo/resInfo_koro.html",
"Kung Fu Tea" : "assets/restaurantinfo/resInfo_kung.html",
"La Casa" : "assets/restaurantinfo/resInfo_lacasa.html",
"Makai Poke" : "assets/restaurantinfo/resInfo_makai.html",
"Mamoun's Falafel Restaurant" : "assets/restaurantinfo/resInfo_mamouns.html",
"Midtown Philly Steaks" : "assets/restaurantinfo/resInfo_midtown.html",
"Mr. Wrap" : "assets/restaurantinfo/resInfo_mr.html",
"Pita Pit" : "assets/restaurantinfo/resInfo_pita.html",
"Quality Greens Kitchen" : "assets/restaurantinfo/resInfo_quality.html",
"Pizza Republic": "assets/restaurantinfo/resInfo_republic.html",
"Robongi" : "assets/restaurantinfo/resInfo_robon.html",
"Surf Taco" : "assets/restaurantinfo/resInfo_surf.html"
};

function filter_list(lst){
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
function suggestions(){
	document.getElementById("recc_lst").innerHTML=""
	var form_nodes = document.getElementsByName("rest_types");
	var rest_types = []
	var restaurant_lst = ["Makai Poke", "Gogi Grill", "Midtown Philly Steaks", "Flatbread Grill", "Karma Kafe",
	"Surf Taco", "Bareburger", "Mamoun's Falafel Restaurant", "Koro Koro", "Quality Greens Kitchen", "Honeygrow",
	"La Casa", "Bluestone Lane", "Kung Fu Tea", "Mr. Wrap", "Hoboken Hot Bagels", "Benny Tudino's Pizzeria", "Amanda's Restaurant",
	"Pita Pit", "Chicken Factory", "Bagels On The Hudson", "Grimaldi's Pizzeria", "bwe kafe", "Aether Game Cafe", "It's Greek To Me",
	"Giovanni's Pizzeria & Restaurant", "Robongi", "Empire Coffee & Tea Company", "Pizza Republic"
	];
	form_nodes_length = form_nodes.length;
	for(var i = 0; i < form_nodes_length; i++){
		if (form_nodes[i].checked == true){
			rest_types.push(form_nodes[i].value)
		}
	}
	if(rest_types.length == 16 || rest_types.length == 0){

		var all_restaurants = restaurant_lst.length

		for(var i = 0; i < all_restaurants; i++){
			var refNode = document.createElement("a");
				refNode.href = links[restaurant_lst[i]];
				var pNode = document.createElement("p");
				pNode.innerHTML = String(restaurant_lst[i])
				refNode.appendChild(pNode)
				document.getElementById("recc_lst").appendChild(refNode)
		}
	}
	else{
		restaurant_lst = []
		filtered_types = rest_types.length
		for(var i = 0; i < filtered_types; i++){
			restaurant_length = food_types[rest_types[i]].length

			for(var j = 0; j < restaurant_length; j++){
				restaurant_lst.push(food_types[rest_types[i]][j])
			}
		}
			restaurant_lst = filter_list(restaurant_lst).sort();
			var all_restaurants = restaurant_lst.length
			for(var i = 0; i < all_restaurants; i++){
				var refNode = document.createElement("a");
				refNode.href = links[restaurant_lst[i]];
				var pNode = document.createElement("p");
				pNode.innerHTML = String(restaurant_lst[i])
				refNode.appendChild(pNode)
				document.getElementById("recc_lst").appendChild(refNode)

		}
	}
	document.getElementById("filter_form").reset();
}
