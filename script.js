// creating a function called myReplace
function myReplace(num) {
	var myArray = [];
	for(var i = 1; i <= num; i++){
		if(i % 2 == 0 && i % 3 == 0 && i % 5 == 0){
		myArray.push("yu-gi-oh");
		} else if(i % 2 == 0 && i % 3 == 0){
		myArray.push("yu-gi");
		} else if(i % 2 == 0 && i % 5 == 0){
		myArray.push("yu-oh");
		} else if(i % 3 == 0 && i % 5 == 0){
		myArray.push("gi-oh");
		} else if(i % 2 == 0){
		myArray.push("yu");
		} else if(i % 3 == 0){
		myArray.push("gi");
		} else if(i % 5 == 0){
		myArray.push("oh");
		} else{
		myArray.push(i);
		}
	}
	console.log(myArray);
	return myArray;
}

// calling the function myReplace and passing the number 100 as an argument
myReplace(100);

// calling the function myReplace and passing a random number as an argument
myReplace(70);