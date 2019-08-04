

function xo(str) {
   var hasilX=0;
   var iniO=0;
   for(var i=0;i<str.length;i++){
     if(str[i]==='X'){
       hasilX+=1
     }
     else if(str[i]==='o'){
       iniO+=1
     }
       if(hasilX===iniO){
     return true
   }
   else{
     return false
   }
   }
}

 // TEST CASES
 console.log(xo('xoxoxo')); // true
 console.log(xo('oxooxo')); // false
 console.log(xo('oxo')); // false
 console.log(xo('xxxooo')); // true
 console.log(xo('xoxooxxo')); // true