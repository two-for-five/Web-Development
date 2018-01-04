var rect = require('./rectangle');

function solveRect(l,b){
	console.log("l is " + "and b is " + b);
	rect(l,b,(err, rectangle) =>{
		if (err){
			console.log("error", err.message);
		}
		else{
			console.log("the area is: " + rectangle.area());
		}
	})
}

solveRect(10,20);
solveRect(-1,20);