var div = document.body.querySelector(".div");

var ball = document.body.querySelector(".ball");

var toppos = 200;
var leftpos = 450;
var yuxari = 1;
var sol = 1;

div.onclick = function(){

	 setInterval(Move, 3);

	console.log("salam")

};

function Move()
{
	if (toppos==360)
	{
		yuxari = yuxari*-1;
	}
	if (toppos==0)
	{
		yuxari = yuxari*-1;
	}
	if (leftpos==0)
	{
		sol = sol*-1;
	}
	if (leftpos==960)
	{
		sol = sol*-1;
	}

	console.log(yuxari,sol)

		ball.style.top = toppos + "px";
		ball.style.left = leftpos + "px";
		toppos= toppos + yuxari;
		leftpos= leftpos + sol;

}