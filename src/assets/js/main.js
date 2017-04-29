'use strict'

slideSelectSS();

function slideSelectSS(){
	var fadetime = 400; 

	//sets opacity and display settings on slides.
	$('.slide-select-slides div').css({"opacity": "0", "display": "none"});
	$('.slide-select-slides .active').css({"opacity": "1", "display": "block"});

	//set on click for the selector and use its index to target a the slide width the same index.
	$('.slide-selector').on('click', function(){
		var $this = $(this);
		var $slideSelectorSS = $this.parent('.slide-select-selectors').parent('.slide-select-ss');
		var $slideselectslides = $slideSelectorSS.children('.slide-select-slides');
		var i = $this.index();
		//check to see if this is the active slide toggle or if the slide is in the proccess of animating.
		if(!$this.hasClass('active') && !$this.hasClass('animating')){
			$this.siblings('.slide-selector').addClass('animating');
			$this.siblings('.active').removeClass("active");
			$this.addClass('active');
	
			//get the current hieght of slide-select-slides and set the height to the current height and overflow hidden
			var slideHeight = $slideselectslides.outerHeight(true);
			$slideselectslides.css({"height": slideHeight, "overflow": "hidden" });
				//fade out the current active div and set to display none
				$slideselectslides.children(".active").stop().animate({
			    opacity: 0
			  }, fadetime, function() {
			    $(this).css({"display": "none"}).removeClass('active');
			  });
			
			setTimeout(function(){
				//then display the new div but keep its opacity 0
				var $currentContent = $slideselectslides.children("div").eq(i);
				$currentContent.css({"display": "block"}).addClass('active');
				//then get the height of the new active div and animate slide-select-slides to the new height and remove overflow hidden
				var contentHeight = $currentContent.outerHeight(true);	
				$slideselectslides.stop().animate({
			    height: contentHeight
			  }, fadetime);
			  setTimeout(function(){
  				$currentContent.animate({
					opacity: 1 //finaly set the opacity of the active div to 1
				},fadetime, function() {
					$(this).addClass('active');
					$this.siblings('.animating').removeClass('animating');
				});
			  },fadetime);
			}, fadetime);
			$slideselectslides.css({"overflow": "visible" });		
		}//end if
	});//end onclick

	$(window).on('resize', function(){
		$('.slide-select-slides .active').each(function(i){
			var $this = $(this);
			var resetHeight = $this.outerHeight(true);
			$this.parent("div").css({"height": resetHeight});
		});
	});


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
			var $slideselectslides = $slideSelectorSS.children('.slide-select-slides');
			var $slideselectors = $slideSelectorSS.children('.slide-select-selectors');
			$slideselectors.children('.active').removeClass('active');
			$slideselectors.children('.slide-selector').eq(index).addClass('active');
			$this.addClass('active');
	
			var slideHeight = $slideselectslides.outerHeight(true);
			$slideselectslides.css({"height": slideHeight, "overflow": "hidden" });
				//fade out the current active div and set to display none
				$slideselectslides.children(".active").stop().animate({
			    opacity: 0
			  }, fadetime, function() {
			    $(this).css({"display": "none"}).removeClass('active');
			  });
			
			setTimeout(function(){
				//then display the new div but keep its opacity 0
				var $currentContent = $slideselectslides.children("div").eq(index);
				$currentContent.css({"display": "block"}).addClass('active');
				//then get the height of the new active div and animate slide-select-slides to the new height and remove overflow hidden
				var contentHeight = $currentContent.outerHeight(true);	
				$slideselectslides.stop().animate({
			    height: contentHeight
			  }, fadetime);
			  setTimeout(function(){
  				$currentContent.animate({
					opacity: 1 //finaly set the opacity of the active div to 1
				},fadetime, function() {
					$(this).addClass('active');
					$this.siblings('.animating').removeClass('animating');
				});
			  },fadetime);
			}, fadetime);
			$slideselectslides.css({"overflow": "visible" });
		}
	}
}  









