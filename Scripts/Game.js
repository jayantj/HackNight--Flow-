var gWidth = 600;
var gHeight = 600;
var bHeight = 100;
var bWidth = 100;
//padding around grid
var p = 2;
//size of canvas
var cw = gWidth + (p*2) + 1;
var ch = gHeight + (p*2) + 1;

var game = {
	gWidth: 600,
	gHeight: 600,
	bHeight: 100,
	bWidth: 100,
	padding: 2,
	cHeight: this.gWidth + (this.padding*2) + 1,
	cWidth: this.gHeight + (this.padding*2) + 1
};
console.log(game.cHeight + game.cWidth);