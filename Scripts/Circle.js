

function drawCircle(context, color, row, column)
{
	var x = (column - 1) * bWidth + bWidth/2;
	var y = (row - 1) * bHeight + bHeight/2;
	var radius = (bHeight+bWidth)/5;
    context.save();
  	context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    //context.lineWidth = 2;
    //context.strokeStyle = '#003300';
    context.restore();
    //context.stroke();
}
