$('#en').click(function() { 
	$('#branches').load("template.html")
	branch = $('#branches')
	$('html,body').animate({
		scrollTop: branch.offset().top}, 1000)
	})