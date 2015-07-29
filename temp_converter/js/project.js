$(function() {

	function convertC(){

	var f = $('.userTempF').val();

 	f = parseInt(f);

 	var c = (f-32) * 5/9; 

 	var result = Math.round(c*10)/10;

 	$('.cresult').html(result + "\xB0 C");


 }

 function convertF(){

 	var c = $('.userTempC').val();

 	c = parseInt(c);

 	var f = (c*9)/5 + 32;
 	
 	var result = Math.round(f*10)/10;

 	$(".fresult").html(result + "\xB0 F");

 }

 function clearField() {

 	var field = "";

 	$(".fresult").html(field);
 	$(".cresult").html(field);

 }


$('.converter').click(convertC);

$('.converter2').click(convertF);

$('.reset').click(clearField);


 



});


