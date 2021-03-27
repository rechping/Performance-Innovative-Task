
var todos = [];
var counter = 0;
function savenow(){
	var inputted = document.getElementById("todoinput").value;
	if( inputted !=""){

		todos.push(inputted); 

	    document.getElementById('todoinput').value = '';

	    dis();
	}
	else{
		alert("Content Must be Added");
	}

}	


function dis() {

	// body...

	var node = document.getElementById('container');
	node.innerHTML = "";



	for (var i = todos.length - 1; i >= 0; i--) {
		var node = document.createElement('div'); 

	    node.innerHTML = '<input type="checkbox" class="checkbox"> <label class="strikethrough">'+ todos[i] +'</label> <button class="xbutton" onclick="del('+i+');"><img src="images/x.png"></button>';       
	    document.getElementById('container').appendChild(node);  
	}


	



}



function del(i) {
	// delete todos[i]; 
	todos.splice(i, i+1); 
	dis();

}




















// 	    list.removeChild(list.childNodes[i]);











// var todos = [];
// var counter = 0;
// function savenow(){
// 	var inputted = document.getElementById("todoinput").value;
// 	if( inputted !=""){




// 		todos.push(inputted); 
// 		counter++;


// 		var node = document.createElement('div'); 

// 	    node.innerHTML = '<input type="checkbox" id="check' + counter + '"" class="checkbox"> <label class="strikethrough">'+ todos[todos.length-1] +'</label>';       



// 	    document.getElementById('container').appendChild(node);  





// 	    document.getElementById('todoinput').value = '';
// 	}
// 	else{
// 		alert("Content Must be Added");
// 	}

// }	


























