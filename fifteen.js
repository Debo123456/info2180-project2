// JavaScript Document

$(document).ready(function(e) {
    var $puzzleArea = $("#puzzlearea");
	
	//Add puzzlepiece class to tiles
	$puzzleArea.children().addClass("puzzlepiece");
	
	var $pieces = $("#puzzlearea > div");
	
	//Keep track of the position of the empty space
	var empty_pos = ["300px", "300px"];
	var count = 0;
	
	//Loop for positioning tiles and background image
	for(var i = 0; i<$pieces.length; i++)
	{
		if(count > 3)
		{
			count = 0;
		}
		if(i>11)
		{
			$pieces[i].style.top = (300) + 'px';
			$pieces[i].style.left = (count * 100) + 'px';
			$pieces[i].style.backgroundPosition = '-' + count * 100 + 'px 200px';
		}
		else if(i > 7)
		{
			$pieces[i].style.top = (200) + 'px';
			$pieces[i].style.left = (count * 100) + 'px';
			$pieces[i].style.backgroundPosition = '-' + count * 100 + 'px 300px';
		}
		else if(i > 3)
		{
			$pieces[i].style.top = (100) + 'px';
			$pieces[i].style.left = (count * 100) + 'px';
			$pieces[i].style.backgroundPosition = '-' + count * 100 + 'px 400px';
		}
		else
		{
			$pieces[i].style.left = (count * 100) + 'px';
			$pieces[i].style.backgroundPosition = '-' + count * 100 + 'px 500px';
		}
		
		count++;
	}
	
	//click event for tiles to move to empty position
	$pieces.on("click", function(){
		var new_top = empty_pos[0];
		var new_left = empty_pos[1];
		empty_pos = [this.style.top, this.style.left];
		this.style.top = new_top;
		this.style.left = new_left;
		});
});