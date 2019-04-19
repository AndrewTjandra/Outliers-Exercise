/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/
//create function detectOutlierValue
//Go through array to cound the number of even and odd values
//check which number (even or odd) is equal to 1
//return the number

function detectOutlierValue(numbers){
  var numOfEven = 0;
  var numOfOdd = 0;
  var numberArray = numbers.split(' ');

  for(var i = 0; i < numberArray.length; i++){
    if(numberArray[i] % 2 === 0){
      numOfEven++;
    } else {
      numOfOdd++;
    }
  }

  if(numOfEven === 1){
    for(var i = 0; i < numberArray.length; i++){
      if(numberArray[i] % 2 === 0){
        return i + 1;
      }
    }
  } else {
    for(var i = 0; i < numberArray.length; i++){
      if(numberArray[i] % 2 !== 0){
        return i + 1;
      }
    }
  }
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed');
  } else {
    console.log('failed');
  }
}

function testEvenOutlier(){
  var actual = detectOutlierValue("11 109 19 18 3");
  var expected = 4;
  assertEqual(actual, expected, 'return index of even number');
}

function testOddOutlier(){
  var actual = detectOutlierValue("6 26 38 39 98 14");
  var expected = 4;
  assertEqual(actual, expected, 'return index of odd number');
}

testEvenOutlier();
testOddOutlier();
