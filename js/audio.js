$(document).ready(function(){
	$('.gifts li').hide();
	// $('li[data-gift="0"]').show();
	// $('.gifts').show();
//var audioContainer = '#audioContainer';
var audio = '.playlist';
var first = -1;
var pair = false;

var playlist = [
	'a_Happy_Christmas.mp3',
	'b_Frosty_the_Snowman.mp3',
	'c_Santa_Baby.mp3',
	'd_All_I_Want_for_Christmas_Is_You.mp3',
	'e_Rockin_Around_the_Christmas_Tree.mp3',
	'f_The_Red_Nosed_Reindeer.mp3',
	'g_Santa_Claus_Is_Coming_to_Town.mp3'
]

function makeAudio(src){
	var source = '<audio class="playlist">' + '<source id="audio_player_mp3" src="' + src + '" type="audio/mpeg" >' + '</audio>';
	    // source +=  '<source id="audio_player_ogv" src="' + src + '.ogv"  type="audio/ogg" />';
	    //source +=  '<source id="audio_player_mp3" src="' + src + '" type="audio/mpeg" >';
	    //source +=  '</audio>';
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
		var src = './media/' + songTitle;
		// $("audio.playlist > source").attr('src', src);
		// var aud = $('audio.playlist').get(0);
  //   	aud.play();
  		console.log(src)
	    makeAudio(src)
	})

$('#buttons').on('mouseleave', 'a', destroyAudio)

$('#buttons').on('click', 'a', function() {
	var $this = $(this);
	$(this).toggleClass('selected');

	if (pair){
		var second = parseInt($(this).attr('data-song'));
		if (first == second){
			console.log('Paired!')
			// revealGifts();
			$('a.selected').fadeOut(600);
			var dataGift = parseInt($(this).attr('data-song'));
			console.log(dataGift);
			console.log($('li[data-gift="' + dataGift + '"]'))
			$('li[data-gift="' + dataGift + '"]').slideDown(600);
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

})
