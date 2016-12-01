function testStrings(){
  var strings=require('./strings.js');
  console.log(strings.revers('asd'));
  console.log(strings.checkEndWith('asd','d'));
  console.log(strings.checkStartWith('asd','a'));
  console.log(strings.checkCamelCase('camelClass'));
  console.log(strings.checkPascalCase('pascal_case_to'));
}

function testArrays(){
  var arrays=require('./arrays.js');
  console.log(arrays.insertionSort([6,1,7,2,5,2]));
  console.log(arrays.quickSort([6,1,7,2,5,2]));
  console.log(arrays.mergeSort([6,1,7,2,5,2]));
  console.log(arrays.bubbleSort([6,1,7,2,5,2]));
  console.log(arrays.shellSort([6,1,7,2,5,2]));
  console.log(arrays.countSort([6,1,7,2,5,2],0,7));

  var min, max, avg;
  var matrix=[[2,3,4,5],
              [6,8,4,5,7,-1],
              [100,3,4,1]];
  min=arrays.minMatrix(matrix);
  max=arrays.maxMatrix(matrix);
  avg=arrays.avgMatrix(matrix);
  console.log(min);
  console.log(max);
  console.log(avg.toFixed(3));

  arrays.printTriangles();
  var arrObj=[{c:1, a:1, g:1}, {c:2, a:2, g:2, p:2}, {c:3, a:3}];
  console.log(arrays.sortObjects(arrObj));
}

function testStatements(){
  var statements=require('./statements.js');
  console.log(statements.stringToIntSum('123x1z13','a123'));
  console.log(statements.stringToObject(';key,value;key1,value;key3,value3;'));
}

testStrings();
testArrays();
testStatements();
