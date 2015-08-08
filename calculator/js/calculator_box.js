$(document).ready(function(){
	var total = 0;

	//Do this for a10, a20, a30, n10, n20, n30
	$("#a10").click(function(){
		var result = total += 10;
		$("#out").html(result);

	});

	$("#a20").click(function(){
		var result = total += 20;
		$("#out").html(result);

	});

	$("#a30").click(function(){
		var result = total += 30;
		$("#out").html(result);

	});

	$("#n10").click(function(){
		var result = total -= 10;
		$("#out").html(result);

	});	
	
	$("#n20").click(function(){
		var result = total -= 20;
		$("#out").html(result);

	});

	$("#n30").click(function(){
		var result = total -= 30;
		$("#out").html(result);
	});
		//add 10 to the total

		//update $("#out") with the new total using the .html() function

	$("#red").click(function(){
		$("#out").css("background-color", "red");
	});

	$("#blue").click(function(){
		$("#out").css("background-color", "blue");
	});


	$("#out").click(function(){
		$(this).css("background-color", "white");
		$(this).html(total);

	});

	


	//Do this for red, out, blue
	//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with the .css("background-color", "whatever color") function

	});
