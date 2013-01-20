function Path(begin, end, color)
{
	this.begin = begin;
	this.end = end;
	this.path = new Array(this.begin);
	this.color = color;
	this.complete = false;

	this.checkComplete = function()
	{
		return (this.path[this.path.length-1].row == this.end.row && this.path[this.path.length-1].column == this.end.column);
	};

	this.breakPath = function(context, tile, brokenPath)
	{
		var i =0;
		var color = this.color;
		//this.path.pop();
		//console.log(this.path.length);
		//console.log(tile.row + "," + tile.column);
					//console.log(brokenPath.end);
		while((tile.row != this.path[this.path.length-1].row || tile.column != this.path[this.path.length-1].column))
		{
			//console.log(this.path.length);
			//console.log(this.path.length);
			//console.log(this.path[this.path.length-1].row +"," + this.path[this.path.length-1].column);
			context.fillStyle = "black";
			console.log("erasing" + this.path[this.path.length-1].row + "," +this.path[this.path.length-1].column + "inloop");

			context.fillRect((this.path[this.path.length-1].column-1) * bWidth + 1, (this.path[this.path.length-1].row-1) * bHeight + 1, bWidth - 1, bHeight - 1);
			if(level[this.path[this.path.length-1].row][this.path[this.path.length-1].column].type =="path")
			{
				level[this.path[this.path.length-1].row][this.path[this.path.length-1].column].type = 0;
				level[this.path[this.path.length-1].row][this.path[this.path.length-1].column].color = 0;
			}
			//console.log(level);
			this.path.pop();

		}
		context.fillStyle = "black";
		console.log("erasing" + this.path[this.path.length-1].row + "," +this.path[this.path.length-1].column);
		context.fillRect((this.path[this.path.length-1].column-1) * bWidth + 1, (this.path[this.path.length-1].row-1) * bHeight + 1, bWidth - 1, bHeight - 1);

		level[this.path[this.path.length-1].row][this.path[this.path.length-1].column].type = 0;
		level[this.path[this.path.length-1].row][this.path[this.path.length-1].column].color = 0;
		this.path.pop();

		if(level[this.path[this.path.length-1].row][this.path[this.path.length-1].column].type != "node")
			level[this.path[this.path.length-1].row][this.path[this.path.length-1].column].type = "broken";
		else
			level[this.path[this.path.length-1].row][this.path[this.path.length-1].column].type = "broken node";

		console.log(level);
					drawCircle(context, this.color, this.end.row, this.end.column);

		this.color = color;
		drawBoard(context);
		this.complete = false;

		console.log(this.path.length);
	};

	this.drawPath = function(context, currTile, breakPath)
	{
		if(!breakPath)
			this.path.push(currTile);

		var lastTile = this.path[this.path.length-2];
		//console.log(this.path);
		var x;// = (lastTile.column-1) * bWidth + bWidth/2 - bWidth/8;
		var y;// = (lastTile.row -1) * bHeight + bHeight/2;
		var width, height;
		//console.log(lastTile);
		//console.log(currTile);
		if(lastTile.row == currTile.row)
		{
			x = (lastTile.column-1) * bWidth + bWidth/2;
			y = (lastTile.row -1) * bHeight + bHeight/2 - bHeight/8;
			width = (currTile.column - lastTile.column) * 9/8 * bWidth;
			height =  bHeight/4; 
		}

		else
		{
			x = (lastTile.column-1) * bWidth + bWidth/2 - bWidth/8;
			y = (lastTile.row -1) * bHeight + bHeight/2;
			width = bWidth/4;
			height =  (currTile.row - lastTile.row) * bHeight * 9/8;
		}
		console.log("drawing" + currTile.row +"," + currTile.column);

		context.fillStyle = this.color;
		context.fillRect(x, y, width, height);

		this.complete = this.checkComplete();
	};
}