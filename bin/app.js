$('textarea').height(Math.floor($(window).height() / 2) - 15)
$('.input').on('keyup', function(){
	
	input = $('.input').val()
	output = $('.output')

	ubah = function(awal, akhir){
		input = input.replace(new RegExp(awal, 'g'), akhir)
	}

	karakter_awal = ['#1A', '#2A', '#4A', '#5A', '#6A', '#1B', '#5a', '#6a', '1A', '2A', '3A', '4A', '5A', '6A', '7A', '1B', '5a', '6a', '7a', '#1', '#2', '#4', '#5', '#6', '1', '2', '3', '4', '5', '6', '7']

	karakter_akhir = ['l', '\'', 'e', 't', 'u', 'p', 'x', 'v', 'k', ';', 'q', 'w', 'r', 'y', 'i', 'o', 'z', 'c', 'b', 'm', '.', 's', 'f', 'h', 'n', ',', '/', 'a', 'd', 'g', 'j']

	for (n in karakter_awal){
		ubah(karakter_awal[n], karakter_akhir[n])
	}

	output.val(input)
})