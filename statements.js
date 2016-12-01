(function(exports){
  exports.stringToIntSum=function(str1, str2){
    return (getInt(str1)+getInt(str2));
  }
  function getInt(str){
    if(checkHex(str)){
      return parseInt(str.replace(/[^a-f0-9]/gim,''),16);
    }
    return parseInt(str.replace(/[^0-9]/gim,''),10);
  }
  /*
  if str hex number - true
  */
  function checkHex(str){
    return str.search(/[g-z]/)==-1;
  }

  exports.stringToObject=function(str){
    str=str.slice(1);
    str=str.slice(0,-1);
    var obj={}, tmp;
    var arr=str.split(';');
    for(var a in arr){
      tmp=arr[a].split(',');
      obj[tmp[0]]=tmp[1];
    }
    return obj;
  }

})(module.exports)
