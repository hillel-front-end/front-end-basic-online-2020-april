console.log('lection 2');

/*
 Тезисы:
    xx-yy-zz - Вступление
    xx-yy-zz - создание переменных var
    xx-yy-zz - Math.pow, Math.floor, Math.round, Math.ceil, Math.trunc, Math.abs, Math.random,
    xx-yy-zz - boolean
    xx-yy-zz - logic &&, ||, !
    xx-yy-zz - if else
    xx-yy-zz - cycles do...while, while
    xx-yy-zz - cycles for

Практика:
    Возведение числа в степень a^n, без Math.pow
*/


x = 10;
var y = 20;
let z = 30;
const p = 'hello';

y = 80;
z = 89;
// p = 20;

// console.log( Math.pow(2, 8), x**y );
// console.log( Math.abs(28) );

// console.log(Math.random()); // 0 .. 1 -> 0.56343434


// ----------------------------------------------

flag_1 = false;
flag_2 = true;
// a := false;
// a = b

// console.log( 5 == 5 ); 
// console.log( 5 > 5 ); 
// console.log( 5 >= 5 ); 
// console.log( 5 < 5 ); 
// console.log( 5 <= 5 ); 
// console.log( 12 != 5 ); // 12 <> 5

// -------------
// console.log('Before-------------')
// console.log( 1 == true ); // true
// console.log( 1 == '1' ); // true
// console.log( '' == 0 ); // 

// console.log('After-------------')
// console.log( 1 === true ); // false
// console.log( 1 === '1' ); // false
// console.log( '' === 0 ); // false
// console.log( 1 === 1.0 )

// -------------



// логическое И - logic AND - &&

// console.log( 5 > 0 && 5 != 10 );
// console.log( true && 5 != 10 );
// console.log( true && true );
// console.log( true );

// z = +prompt();
// res = z >= 0 && z <= 100 && z != 50;
// console.log(res)

// res = z >= 0 && z <= 100 && z != 50;
// res = true && z <= 100 && z != 50;
// res = true && true && z != 50;
// res = true && z != 50;
// res = true && true;
// res = true;

// res = z >= 0 && (z <= 100 && z != 50);
// res = true && (z <= 100 && z != 50);
// res = true && (true && z != 50);
// res = true && (true && true);
// res = true && true;
// res = true;

// ----------------

// логическое ИЛИ - logic OR - ||
// x = '16';
// console.log(typeof x === 'number' && (x < -5 || x >= 12));
// console.log(typeof '16' === 'number' && (x < -5 || x >= 12));
// console.log(false && (x < -5 || x >= 12));
// console.log(false);

// x = '16';
// console.log(typeof x === 'number' && (x < console.log('WHAAAAT') || x >= 12));


// ----------------

// логическое отрицание - !

// console.log( !true ); // false
// console.log( !(5 > 0) ); // false


// ---------------- if else


// if (true) {
//  // positive
// }

// var value = +prompt();

// if (value > 0) {
//     // console.log(value + ' value is correct');
// } else {
//     // console.warn(value + ' value is incorrect');
// }

// if (value) { // toBoolean
//     console.log('DONE');
// }

// if (value == 50) { 
//     console.log('DONE');
// }

// ---------------- cycles

/*
 Цикл с предусловием

 (условие) {


 }
*/

// x = 1;
// while(x <= 5) {
//     console.log(x);

//     x = x + 1;
// }

// console.log('after', x)


/*
 Цикл с постусловием

 do {


 } (условие) 
*/


// x = 100000;
//  do {
//     console.log(x);

//     x = x + 1;
// } while(x <= 5)

// console.log('after', x)


// заставить человека ввести символ !

// do {
//     input = prompt('введите знак &');
//     errorStatus = input != '&';
//     if (errorStatus) {
//         console.error('wrong value');
//     } else {
//         console.log('passed'); 
//     }
// } while(errorStatus)


// -------------------------------------------

// цикл с счётчиком - for


// for(1;2;3) {
    // 4
// }

// 1 - зона начальных условий
// 2 - зона условие выполнения цикла
// 3 - зона действие между итерациями
// 4 - тело цикла

// for(i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log('after', i)
/*
               <----<-----<-----<-
              |                   |
    1 -> if(2 == true) { 4 -> 3 ->  } else { exit! }

*/

// for(
//     i = 1, sum = 0, j = -50; 
//     (i <= 5 && j <= 1000); 
//     i++, j = j + 23
// ) {
//     console.log(i);
//     sum = sum + i;
// }

// console.log(sum)

// -------------------------------

// a -> b, между а и б посчитать число в степени значения предыдущего числа. 
// Первое - считаь как число в степени 0.


a = +prompt();
b = +prompt();

// start = a;
// end = b;
// if (a >= b) {
//     start = b;
//     end = a;
// }

// for(i = start; i <= end; i++) {
//     if (i == start) {
//         console.log(i ** 0);  
//     } else {
        // console.log(i ** i-1)
    // }
//     
// }

// if (a < b) {
//     for(i = a; i <= b; i++) {
//         if (i == a) {
//             res = i ** 0;
//         } else {
//             res = i ** (i-1);
//         } 
//         console.log('i=' + i, 'res=' + res);
//     }  
// } else {
//     for(i = a; i >= b; i--) {
//         if (i == a) {
//             res = i ** 0;
//         } else {
//             res = i ** (i+1)
//         }

//         console.log('i=' + i, 'res=' + res);
//     } 
// }