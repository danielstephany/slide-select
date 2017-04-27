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
			/**
			 * animation sequence
			 * get the current hieght of slide-select-slides and set the height the current height and overflow hidden
			 * fade out the current active div and set to display none
			 * then display the new div but keep it opacity 0 
			 * then get the height of the new active div and animate slide-select-slides to the new height and remove overflow hidden
			 * finaly set the opacity of the active div to 1
			 */
			$slideSelectorSS.children('.slide-select-slides').children(".active").stop().animate({
			    opacity: 0
			  }, fadetime, function() {
			    $(this).slideUp(slidetime, function(){
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
					});
				});
			}, fadetime);//end setTimeout			
		}//end if
	});//end onclick


/* slide events **********************************************/

	$('.slide-select-slides').children("div").on('swiperight', function(){
		var $this = $(this);
		var i = $this.index() - 1;
		if (i === -1){
			i = $this.parent('.slide-select-slides').children('div').length - 1;
		}
		slideControl($this, i);
	});



	$('.slide-select-slides').children("div").on('swipeleft', function(){
		var $this = $(this);
		var i = $this.index() + 1;
		if (i === ($this.siblings('div').length + 1)){
			i = 0;
		}
		slideControl($this, i);
	});

	//slide animation function to be used in the slide events
	function slideControl($this, index){
		if($this.hasClass('active') && !$this.hasClass('animating')){
			$this.parent('.slide-select-slides').children('div').addClass('animating');
			var $slideSelectorSS = $this.parent('.slide-select-slides').parent('.slide-select-ss');
			$slideSelectorSS.children('.slide-select-selectors').children('.active').removeClass('active');
			$slideSelectorSS.children('.slide-select-selectors').children('.slide-selector').eq(index).addClass('active');
			$this.addClass('active');
			//fade slide to opacity 0 then slide up(closed).
			$this.stop().animate({
			    opacity: 0
			  }, fadetime, function() {
			    $(this).slideUp(slidetime, function(){
							$(this).removeClass('active');
						});
			  });
			//set setTimeout for duration of the opacity animation time, animate slide to opacity 1 then slide down(open).	
			setTimeout(function(){
				$this.parent('.slide-select-slides').children('div').eq(index).stop().slideDown(slidetime, function(){
					$(this).animate({
						opacity: 1
					}, fadetime, function(){
						$(this).addClass('active');
						$this.siblings('.animating').removeClass('animating');
						$this.removeClass("active");
					});
				});
			}, fadetime);//end setTimeout
		}
	}
}  









