// JavaScript Document

$(document).ready(function(e) {
    var $puzzleArea = $("#puzzlearea");
	
	//Add puzzlepiece class to tiles
	$puzzleArea.children().addClass("puzzlepiece");
	
	var $pieces = $("#puzzlearea > div");
	
	//Keep track of the position of the empty space
	var empty_pos = ["297px", "300px"];
	var count = 0;
	
	$pieces.on("click", function(){
		$(this).fadeOut(function(){
			moveTile(this);
		});
		$(this).fadeIn();
	});
	
	$("#shufflebutton").on("click", function(){
		shuffle(1500);
		
	});
	
	
	$pieces.hover(function(e) 
	{
		if(isMoveable(this))
		{
			$(this).addClass("movablepiece");
			$(this).css("border-color", "#F00");
		}
    }, function()
	{
		$(this).removeClass("movablepiece");
		$(this).css("border-color", "#000");
	});
	
	
	
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
	function moveTile(tile){
				var new_top = empty_pos[0];
				var new_left = empty_pos[1];
				empty_pos = [tile.style.top, tile.style.left];
				tile.style.top = new_top;
				tile.style.left = new_left;
	}
	
	
		
	
		
		function isMoveable(tile){
		if(tile.style.top == empty_pos[0] ||  tile.style.left == empty_pos[1])
		
		{
			var x = parseInt(empty_pos[0].slice(0, (empty_pos[0].length -2)));
			var y = parseInt(empty_pos[1].slice(0, (empty_pos[1].length -2)));
			
			if( (x +99) + "px" == tile.style.top || (x - 99) + "px" == tile.style.top)
			{
				return true;
			}
			
			if( (y +100) + "px" == tile.style.left || (y - 100) + "px" == tile.style.left)
			{
				return true;
			}
			
		}
	}
		
		function shuffle(num)
	{
		var empty_pos = ["297px", "300px"];
	var count = 0;
	
		var moveables = new Array();
		for(var i = 0; i<num; i++)
		{
			var count = 0;
			for(var x = 0; x<$pieces.length; x++)
			{
				if(isMoveable($pieces[x]))
				{
					moveables[count] = $pieces[x];
					count++;
				}
			}
			
			var new_top = empty_pos[0];
			var new_left = empty_pos[1];
			var rand = Math.floor(Math.random() * moveables.length);
			moveTile(moveables[rand]);
		}
	}
	
	
	
	
});