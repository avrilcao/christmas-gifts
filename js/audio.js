// In JS:

var audioContainer = '#audioContainer';
var audio = '.playlist';
var first = -1;
var pair = false;

var playlist = [
	'a_Happy_Christmas',
	'b_Frosty_the_Snowman',
	'c_Santa_Baby',
	'd_All_I_Want_for_Christmas_Is_You',
	'e_Rockin_Around_the_Christmas_Tree',
	'f_The_Red_Nosed_Reindeer',
	'g_Santa_Claus_Is_Coming_to_Town'
]

function makeAudio(src){
	var source = '<audio class="playlist">';
	    // source +=  '<source id="audio_player_ogv" src="' + src + '.ogv"  type="audio/ogg" />';
	    source +=  '<source id="audio_player_mp3" src="' + src + '" type="audio/mpeg" >';
	    source +=  '</audio>';
    $(audioContainer).html(source);
    var aud = $(audio).get(0);
    aud.play()
}

function destroyAudio(){
	$(audio).get(0).pause()
	$(audio).remove();
}

$('#buttons')
	.on('mouseenter', 'a', function(){
		var songTitle = playlist[parseInt($(this).attr('data-song'))];
		var src = './media/' + songTitle + '.mp3';
		// $("audio.playlist > source").attr('src', src);
		// var aud = $('audio.playlist').get(0);
  //   	aud.play();
  		console.log(src)
	    makeAudio(src)
	})

$('#buttons').on('mouseleave', 'a', destroyAudio)

$('#buttons').on('click', 'a', function() {
	if (pair){
		var second = parseInt($(this).attr('data-song'));
		if (first == second){
			console.log('Paired!')
			// revealGifts();
		} else {
			console.log('Failed!')
			first = -1;
		}
		pair = !pair;
	} else {
		console.log('First Selected!')
		first = parseInt($(this).attr('data-song'));
		pair = !pair;
	}
	

})
