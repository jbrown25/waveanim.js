(function($){
	
	$.fn.waveanim = function(options){

		var settings = $.extend({
			//defaults
			waveOffset : 0.05,
			animation : "bounce"
		}, options);

		var childElements = this.children();

		//if selected element contains only text, animate the text.  Otherwise, animate children
		if(childElements.length === 0){ 
			var text = this.html();
			this.html("");

			for(var i = 0; i < text.length; i++){
	          this.append("<span style='animation-delay: " + (i * settings.waveOffset) +"s'>" + text.charAt(i) + "</span>");
	        }
		}else{
			for(var i = 0; i < childElements.length; i++){
				childElements.eq(i).wrap("<span style='animation-delay: " + (i * settings.waveOffset) + "s'></span>");
			}
		}

		//set hover listener
        this.hover(function(){
          $("span", this).addClass("animated " + settings.animation);
        }, function(){
          $("span", this).removeClass("animated " + settings.animation);
        });

        return this;
	}


})(jQuery);