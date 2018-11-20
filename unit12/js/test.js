var index=1;
var eq=1;
$(function () {
	$('#next').on('click',function() {
		switch (index) {
			case 1:
			if (checkTab1()==true) {
				NextTab(1);
				NextItem(1);
			}
			break;
			case 2 :
			if(checkTab2()==true){
				if ($('#age').val()>18) {
					$('#item3').css('background','#CCCCCC');
						$('#item3').css('opacity','1');
						$('#item2').css('opacity','0.6');
						$('#tab2').hide(2000);
					NextTab(3);
					NextItem(3);
						
					}
					else{
						NextTab(2);
						NextItem(2);
					}
				}
				break;
			case 4: 
			if (checkTab4()==true) {
				alert('Registration successful');
			}


			}
		})
	$('#prev').on('click',function(){
		switch (index){
			case 1: 
				break;
			case 2: 
				if (checkTab2()) {
					PrevItem(2);
					PreviousTab(2);
					break;

				}
			case 3 :
				PreviousTab(3);
				PrevItem(3);
				break;
			case 4 :
			if (checkTab4()==true) {
				PrevItem(3);
				PreviousTab(3);
				$('#item3').css('background','#CCCCCC');
				$('#tab4').hide(2000);
				$('#item4').css('opacity','0.6');
				$('#item2').css('opacity','1');
				$('#tab2').show(2000);

			}

		}
	})
				})
	function checkTab1(){
		var username= $('#username').val();
		var password = $('#password').val();
		var repassword =$('#repassword').val();
		var errUserName =false;
		var errPassword =false;
		var errRePassword =false;
		var dem=0;
		if(username.trim()==""){
			$('#checkUserName').html('This field is required.')
			$('#username').css('background','#fbe3e4');
			$('#username').css('color','#8a609a'); 
			dem++;
		}
		else{
			$('#checkUserName').html('');
			errUserName=true;
			$('#username').css('background','white');
			$('#username').css('color','black');
		}
		if(password.trim()==""){
			$('#checkPassword').html('This field is required.');
			$('#password').css('background','#fbe3e4');
			$('#password').css('color','#8a609a');
			dem++;
		}
		else{
			$('#checkPassword').html('');
			$('#password').css('background','white');
			$('#password').css('color','black');
			errPassword=true;
		}
		if(repassword.trim()==""){
			$('#checkRePassword').html('This field is required.');
			$('#repassword').css('background','#fbe3e4');
			$('#repassword').css('color','#8a609a');
			dem++;
		}
		else if(repassword.trim()!=password.trim()){
			$('#checkRePassword').html('Please enter the same value again.');
			$('#repassword').css('background','#fbe3e4');
			$('#repassword').css('color','#8a609a');
			dem++;
		}
		else{
			$('#checkRePassword').html('')
			errRePassword=true;
			$('#repassword').css('background','white');
			$('#repassword').css('color','black');
		}
		if(dem>1){
			$('#item1').css('background','red')
		}
		else if(dem==0){
			$('#item1').css('background',' #2184be')
		}
		if(errPassword==true && errUserName==true && errRePassword==true){
			return true;

		}
		else{
			return false;

		}

	}
	function checkTab4(){
		var Checkbox = $('#checkbox').prop('checked');
		var errCheckbox= false;
		if (Checkbox==false) {
			$('#check').html('This field is required.')
			$('#item2').css('background','red')
			
		}
		else{
			$('#check').html('')
			$('#item4').css('background','#2184be')
			errCheckbox= true;
		}
		if (errCheckbox==true) {
			return true;
		}
		else{
			return false;
		}
	}
	function checkTab2(){
		var firstname= $('#firstname').val();
		var lastname = $('#lastname').val();
		var email =$('#email').val();
		var age =$('#age').val();
		var errFirstName =false;
		var errLastName =false;
		var errEmail =false;
		var errAge =false;
		dem=0;
		if (firstname.trim()=='') {
			$('#checkFirstName').html('This field is required.')
			$('#firstname').css('background','#fbe3e4');
			$('#firstname').css('color','#8a609a'); 
			dem++;
		}
		else{
			$('#checkLastName').html('')
			$('#firstname').css('background','white');
			$('#firstname').css('color','black'); 
			errFirstName=true;
		}
		if (lastname.trim()=='') {
			$('#checkLastName').html('This field is required.')
			$('#lastname').css('background','#fbe3e4');
			$('#lastname').css('color','#8a609a'); 
			dem++;
		}
		else{
			$('#checkLastName').html('')
			$('#lastname').css('background','white');
			$('#lastname').css('color','black'); 
			errLastName=true;
		}
		if (email.trim()==''){
			$('#checkEmail').html('This field is required.');
			$('#email').css('background','#fbe3e4');
			$('#email').css('color','#8a609a'); 
			dem++;

		}
		else if (Mail(email)==false) {
			$('#checkEmail').html('Please enter a valid email address.');
			$('#email').css('background','#fbe3e4');
			$('#email').css('color','#8a609a'); 
			dem++;
		}
		else{
			$('#checkEmail').html('');
			$('#email').css('background','white');
			$('#email').css('color','black');
			errEmail=true

		}
		if (age.trim()=='') {
			$('#checkAge').html('This field is required.');
			$('#age').css('background','#fbe3e4');
			$('#age').css('color','#8a609a');
			dem++; 
		}
		else{
			$('#checkAge').html('');
			$('#age').css('background','white');
			$('#age').css('color','black');
			errAge=true;
		}
		if(dem>0){
			$('#item2').css('background','red')
		}
		else if (dem==0){
			$('#item2').css('background','#2184be')
		}
		if(errFirstName==true && errLastName==true && errEmail==true && errAge==true){
			return true;
		}
		else{
			return false;
		}

	}
	function NextTab(e){
		$('#tab'+e).hide(2000)
		$('#tab'+(e+1)).show(2000)
		index=e+1;
	}
	function PreviousTab(e){
		$('#tab'+e).hide(2000);
		$('#tab'+(e-1)).show(2000);
		index=e-1;
	}
	function NextItem(a){
		$('#item'+a).css('opacity','0.6');
		$('#item'+(a+1)).css('background','#2184be')
		$('#item'+(a+1)).css('opacity','1');
		eq=a+1;
	}
	function PrevItem(a){
		$('#item'+a).css('opacity','0.6');
		$('#item'+(a-1)).css('background','#2184be')
		$('#item'+(a-1)).css('opacity','1');
		eq=a-1;
	}
	function Mail(email){
		var filter = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!filter.test(email)) {
			return false;
		}else{
			return true;
		}}