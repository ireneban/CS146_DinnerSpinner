
var food_types = {
	"Seafood" : ["Surf Taco", "Makai Poke"],
	"Vegetarian" : ["Quality Greens Kitchen", "Honeygrow"],
	"Fast_Food" : ["Gogi Grill","Pita Pit"],
	"Asian" : ["Gogi Grill","Karma Kafe", "Koro Koro", "Honeygrow","Chicken Factory", "Robongi"],
 	"Mediterranean" : ["Flatbread Grill", "Mamoun's Falafel Restaurant", "It's Greek To Me"],
 	"Salad" : ["Makai Poke", "Bareburger", "Quality Greens Kitchen "],
 	"Cuban" : ["La Casa"],
 	"Sandwiches" : ["Midtown Philly Steaks","Flatbread Grill", "Mr. Wrap", "Hoboken Hot Bagels","Pita Pit", "Giovanni's Pizzeria & Restaurant"],
 	"Coffee" : ["Bluestone Lane", "Kung Fu Tea", "bwe kafe", "Aether Game Cafe", "Empire Coffee & Tea Company"],
 	"Tea" : ["Bluestone Lane", "Kung Fu Tea", "bwe kafe", "Empire Coffee & Tea Company"],
 	"American" : ["Midtown Philly Steaks", "Bareburger", "Quality Greens Kitchen", "Amanda's Restaurant"],
 	 "Burgers" : ["Bareburger"],
"Mexican" : ["Surf Taco"],
 "Breakfast" : ["Bluestone Lane", "Hoboken Hot Bagels", "Amanda's Restaurant", "Bagels On The Hudson"],
 "Italian" : ["Giovanni's Pizzeria & Restaurant"],
 "Pizza" : ["Benny Tudino's Pizzeria", "Grimaldi's", "Giovanni's Pizzeria & Restaurant", "Pizza Republic"],
 } 
var links = {};

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
	"Pita Pit", "Chicken Factory", "Bagels On The Hudson", "Grimaldi's", "bwe kafe", "Aether Game Cafe", "It's Greek To Me", 
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
				refNode.href = "#"
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
				refNode.href = "#"
				var pNode = document.createElement("p");
				pNode.innerHTML = String(restaurant_lst[i])
				refNode.appendChild(pNode)
				document.getElementById("recc_lst").appendChild(refNode)
			
		}
	}
	document.getElementById("filter_form").reset();
}
