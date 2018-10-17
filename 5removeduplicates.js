var num = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(num);
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  console.log(result);
