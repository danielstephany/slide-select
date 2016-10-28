'use strict'

slideSelectSS();

function slideSelectSS(){
	var $slideSelector = $('.slide-selector');

	$slideSelector.on('click', function(){
		var $this = $(this);
		if(!$this.hasClass('active')){
			$this.siblings('.active').removeClass("active");
			$this.addClass('active');
			var $slideSelectorSS = $this.parent('.slide-select-selectors').parent('.slide-select-ss');
			$slideSelectorSS.children('.slide-select-slides').children(".active").slideToggle(500,function(){
				$(this).removeClass('active');
			});
			var i = $(this).index();	
			$slideSelectorSS.children('.slide-select-slides').children("div").eq(i).slideToggle(500, function(){
				$(this).addClass('active');
			});
		}
		
	});
}  