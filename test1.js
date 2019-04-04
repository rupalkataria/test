
var arr = [1, 2, 3];
x = -3;
if (x < 0) {
    arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
}
if (x <= 0) {
    if (x) arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
}
