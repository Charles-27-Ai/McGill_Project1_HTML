$(document).ready(function() {
	$("h3").mouseover(function() {
		/* Act on the event */
		$(this).css("font-size","1.5em");
	});
	$("h3").mouseout(function() {
		$(this).css("font-size","2.5em");
	});
});