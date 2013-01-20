//grid width and height
var gWidth = 600;
var gHeight = 600;
var bHeight = 100;
var bWidth = 100;
//padding around grid
var p = 0;
//size of canvas
var cWidth = gWidth + (p*2);
var cHeight = gHeight + (p*2);

function drawBoard(context){
    context.save();
    for (var x = 0; x <= gWidth; x += bWidth) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, gHeight + p);
    }


    for (var x = 0; x <= gHeight; x += bHeight) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(gWidth + p, 0.5 + x + p);
    }

    context.strokeStyle = "white";
    context.stroke();
    context.restore();
}
