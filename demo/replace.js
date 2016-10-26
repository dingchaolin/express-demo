var str= "1111<%=name%>22222";
var data = {
    name:'dcl'
}
var str = str.replace(/<%=(\w)%>/, function( input, group1){
    console.log( "input="+input, "group1="+group1 );
    return data[group1];
})

console.log( str );
