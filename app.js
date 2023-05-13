
//1. Dizideki sayıların ortalamasını console'a yazdırınız.
let numbers = [11, 8, 43, 27, 3, 36, 14];
let sum = 0;
for(let i = 0; i<numbers.length; i++){
    sum += numbers[i];
}
let res = sum / numbers.length;
console.log(res); 


//2.Dizideki sayılardan minimum olanı console'a yazdırınız.
let numbers2 = [11, 8, 43, 27, 3, 36, 14];
/*1.yol
numbers2.sort(function(a, b){return a - b});
console.log(numbers2[0]);
*/

/*2.yol
let min = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] < min) {
    min = numbers2[i];
  }
}
console.log(min);
*/


// 3.yol
numbers2 = Math.min(...numbers2);
console.log(numbers2);



//3. Dizideki sayılardan maximum olanı console'a yazdırınız.
let numbers3 = [11, 8, 43, 27, 3, 36, 14];
numbers3.sort(function(a, b){return a - b});
console.log(numbers3[numbers3.length - 1]);


//4) Dizideki tek sayıları console'a yazdırınız.
let numbers4 = [11, 8, 43, 27, 3, 36, 14];
for(let i = 0; i<numbers.length; i++){
    if(numbers4[i] % 2 === 1){
        console.log(numbers4[i]);
    }
}

//5) Dizideki sayıları küçükten büyüğe doğru sıralayıp console'a yazdırınız.
let numbers5 = [11, 8, 43, 27, 3, 36, 14];
numbers5.sort(function(a, b){return a - b});
console.log(numbers5);


//6) Dizinin sıralandıktan sonra ortasında olan elemanı console'a yazdırınız.
let numbers6 = [11, 8, 43, 27, 3, 36, 14];
numbers6.sort(function(a, b){return a - b});
console.log(numbers6[(numbers6.length-1)/2]);




