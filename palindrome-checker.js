function palindrome(str) {
  str = str.replace(/[^a-zA-Z\d\s]/g, "");
  let newStr = str.replace(/[^a-zA-Z\d\s]/g, "").split('').reverse().join('');

  str = str.replace(/\s+/g, '').toLowerCase();
  newStr = newStr.replace(/\s+/g, '').toLowerCase();

  console.log(str)
  console.log(newStr);
  return str === newStr;
}



palindrome("0_0 (: /-\ :) 0-0");


