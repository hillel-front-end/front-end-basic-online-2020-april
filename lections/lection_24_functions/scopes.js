// Scopes


// Global
x = 10; // global
var y = 20; // local? -> global
var res = 'Super unique value!';
// f -> global
// f2 -> global

// console.log(x);
// f();
// console.log(res);
// f2()


function f(a, b) { // local
    var x = 20;
    var res = a + b; // unexpected mutation
    var y = 2141234124124;

    // x, a, b, res, y -> local variables
    console.log(x, res, y);
}

function f2() { // local
    f(1, 2);

    console.log(y); // 20
    // console.log(example); // error -> example is not defined
}

// -----------------------------------------

var z = 'variable global z';

// parent_1('variable b');
// parent_2();
// child(); // error -> child is not defined



// console.log(z);


function parent_1(b) { // local
    var a = 'variable a';
    child();
    console.log(a);

    function child() { // local
        var k = 0;
        // var a = 'child variable a';
        a = 'variable a updated';
        z = 'variable global z updated';

        console.log(a, b, z);
    }
}

function parent_2() { // local
    // child(); // error -> child is not defined
}

// console.log(a); // error



// --------------------------------------------------

function factory(source) {
    var counter = 0;
    return function() {
        // var data = source[counter];
        // counter = counter + 1;
        // return data;
        return source[counter++];
        // Тут замыкание с функцией factory, 
        // которое поставляет переменные source и counter
    }    
}


var doIt = factory([10, 20, 30, 40]);

console.log( doIt() ); // 10
console.log( doIt() ); // 20
console.log( doIt() ); // 30
console.log( doIt() ); // 40
console.log( doIt() ); // undefined
console.log( doIt() ); // undefined