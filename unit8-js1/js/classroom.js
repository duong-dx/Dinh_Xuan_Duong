// function clickMe(){
	// alert('Hello Duong')
	// confirm('Bạn muốn xác nhận hay không?') ấn ok trả về true ấn không trả về false
	// if(confirm('Bạn muốn chuyển trang hay không?')){
	// 	window.location.href="https://www.facebook.com/profile.php?id=100006449349295"; chuyển trnag 

		
	// }
	// var age =prompt('Nhập vào tuổi',3)
	// alert('tuổi cảu bạn là '+ age)
	// var a = prompt('Nhập vào a :');
	// var b= prompt('Nhập vào b :');

	// var chuoi='Kết quả là :';
	// alert(   chuoi + parseInt(a)+parseInt(b));

	// document.write(  parseInt(a)+parseInt(b));
	// var a= 1;
	// if (a=='1') {
	// 	alert('chuỗi');
	// }
	// else{
	// 	alert('sai');
	// }
	// switch(key){
	// 	case :1;
	// 		break;
	// 	case :2;
	// 		break;
	// 	case :3;
	// 		break;
	// 	case :4;
	// 		break;
	// 	case :5;
	// 		break;
	// 	default: break;
	// }
	// document.getElementById('name').style.color='green';
	// document.getElementById('name').innerHTML = 'I love you chịch chịch';
// 	var a = document.getElementsByClassName('text');
// 	for (var i = a.length - 1; i >= 0; i--) {
// 		a[i].style.color="red";
// 	}
// }
		function getValue(){
			alert(document.frm.name.value);
			alert(document.frm.pass.value);
			alert(document.frm.area.value);
			for (var i = 0; i < 2; i++) {
				if (document.frm.rd[i].checked == true) {
					alert(document.frm.rd[i].value);
				}
			}
			
		}
		function bigImg(x) {
			x.style.height = "500px";
			x.style.width = "500px";
		}
		function normalImg(x) {
			x.style.height = "100px";
			x.style.width = "100px";
		}function bigImg1(x) {
			x.style.height = "600px";
			x.style.width = "600px";
		}
		function normalImg1(x) {
			x.style.height = "100px";
			x.style.width = "100px";
		}


