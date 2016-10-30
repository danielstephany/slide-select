'use strict'

slideSelectSS();

function slideSelectSS(){
	var fadetime = 400;
	var slidetime = 400; 

	//sets opacity and display settings on slides.
	$('.slide-select-slides div').css({"opacity": "0", "display": "none"});
	$('.slide-select-slides .active').css({"opacity": "1", "display": "block"});

	//set on click for the selector and use its index to target a the slide width the same index.
	$('.slide-selector').on('click', function(){
		var $this = $(this);
		var i = $this.index();
		//check to see if this is the active slide toggle or if the slide is in the proccess of animating.
		if(!$this.hasClass('active') && !$this.hasClass('animating')){
			$this.siblings('.slide-selector').addClass('animating');
			var $slideSelectorSS = $this.parent('.slide-select-selectors').parent('.slide-select-ss');
			$this.siblings('.active').removeClass("active");
			$this.addClass('active');
			//fade slide to opacity 0 then slide up(closed).
			$slideSelectorSS.children('.slide-select-slides').children(".active").stop().animate({
			    opacity: 0
			  }, fadetime, function() {
			    $(this).slideUp(slidetime,function(){
							$(this).removeClass('active');
						});
			  });
			//set setTimeout for duration of the opacity animation time, animate slide to opacity 1 then slide down(open).	
			setTimeout(function(){
				$slideSelectorSS.children('.slide-select-slides').children("div").eq(i).stop().slideDown(slidetime, function(){
					$(this).animate({
						opacity: 1
					}, fadetime, function(){
						$(this).addClass('active');
						$this.siblings('.animating').removeClass('animating');
					})
				});
			}, fadetime);//end setTimeout			
		}//end if
	});//end onclick
}  

//added slider like functionality for mobile friendly usage