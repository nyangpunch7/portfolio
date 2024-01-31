$(function(){
	$('.portfolio .list > li').on('click',function(){
		var popCont = $(this).children('.popup').html();
		var wh = $(window).height();
		$('.popup-bg .popup-wrap').height(wh/1.1);
		$('.popup-bg .popup').html(popCont);
		$('.popup-bg .popup .top-area').append('<div class="cancel"> <span></span> <span></span> </div>');
		$('.popup-bg').stop().show();
		$('.popup-wrap').scrollTop(0);
	});
	$(document).on('click','.cancel',function(){
			$('.popup-bg').stop().hide();
	});
	$('.cancel, .popup-bg').on('click',function(e){
		if($('.popup-bg').has(e.target).length === 0){
			$('.popup-bg').stop().hide();
		}
	});
	$('.top').on('click',function(){
		$('html,body').stop().animate({scrollTop:0},400);
	});

});
