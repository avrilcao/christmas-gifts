
$(document).ready(function(){
// 1. assign music to every icon.-----done in html.
// 2. show all the icons instead of gifts.-------done in css.

// 3. mouseenter each cover:
// 		1) add hover effect
// 		2) play music
// 4. mouseleave each cover:
// 		1) remove hover effect
// 		2) stop music
	var audio = $('#song_a');
	$('#fur_santa').on('mouseenter', 'button', function(){
		audio.play();
	});
	$('#fur_santa').on('mouseleave', 'button', function(){
		audio.pause();
	});

});


	$('#buttons').on('click', function() {
// 	1) stop music
		audio.pause();
// 2) check if the songs src matches
// 2.1) if matches, both icons hide and show gifts
		if {

		}
// 2.2) if don't match, both icons remove clicked css effect
		else {

		}

	});