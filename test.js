function foo() {
    var code = 1;
    if (true) {
        var code = 2;
    }
    console.log(code); // code has a value of 2 because 'var' is not block-scoped
}

function foo() {
    bar = 4; // ASSIGN_BEFORE_DECL alarm
    var bar;
    console.log(bar);
}
foo();


try {
    return foo();
} catch (e) {
    return bar();
} finally {
    return finalFunc(); // BAD_FINALLY_CONTROL_FLOW alarm because this will overwirte try-catch return value.
}

var arr = [1, 2, 3];
if (x < 0) {
    arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
}
if (x <= 0) {
    if (x) arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
}
