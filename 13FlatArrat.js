var myObj = [5, [22], [[14]], [[4]],[5,6]]
for(i=0;i<myObj.length;i++){
	if(Array.isArray(myObj[i]))
		myObj[i] = myObj[i].flat();
}
console.log(myObj.flat());