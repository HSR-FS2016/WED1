function testExpression( a ) {
    console.log(a);
}
var i = 10
testExpression("A");
testExpression(a = i > 0 ? i : -i );
testExpression(var a = i > 0 ? i : -i );
testExpression((var a = i > 0 ? i : -i));