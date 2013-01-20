function findTarget(tile)
{
	for(var i = 1; i <= 6; i++)
		for(var j = 1; j <= 6; j++)
		{
			if(level[i][j].color == level[tile.row][tile.column].color && (i != tile.row || j != tile.column))
				return {row:i, column: j};
		}
}