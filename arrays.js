(function(exports){
  /*
  insertionSort
  */
  exports.insertionSort=function(items){
    var len=items.length,value,i,j;
    for (i=0; i < len; i++) {
        value = items[i];
        for (j=i-1; j>-1, items[j]>value; j--){
            items[j+1]=items[j];
        }
        items[j+1]=value;
    }
    return items;
  }
  /*
  quickSort
  */
  function quickSort(items, left, right){
    var index;
    index=partition(items, left, right);
    if(left<index-1){
        quickSort(items, left, index-1);
    }
    if(index < right){
        quickSort(items, index, right);
    }
    return items;
  }
  function partition(items, left, right){
    var pivot=items[Math.floor((right+left)/2)], i=left, j=right;
    while(i<=j){
        while(items[i]<pivot){
            i++;
        }
        while(items[j]>pivot){
            j--;
        }
        if(i<=j){
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
  }
  function swap(items, firstIndex, secondIndex){
    var temp=items[firstIndex];
    items[firstIndex]=items[secondIndex];
    items[secondIndex]=temp;
  }
  exports.quickSort=function(items){
    return quickSort(items, 0, items.length-1)
  }

  /*
  mergeSort
  */
  exports.mergeSort=function mergeSort(items){
    if(items.length<2){
        return items;
    }
    var middle=Math.floor(items.length/2),
    left=items.slice(0, middle),
    right=items.slice(middle),
    params=merge(mergeSort(left),mergeSort(right));
    params.unshift(0, items.length);
    items.splice.apply(items, params);
    return items;
  }

  function merge(left, right){
    var result=[], ileft=0, iright=0;
    while(ileft<left.length && iright<right.length){
        if(left[ileft]<right[iright]){
            result.push(left[ileft++]);
        }else{
            result.push(right[iright++]);
        }
    }
    return result.concat(left.slice(ileft)).concat(right.slice(iright));
  }

  /*
  bubbleSort
  */
  exports.bubbleSort=function(items){
    var swapped;
    do {
        swapped=false;
        for(var i=0; i<items.length-1; i++) {
            if(items[i]>items[i+1]) {
                var temp=items[i];
                items[i]=items[i+1];
                items[i+1]=temp;
                swapped=true;
            }
        }
    }while(swapped);
    return items;
  }
  /*
  shellSort
  */
  exports.shellSort=function(items) {
    for (var h=items.length; h=parseInt(h/2);) {
      for (var i=h; i<items.length; i++) {
        var k=items[i];
        for (var j=i; j>=h && k<items[j-h]; j-= h)
          items[j]=items[j-h];
        items[j]=k;
      }
    }
    return items;
  }
  /*
  countSort
  */
  exports.countSort=function(items, min, max) {
    var i, z=0, count=[];

    for(i=min; i<= max; i++){
      count[i]=0;
    }
    for(i=0; i<items.length; i++){
      count[items[i]]++;
    }
    for (i=min; i<= max; i++){
      while ((count[i]--) > 0){
          items[z++]=i;
      }
    }
    return items;
  }
  /*
  Min Max Avg
  */
  exports.minMatrix=function(matrix){
    var min=matrix[0][0];
    for(var i=0; i<matrix.length; i++){
      for(var j=0; j<matrix[i].length; j++){
        if(matrix[i][j]<min){
          min=matrix[i][j];
        }
      }
    }
    return min;
  }
  exports.maxMatrix=function(matrix){
    var max=matrix[0][0];
    for(var i=0; i<matrix.length; i++){
      for(var j=0; j<matrix[i].length; j++){
        if(matrix[i][j]>max){
          max=matrix[i][j];
        }
      }
    }
    return max;
  }
  exports.avgMatrix=function(matrix){
    var size=0, sum=0;
    for(var i=0; i<matrix.length; i++){
      for(var j=0; j<matrix[i].length; j++){
        size+=matrix[i].length;
        sum+=matrix[i][j];
      }
    }
    return sum/size;
  }
  /*
  printTriangles
  */
  exports.printTriangles=function(){
    var size=5;
    /*
    triangle One
    */
    for(var i=1; i<size; i++){
      for(var j=0; j<i;j++){
        process.stdout.write('1');
      }
      for(var j=0; j<size-i;j++){
        process.stdout.write('0');
      }
      process.stdout.write('\n');
    }
    process.stdout.write('\n');

    /*
    triangle Two
    */
    for(var i=size; i>0; i--){
      for(var j=0; j<i;j++){
        process.stdout.write('1');
      }
      for(var j=0; j<size-i;j++){
        process.stdout.write('0');
      }
      process.stdout.write('\n');
    }
  }

  /*
  sortObjects
  */
  exports.sortObjects=function(items){
    for(var i=0;i<items.length;i++){
      calcProperties(items[i]);
    }
    items.sort((a,b)=>{return a.length-b.length});
    return items;
  }
  function calcProperties(obj){
    var count=0;
    for(var key in obj){
      count++;
    }
    obj.length=count;
  }

})(module.exports)
