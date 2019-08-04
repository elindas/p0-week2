// TUgas 1
console.log('LOOPING PERTAMA')
var hasil=1;
while(hasil<=20){
   console.log((hasil+=1) + " - I love coding");
   hasil++
}

console.log('LOOPING KEDUA')
 var hasil=21;
 while(hasil>1){
   console.log((hasil-=1) + " - I will become fullstack developer");
   hasil--
 }

// Tugas 2
console.log('LOOPING PERTAMA')
for(hasil=1; hasil<=20; hasil++) {
  console.log((hasil) + " - I love coding");
}

console.log('LOOPING KEDUA')
for(hasil=20; hasil>=1; hasil--) {
  console.log((hasil) + " - I will become fullstack developer");
}

//Tugas 3
// Genap Ganjil

for(i = 1; i <= 100; i++){
  if((i % 2) === 0){
    console.log('Genap');
  }else{
    console.log('Ganjil');
  }
}

// pertambahan counter 2

for(i = 1; i <= 100; i+=2){
  var counter = i;
  if((counter % 3)=== 0){
    console.log(i + ' KELIPATAN ' + 3);
  }
 
}

// pertambahan counter 5

for(i = 1; i <= 100; i+=5){
  var counter = i;
  if((counter % 6)=== 0){
    console.log(i + ' KELIPATAN ' + 6);
  }
}

// Untuk pertambahan counter 9

for(i = 1; i <=100; i+=9){
  var counter = i;
  if((counter % 10)=== 0){
    console.log(i + ' KELIPATAN ' + 10);
  }
}


