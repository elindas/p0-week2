

function konversiMenit(menit) {
   var hasil= Math.floor(menit/60);
   var sisa= menit %60;
   if(sisa<10){
     return hasil+':0'+sisa
   }
   else{
     return hasil+':'+sisa
   }
 }

 // TEST CASES
 console.log(konversiMenit(63)); // 1:03
 console.log(konversiMenit(124)); // 2:04
 console.log(konversiMenit(53)); // 0:53
 console.log(konversiMenit(88)); // 1:28
 console.log(konversiMenit(120)); // 2:00
