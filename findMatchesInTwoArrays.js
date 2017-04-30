firstArray = ["1", "2", "3", "4", "5"];
secondArray = ["4", "8", "9", 10];

for each (var i = 0; i < secondArray.length; i++){
  if (firstArray[i] in secondArray) {
      console.log(i);
    }
  }
