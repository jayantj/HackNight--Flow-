function checkComplete(level, paths)
{
	var complete = true, count = 0;

	for(path in paths)
	{
		count++;
		console.log(paths);

		if(!paths[path].checkComplete())
		{
			complete = false;
			console.log(path);
		}
	
	}

	for(var i = 1; i <= 6; i++)
		for (var j = 1; j <= 6; j++) 
			if(!level[i][j].type)
				complete = false;
	
	return (complete && count == 6);
}