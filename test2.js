function foo(url) {
    var target = url + "user" + user;
    target = target.replace(/\.|\?|\&|\/|\=|\:|\-|\s/gi, "");
}
