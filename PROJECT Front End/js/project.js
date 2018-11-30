
index=1;
$(function(){
	// $('#loader').on('click',function(){
	// 	$(this).parent().css("cssText", "background: white !important;");
	// 	$('#loader').css('display','none');
	// 	$('#project').show(10);
	// })
	$('.number-run .h1-number .span-number').counterUp({
		delay: 10,time : 5000

	})
	var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });

	window.filterizr = f;
	$('.fltr-controls').on('click',function(){
		$('.fltr-controls').css({'background':'#DDDDDD','color':'black'});
		$(this).css({'background':'#ffc925','color':'White'})
	})
	$('#bt-WOSAU1').on('click',function(){
		$('.bt-WOSAU').children().css('color','#AAAAAA');
		$('.tab-WOSAU').hide(1000);
		$(this).children().css('color','#ffc925');
		$('#tab-WOSAU1').show(1000)
	}) 
	$('#bt-WOSAU2').on('click',function(){
		$('.bt-WOSAU').children().css('color','#AAAAAA');
		$('.tab-WOSAU').hide(1000);
		$(this).children().css('color','#ffc925');
		$('#tab-WOSAU2').show(1000)
	}) 
	$('#bt-WOSAU3').on('click',function(){
		$('.bt-WOSAU').children().css('color','#AAAAAA');
		$('.tab-WOSAU').hide(1000);
		$(this).children().css('color','#ffc925');
		$('#tab-WOSAU3').show(1000)
	})





	$('#bt-our-team1').on('click',function(){
		$('.bt-our-team').children().css('color','#AAAAAA');
		$('.tab-our-team').hide(1000);
		$(this).children().css('color','#ffc925');
		$('#tab-our-team1').show(1000)
	}) 
	$('#bt-our-team2').on('click',function(){
		$('.bt-our-team').children().css('color','#AAAAAA');
		$('.tab-our-team').hide(1000);
		$(this).children().css('color','#ffc925');
		$('#tab-our-team2').show(1000)
	}) 
	$('#bt-our-team3').on('click',function(){
		$('.bt-our-team').children().css('color','#AAAAAA');
		$('.tab-our-team').hide(1000);
		$(this).children().css('color','#ffc925');
		$('#tab-our-team3').show(1000)
	})

	     // $('.bt-WOSAU').on('click',function(){
	     // 	switch(index){
	     // 		case 1:
	     // 			$('.bt-WOSAU').children().css('color','#AAAAAA');
	     // 			$('.tab-WOSAU').css('display','none')
	     // 			dots(1);
	     // 			break;
	     // 		case 2:
	     // 			$('.bt-WOSAU').children().css('color','#AAAAAA');
	     // 			$('.tab-WOSAU').css('display','none')
	     // 			dots(2);
	     // 			break;
	     // 		case 3:
	     // 			$('.bt-WOSAU').children().css('color','#AAAAAA');
	     // 			$('.tab-WOSAU').css('display','none')
	     // 			dots(3);
	     // 			break;

	     // 	}
	     // })


	     $('.tab-george').on('click',function(){
					//hiện
					$('.content').hide(1000);
					$('.div .span2-active').css('display','none')
					$('.div .span').css('display','inline-block')
					if($(this).html()=='<i class="fas fa-plus"></i>'){
						$('.tab-george').html('<i class="fas fa-plus"></i>');
						$('.item-george').css('background','white')
						$('.tab-george').css('background','white')
						$('.item-george').css('color','black')
						$('.tab-george').css('color','black')
						$(this).next().children('.span').css('display','none')
						$(this).next().children('.span2-active').css('display','inline-block')
						$(this).parent().next().show(1000);
						$(this).parent().css('background','#ffc925')
						$(this).css('background','#ffc925')
						$(this).parent().css('color','white')
						$(this).css('color','white')
						$(this).html('<i class="fas fa-minus"></i>');
					}
					//ẩn
					else if($(this).html()=='<i class="fas fa-minus"></i>') {
						$(this).html('<i class="fas fa-plus"></i>');
						$(this).parent().next().hide(1000);
						$(this).next().children('.span').css('display','inline-block')
						$(this).parent().css('background','white')
						$(this).css('background','white')
						$(this).parent().css('color','black')
						$(this).css('color','black')
						$('.item-george').css('background','white')
						$(this).next().children('.span2-active').css('display','none')
						$('.tab-george').html('<i class="fas fa-plus"></i>');
					}
				})

	     $('.div').on('click',function(){
	     	$('.content').hide(1000);
	     	$('.div .span2-active').css('display','none')
	     	$('.div .span').css('display','inline-block')
	     	if ($(this).prev().html()==='<i class="fas fa-plus"></i>') {
	     		$('.tab-george').html('<i class="fas fa-plus"></i>');
	     		$('.item-george').css('background','white')
	     		$('.tab-george').css('background','white')
	     		$('.item-george').css('color','black')
	     		$('.tab-george').css('color','black')
	     		$(this).parent().css('color','white')
	     		$(this).prev().css('color','white')
	     		$(this).parent().css('background','#ffc925')
	     		$(this).prev().css('background','#ffc925')
	     		$('.tab-george').html('<i class="fas fa-plus"></i>');
	     		$(this).prev().html('<i class="fas fa-minus"></i>');
	     		$(this).parent().next().show(1000);
	     		$(this).children('.span').css('display','none')
	     		$(this).children('.span2-active').css('display','inline-block')
	     	}
	     	else{
	     		$(this).prev().html('<i class="fas fa-plus"></i>');
	     		$(this).parent().next().hide(1000);
	     		$(this).parent().css('color','black')
	     		$(this).prev().css('color','black')
	     		$(this).parent().css('background','white')
	     		$(this).prev().css('background','white')
	     		$(this).children('.span').css('display','inline-block')
	     		$(this).children('.span2-active').css('display','none')

	     	}
	     }) 

	     $('#button2').click(function(event) {event.preventDefault(); var n = $(document).height(); $('html, body').animate({ scrollTop: 750 }, 2000);
	 });
	     $('#send').on('click',function(){
	     	if (checkInput()==true) {
	     		$('#modal-body1').css('background','white');
	     		$('.modal-content').css('background','white');
	     		
	     		$('#modal-body1').css({'color':'blue','font-size':'20px'});
	     		$('#modal-body1').html('Congratulations! send a message successfully');
	     	}
	     	else{
	     		$('#modal-body1').css('background','#fbe3e4');
	     		$('.modal-content').css('background','#fbe3e4');
	     		$('#modal-body1').css({'color':'red','font-size':'20px'});
	     		$('#modal-body1').html('Please check the input data');
	     	}

	     })
	     $('#button-top').click(function(event) {event.preventDefault(); var n = $(document).height(); $('html, body').animate({ scrollTop: 0 }, 2000);
	 });
	     
	 })
	// function dots(e){
	// 	$('#bt-WOSAU'+e).children().css('color','#ffc925');
	// 	$('#tab-WOSAU'+e).css('display','block');
	// 	e=index;
	// }
	new WOW().init();
	function checkInput(){
		var name = $('#name').val();
		var email = $('#email').val();
		var city = $('#city').val();
		var subject =$('#subject').val();
		var messege =$('#messege').val();	
		var errName =false;
		var errEmail=false;
		var errSubject =false;
		var errCity=false;
		var errMessege =false;

		if(name.trim()==''){
			$('#checkName').html('This field is required.')
			$('#name').css('background','#fbe3e4');
			$('#name').css('color','#8a609a'); 
		}
		else if(name.length<8){
			$('#checkName').html('This requirement larger 8 character')
			$('#name').css('background','#fbe3e4');
			$('#name').css('color','#8a609a');
		}
		else{
			$('#checkName').html('')
			$('#name').css('background','#EEEEEE');
			$('#name').css('color','black');
			errName=true;
		}
		if (email.trim()==''){
			$('#checkEmail').html('This field is required.');
			$('#email').css('background','#fbe3e4');
			$('#email').css('color','#8a609a'); 


		}
		else if (Mail(email)==false) {
			$('#checkEmail').html('Please exactly email address.');
			$('#email').css('background','#fbe3e4');
			$('#email').css('color','#8a609a'); 

		}
		else{
			$('#checkEmail').html('');
			$('#email').css('background','#EEEEEE');
			$('#email').css('color','black');
			errEmail=true

		}
		if(city==='1'){
			$('#checkCity').html('This field is required.');
			$('#city').css('background','#fbe3e4');
			$('#city').css('color','#8a609a');
		}
		else if(city==='2'){
			$('#checkCity').html('');
			$('.university .university-city').css('display','none')
			$('#hanoi').css('display','inline-block')
			$('#city').css('background','white');
			$('#city').css('color','black');
			$('#checkCity').html('');
			errCity=true;

		}
		else if(city==='3'){
			$('#checkCity').html('');
			$('.university .university-city').css('display','none')
			$('#HCM').css('display','inline-block')
			$('#city').css('background','white');
			$('#city').css('color','black');
			$('#checkCity').html('');
			errCity=true;
			
		}
		else if(city==='4'){
			$('#checkCity').html('');
			$('.university .university-city').css('display','none')
			$('#da-nang').css('display','inline-block')
			$('#city').css('background','white');
			$('#city').css('color','black');
			$('#checkCity').html('');
			errCity=true;
			
		}
		else if(city==='5'){
			$('#checkCity').html('');
			$('.university .university-city').css('display','none')
			$('#thai-nguyen').css('display','inline-block')
			$('#city').css('background','white');
			$('#city').css('color','black');
			$('#checkCity').html('');
			errCity=true;
			
		}
		if(subject.trim()==''){
			$('#checkSubject').html('This field is required.')
			$('#subject').css('background','#fbe3e4');
			$('#subject').css('color','#8a609a'); 
		}
		else{
			$('#checkSubject').html('')
			$('#subject').css('background','#EEEEEE');
			$('#subject').css('color','black');
			errSubject=true;
		}
		if(messege.trim()==''){
			$('#checkMessege').html('This field is required.')
			$('#messege').css('background','#fbe3e4');
			$('#messege').css('color','#8a609a'); 
		}
		else if(messege.length<8){
			$('#checkMessege').html('This requirement larger 8 character')
			$('#messege').css('background','#fbe3e4');
			$('#messege').css('color','#8a609a'); 
		}
		else{
			$('#checkMessege').html('')
			$('#messege').css('background','#EEEEEE');
			$('#messege').css('color','black');
			errMessege =true;
		}
		if(errName==true && errEmail==true && errCity==true && errSubject==true && errMessege==true){
			return true;
		}
		else{
			return false;
		}


	 // $('.img-contruction').mouseover(function(){
	 // 	$(this).css('width','1000px')
	 // })
	 // $('.img-contruction').mouseout(function(){
	 // 	$(this).css('width','200px')
	 // })


	 // $(document).on('mouseover','.item-contruction',function(){
	 //        $(this).css('background-color', 'red');
	 //    });

	}





	function Mail(email){
		var filter = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!filter.test(email)) {
			return false;
		}else{
			return true;
		}}