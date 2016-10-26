// JavaScript Document

$(document).ready(function(e) {
    var $puzzleArea = $("#puzzlearea");
	
	//Add puzzlepiece class to tiles
	$puzzleArea.children().addClass("puzzlepiece");
	
	var $pieces = $("#puzzlearea > div");
	
	//Keep track of the position of the empty space
	var empty_pos = ["297px", "300px"];
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
			$pieces[i].style.top = (297) + 'px';
			$pieces[i].style.left = (count * 100) + 'px';
			$pieces[i].style.backgroundPosition = '-' + count * 100 + 'px 200px';
		}
		else if(i > 7)
		{
			$pieces[i].style.top = (198) + 'px';
			$pieces[i].style.left = (count * 100) + 'px';
			$pieces[i].style.backgroundPosition = '-' + count * 100 + 'px 300px';
		}
		else if(i > 3)
		{
			$pieces[i].style.top = (99) + 'px';
			$pieces[i].style.left = (count * 100) + 'px';
			$pieces[i].style.backgroundPosition = '-' + count * 100 + 'px 400px';
		}
		else
		{
			$pieces[i].style.top = '0px';
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
		
	//Test if tile can move
	function canMove(){
		if(this.style.top == (parseInt(empty_pos[0].slice(0, (this.style.top.length - 2)))) - 99 || this.style.top == (parseInt(empty_pos[0].slice(0, (this.style.top.length - 2)))) + 99)
		{
			if(this.style.left == (parseInt(empty_pos[1].slice(0, (this.style.top.length - 2)))) - 100 || this.style.left == (parseInt(empty_pos[1].slice(0, (this.style.top.length - 2)))) + 100)
			{
				return true;	
			}	
		}
	}
		
	//Red background on hover	
	$pieces.hover(function(e) 
	{
		if(this.style.top == empty_pos[0] ||  this.style.left == empty_pos[1])
		
		{
			var x = parseInt(empty_pos[0].slice(0, (empty_pos[0].length -2)));
			var y = parseInt(empty_pos[1].slice(0, (empty_pos[1].length -2)));
			
			if( (x +99) + "px" == this.style.top || (x - 99) + "px" == this.style.top)
			{
				$(this).css("border-color", "#F00");
			}
			
			if( (y +100) + "px" == this.style.left || (y - 100) + "px" == this.style.left)
			{
				$(this).css("border-color", "#F00");
			}
			
		}
    }, function()
	{
		$(this).css("border-color", "#000");
	});
		
	
});