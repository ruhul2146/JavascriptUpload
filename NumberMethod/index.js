var number=20, str1="100",str2="399.56",numberFloat=7.394839;
//integar conversion
var converInt= parseInt(str1);
//string conversion
var str= toString(number);
var conFloat= parseFloat(str2);
console.log(typeof(number));
document.write(typeof(str));
//new line 
document.write("<br/>");
document.write(typeof(converInt));
document.write("<br>");
document.writeln(typeof(conFloat));
document.write("<br>");
//how much number after decimal point we want 
document.writeln(numberFloat.toFixed(1));
document.write("<br>");
//how much floating number we want to show 
document.writeln(numberFloat.toPrecision(3));
document.write("<br>");
