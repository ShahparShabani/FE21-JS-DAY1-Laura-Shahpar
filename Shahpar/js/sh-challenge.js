document.write("<h1>Challenge</h1> <br> <br>");

// Multidimensional array
document.write("<h3>Multidimensional array</h3> <br> <br>");

var array = [
    ["Vienna"],

    ["            ", "is"],

    ["                   ", "a"],

    ["                      ", "nice"],

    ["                            ", "city."],
];

document.write("<hr>");

// Multidimensional array
document.write("<h3>String Manipulation</h3> <br> <br>");

let string =
    "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";


    document.write(string.split('$').join(' '));