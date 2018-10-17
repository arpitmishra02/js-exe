var numberArray = [1,5,8,23,6];
var largest = numberArray[0];
for(i=1;i<numberArray.length;i++){
	if(numberArray[i]>largest)
		largest = numberArray[i];
}
console.log(largest);