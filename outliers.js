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
