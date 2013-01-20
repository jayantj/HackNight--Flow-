function getClickedTile(pageX, pageY)
{
	var column = Math.floor(pageX/bWidth);
	var row = Math.floor(pageY/bHeight);

	return {row: row+1, column: column+1};

}