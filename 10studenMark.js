var avg =0;
var myObj =
[{'Student Name':'David', 'mark': 80, 'Grade': 'notgiven'},
{'Student Name':'Vinod', 'mark': 77,'Grade': 'notgiven'},
{'Student Name':'Divya', 'mark': 88,'Grade': 'notgiven'},
{'Student Name':'Ishitha', 'mark': 95,'Grade': 'notgiven'},
{'Student Name':'Thomas', 'mark': 68,'Grade': 'notgiven'}];
var result = myObj.map(myObj => myObj.mark);
for(i=0;i<result.length;i++){
	avg = avg+ result[i];
	markAvg = avg/result.length;
}
for(var i in myObj){
	if(myObj[i].mark <100)
		myObj[i].Grade = 'A';
	if(myObj[i].mark <90)
		myObj[i].Grade = 'B';
	if(myObj[i].mark <80)
		myObj[i].Grade = 'C';
	if(myObj[i].mark <70)
		myObj[i].Grade = 'D';
	if(myObj[i].mark <60)
		myObj[i].Grade = 'F';
}
console.log(markAvg);
console.log(myObj);
