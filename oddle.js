(function(){
  var results = sumOfFourVariables(4, 5, 6, 7);
  console.log(results);

})()

function sumOfTwoVariables(one, two){
  var total = one + two;
  return total;
}

function sumOfFourVariables(a, b, c, d) {
  var x = sumOfTwoVariables(a,b);
  var y = sumOfTwoVariables(c,d);
  var z = sumOfTwoVariables(x,y);
  return z;
}






















// (function() {
//   console.log('hi');
//
//   //var
//   //string
//   //int
//   window.sumOfTwoNumbers(1, 3);
//
//   //array
//
//   //loop
//
//
// })()
//
//
// function sumOfTwoNumbers(x, y) {
//   console.log(x + y);
// }
