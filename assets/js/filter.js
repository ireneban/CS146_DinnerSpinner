var Seafood = [];
var Vegetarian = [];
var Fast Food = [];
var Asian = [];
var Medetterian = [];
var Salad = [];
var Cuban = [];
var Sandwiches = [];
var Coffee = [];
var Tea = [];
var links = {};
function 
function filter_list(lst){
	var seen = {};
	return lst.filter(function(item){
		return seen.hasOwnProperty(item) ? false : (seen[item] = true)
	});
}

function func(){
	var rest_types = document.getElementsByName("rest_types");
	var restaurant_lst = [];
	rest_types = rest_types.filter(i => i.checked == true)
	if(rest_types.length == 0 or rest_types.length == 15){
		// for yada in filtered list create new a node make href = something 
	}
	else{
		filter_lst = []
		// for item in restaurant types append all of it to the list
		filter_lst = filter_list(filter_lst)
		// for item in filter list create new a node make href = links[item] create p node pnode.innerHTML = item append append 

	}
}
