 var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var month = today.getMonth();
  var date = today.getDate();
  var year = today.getFullYear();
console.log("Current Date : "+month + " / " + date + " / " + year);
