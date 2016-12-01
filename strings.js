(function(exports){
  function revers(str){
    return str.split("").reverse().join("");
  }

  function checkEndWith(str1, str2){
    if(str1.substring(str2.length+1)==str2){
      return true;
    }else{
      return false;
    }
  }

  function checkStartWith(str1, str2){
    if(str1.substring(0,str2.length)==str2){
      return true;
    }else{
      return false;
    }
  }

  function checkCamelCase(str){
    return (str!=str.toUpperCase() && str!=str.toLowerCase())
  }

  function checkPascalCase(str){
    return str.search('_')!=-1;
  }
  exports.revers=revers;
  exports.checkEndWith=checkEndWith;
  exports.checkStartWith=checkStartWith;
  exports.checkCamelCase=checkCamelCase;
  exports.checkPascalCase=checkPascalCase;
})(module.exports);
