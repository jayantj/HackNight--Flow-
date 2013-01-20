function drawPath(context, lastTile, currTile, color)
{
	var x;// = (lastTile.column-1) * bWidth + bWidth/2 - bWidth/8;
	var y;// = (lastTile.row -1) * bHeight + bHeight/2;
	var width, height;

	if(lastTile.row == currTile.row)
	{
		x = (lastTile.column-1) * bWidth + bWidth/2;
		y = (lastTile.row -1) * bHeight + bHeight/2 - bHeight/8;
		width = (currTile.column - lastTile.column) * 9/8 * bWidth;
		height = bHeight/4; 
	}

	else
	{
		x = (lastTile.column-1) * bWidth + bWidth/2 - bWidth/8;
		y = (lastTile.row -1) * bHeight + bHeight/2;
		width = bWidth/4;
		height = (currTile.row - lastTile.row) * bHeight * 9/8;
	}

	context.fillStyle = color;
	context.fillRect(x, y, width, height);

}