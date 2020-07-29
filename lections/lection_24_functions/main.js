console.log('Lection_24');



source = [1, 2, 3, 4, 5, 6]
// подпрограммы -> function and procedure
// smart function 

// sum = 20;
function sum() {
    console.log('Hello sum!');
}

function renderArr(l) {
    document.write(l.join('_') + '<br />');
}


// sum();
// sum();
// sum();
// sum();

renderArr(source);
source[0] = 'Hello!';
renderArr(source);
renderArr([5,46,34,634,6,346,34,634,6,34]);



// ----------------------


// function declaration

// f();
function f() {
    console.log('f is calling');
}
// f();


// function expression
// f1(); // error
f1 = function() { // anonymous function
    console.log('f1 is calling');
}
// f1();


// -------------------------------------


// Parameters / Arguments


// function sum (a, b) {
//     // console.log(value, text)
//     // res = a + b;

//     res = a + b;
//     console.log(res);
// }


// a = 10;
// b = 70;

// sum(a, b);
// console.log(sum(500, 'Hello!')); // sum(500) -> value = 500; text = 'Hello!'

// -------------------------------------

// Return value

function sum(a, b) {
    // console.log(value, text)
    // res = a + b;

    // res = a + b;
    // return res;
    return a + b;
}

// console.log(sum(500, 'Hello!'), sum(10, 12));

// result = sum(123123, 334534) + sum(-123, 3455) + 10;

// console.log(result);

// -------------------------------------

function sumOfArray(list) {
    sum = 0;

    for(i = 0; i < list.length; i++) {
        sum = sum + list[i];
    }

    return sum;
}

function getMaxOfArray(arr){
    max = arr[0];
    for(i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

result = sumOfArray([436,3,6,346,3,64,346,34,634,6,346]);
// console.log(2224);
// result = 2224;
console.log(result);
result = getMaxOfArray([1,2,3, 8, 6]);
console.log(result);
result = getMaxOfArray([3,3,534,5]);
console.log(result);

// -------------------------------------------------------


// Scopes