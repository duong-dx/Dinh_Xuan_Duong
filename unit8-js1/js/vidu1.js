function add(){
	var input = document.getElementById('input');
	var a= input.value;
	
	var vvgv= document.getElementById('content') ;
	input.value = '';
	vvgv.innerHTML += a + '<br>';
	// input.value = '';
}