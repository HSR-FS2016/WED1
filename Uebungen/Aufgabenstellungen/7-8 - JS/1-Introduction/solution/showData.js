function isArray(array){
    return array instanceof Array;
}

var toCheck = [[], {}, 3];
for( var x of toCheck)
{
    console.log(`${JSON.stringify(x)} is ${isArray(x) ? "a" : "not"} Array`);
}

console.log("------------------------------");

function palindromeV1(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function palindromeV2(str){
    return str == str.split('').reverse().join('')
}

toCheck = ["maoam", "michael", "qwertzztrewq", "qwertztrewq"];
for(var x of toCheck)
{
    console.log(`${x} is ${palindromeV1(x) ? "a" : "not"} palindrome`);
    console.log(`${x} is ${palindromeV2(x) ? "a" : "not"} palindrome`);
}

console.log("------------------------------");

var data = {
    name: "hawaii",
    ingredient: ["cheese", "ham","pineapple"],
    price: 19.95
};

function showData(obj){
    for( var x in obj)
    {
        console.log(x + " = " +  obj[x]);
    }
}

showData(data);


