console.log('Lection 23 - Arrays');


array = [6, 7, [1, 2, 3], 9, 0, true, 234, 'hello',64,6, false,4];
// console.log(array)
// console.log( array[0] );
// array[2] = 'Hello world'
// array[0] = array[1] + array[4];
// console.log(array);
// console.log(array.length);


// last
// console.log( array[array.length - 1] );

// ----------------------------------------------
sum = 0;
points = [78, 90, 100, 67, 45, 0, 45, 78];
// средне ариф - сумма / количество
// console.log(points)

for(i = 0; i < points.length; i++) {
    // console.log(i, points[i]);
    sum = sum + points[i];
}

// console.log('Sum: ', sum)
// res = sum / points.length;
// console.log(res);


// -----------------------------------------------

list = [4,5,45,4,53,5,345,34,5];

// console.log(list);
// console.log(list.length);
// list.length = 4;
// // console.log(list);
// // list.length++;
// // list[4] = 'Last value';
// console.log(list);
// list.length = 100;
// console.log(list);

// list[1200] = 'Super last!';
// console.log(list);

// -----------------------------------------------


// A = []; // блок инициализации
// A.length = 10;

// A = new Array(10); // через конструктор
// console.log(A);


// for(i = 0; i < A.length; i++) {
//     A[i] = Math.trunc(Math.random()*100);
// }
// console.log(A);


// -----------------------------------------------

/*
Создать массивы А и В. Заполнить случайными числами.
Найди все элементы которые повторяются в массивах А и Б.
*/
A = new Array(15); 
B = new Array(15); 
for(i = 0; i < A.length; i++) {
    A[i] = Math.trunc(Math.random()*20);
    B[i] = Math.trunc(Math.random()*20);
}
// console.log(A, B);

for(i = 0; i < A.length; i++) {
    // console.log(A[i]);
    // for(j = 0; j < B.length; j++){
    //     if(A[i] === B[j]) {
    //         console.log('1', A[i]);
    //     }
    // }

    if (B.includes(A[i])){
        // console.log('2', A[i]);
    }

}


// -----------------------------------------------
/*
Создать массив А размерностью n. 
Заполнить случайными числами любом диапазоне. 
Например A = [23,1,2,52,5,34,23,6,246,436];
- найти максимальное число и минимальное число.

*/

A = new Array(15); 
for(i = 0; i < A.length; i++) {
    A[i] = Math.trunc(Math.random()*20) - 10;
}
console.log(A);

// A = [-23,-52,-5,-34,-436,-23,-6,-246];
// max = 0; // wrong
max = A[0];
min = A[0];

for(i = 1; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }
    if (A[i] < min) {
        min = A[i];
    }
}

console.log('max = ', max)
console.log('min = ', min)