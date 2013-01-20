function drawLevel(context)
{
	//console.log(level);
	for(var i = 1; i <= 6; i++)
		for(var j = 1; j <= 6; j++)
			if(level[i][j].type == "node")
				drawCircle(context, level[i][j].color, i, j);
}