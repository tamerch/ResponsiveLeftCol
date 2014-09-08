//global variables
 
$(document).ready(function(){
	var leftCol = $('#left_column');
	var page = $('div#page');
	
	// return if no left_column
	if ($('#left_column').length == 0) return false;
	
	// reorganise DOM
	leftCol.appendTo('body');
	page.appendTo('body');
	
	// Add Menu and Menu Ico
	$(leftCol.children()[0]).before('<div>Bonjour Menu</div>');
	$('.header-container').append('<a class="responsive-menu-ico" rel="nofollow" title></a>');
	
	// Modify
	$('.responsive-menu-ico').css('top',$('.nav').offset().top + $('.responsive-menu-ico').height() + 1);

	// Clic Event
	$('a.responsive-menu-ico').click(function() {
		if (page.css('transform')!="matrix(1, 0, 0, 1, 0, 0)") 
		{
			page.css('transform','translate(0%, 0)','position','initial');
			page.css('position','initial');
		} else {
			page.css('transform','translate(80%, 0)');
			page.css('position','fixed');
		}
	});
							
});