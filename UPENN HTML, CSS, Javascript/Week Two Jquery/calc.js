/*
 * Implement all your JavaScript in this file!
 */
window.onload = function(){
	var num = [];
 	var display = document.getElementById('display');
 	var clear = document.getElementById('clearButton');
 	var operation = false;
 	
 	document.getElementById('button1').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button2').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button3').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button4').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button5').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button6').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button7').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button8').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button9').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});
 	document.getElementById('button0').addEventListener('click', function(e){
 		if (operation == false){
 			display.value += e.target.innerHTML;
 		}
 		num.push(e.target.innerHTML);
 	});


 	document.getElementById('addButton').addEventListener('click', function(e){
 		if (operation == true){
 			try{
	 			num = eval(num.join(""))
	  			display.value = num;
	 			num = [num]
 			}catch(e){
 				var i = 0;
 				while (i < num.length){
 					if(num[i] === '+' || num[i] === '-' || num[i] === '*' || num[i] === '/'){
 						delete num[i];
 					}
 					else{
 						i++;
 					}
 				}
 			}
 		}
 		num.push(e.target.innerHTML);
 		operation = true;
 	});
 	document.getElementById('subtractButton').addEventListener('click', function(e){
 		if (operation == true){
 			try{
	 			num = eval(num.join(""))
	  			display.value  = num;
	 			num = [num]
 			}catch(e){
 				var i = 0;
 				while (i < num.length){
 					if(num[i] === '+' || num[i] === '-' || num[i] === '*' || num[i] === '/'){
 						delete num[i];
 					}
 					else{
 						i++;
 					}
 				}
 			}
 		}
 		num.push(e.target.innerHTML);
 		operation = true;
 	});
 	document.getElementById('multiplyButton').addEventListener('click', function(e){
 		if (operation == true){
 			try{
	 			num = eval(num.join(""))
	  			display.value  = num;
	 			num = [num]
 			}catch(e){
 				var i = 0;
 				while (i < num.length){
 					if(num[i] === '+' || num[i] === '-' || num[i] === '*' || num[i] === '/'){
 						delete num[i];
 					}
 					else{
 						i++;
 					}
 				}
 			}
 		}
 		num.push(e.target.innerHTML);
 		operation = true;
 	});
 	document.getElementById('divideButton').addEventListener('click', function(e){
 		if (operation == true){
 			try{
	 			num = eval(num.join(""))
	  			display.value  = num;
	 			num = [num]
 			}catch(e){
 				var i = 0;
 				while (i < num.length){
 					if(num[i] === '+' || num[i] === '-' || num[i] === '*' || num[i] === '/'){
 						delete num[i];
 					}
 					else{
 						i++;
 					}
 				}
 			}
 		}
 		num.push('/');
 		operation = true;
 	});
 	document.getElementById('equalsButton').addEventListener('click', function(e){
 		try{
 			num = eval(num.join(""))
  			display.value  = num;
 			num = [num]
 			operation = false
 		}catch(e){}
 	});

 	clear.addEventListener('click', function(){
 		display.value = '';
 		num = [];
 		operation = false;
 	})
}
 