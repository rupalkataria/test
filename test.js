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
