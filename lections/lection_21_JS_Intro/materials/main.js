console.log('Lection 1');

/*

expression;

*/

//--------------------DATA-----------------------


// a = 20;
// b = 56;
// c = 190;

// console.log( a, b, c );
// console.log( a + (b + c) );
// console.log( 20 + b + c );
// console.log( 20 + 56 + c );
// console.log( 76 + c );
// console.log( 76 + 190 );
// console.log( 266 );

// console.log( a - b + c );
// console.log( a - (b + c) );
// console.log( 20 + (b + c) );
// console.log( 20 + (56 + c) );
// console.log( 20 + (56 + 190) );
// console.log( 20 + 246 );
// console.log( 166 );

// res = a + b + c;
// console.log(res);

//--------------------DATA-----------------------

x = 14;
y = 5;

// console.log( x + y )
// console.log( x - y )
// console.log( x * y )
// console.log( x / y )
// console.log( x % y ) // x mod y ->

/*
    14 | 5
    10  -------------
     4    2
*/

//--------------------MATH functions-----------------------

// console.log( Math.trunc(x / y) );
// console.log( Math.floor(x / y) ); // 2.9 -> 2 | 2.1 -> 2
// console.log( Math.ceil(x / y) ); // 2.9 -> 3 | 2.1 -> 3
// console.log( Math.round(x / y) ); // 2.5 -> 3 | 2.4 -> 2


// value = 259.7306767348;
// console.log(value.toFixed(2));

//--------------------DATA TYPES-----------------------

// 0-255
// msg = 'Hello world!'; // ""

// console.log(msg);
// console.log(msg.substr(4, 8));

// p1 = "Front -";
// p2 = " end Pro!";
// res = p1 + p2; // + конкатенация
// console.log( res );


//--------------------dynamical data type-----------------------

// int sum = 200
// string msg = 'hello sum!';

// sum = 'asdasd' // error

// sum = 220;
// console.log(sum);
// sum = 'hello sum!';
// console.log(sum);
// sum = 0;
// console.log(sum);


// -------------------------------------------------

// x = 5;
// y = '12';

// console.log( x - y );
// console.log( 5 - y );
// console.log( 5 - '12' ); // приведение типа
// console.log( 5 - 12 );
// console.log( -7 );

// console.log( x - y );
// console.log( x * y ); // 60
// console.log( x / y );
// console.log( x % y );

// console.log( x + y ); // 5 + '12' -> '5' + '12' -> '512'

// x = 5;
// y = '12';

// console.log( x - y );
// console.log( 5 - y );
// console.log( 5 - '12!');
// console.log( 5 - NaN);
// console.log( NaN );

// NaN - преобразование в число было неудачным


x = 5;
y = '212';

// 1
// y = parseInt(y);

// 2
// y = y;
// y = +'212';
// // y = (+1)*'212!'; // '212!' -> toNumber -> NaN
// y = (+1)*'212'; // '212' -> toNumber -> 212

/*

    a - (x + 3) -> a - x - 3
    a + (-1)*(x + 3)

*/

// console.log( x + +y );