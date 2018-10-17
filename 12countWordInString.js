function char_count(str, letter) 
{
 var Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      Count += 1;
      }
  }
  return Count;
}

console.log(char_count('gmail.com', 'm'));
