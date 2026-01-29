// string methods
// length
// trim(I)
//toupperCase()
//toLowersCase()
//includes()
//index()
//sice()
//substring()
//replace()
//concat()
//split()


let str = " Hello javaScript world "
console.log(str)
console.log( "length() :",str.length)

let trimText = str.trim();
console.log("trim() : " ,trimText)

console.log("toUpparCase() :",str.toUpperCase())
console.log("toLowerCase() :",str.toLowerCase())

console.log("includes() :",str.includes("javaScript"))

console.log("indexOf() : ",str.indexOf("javaScript")) 

console.log("slice() : ",str.slice(2,7))

console.log("substring() :",str.substring(2,7))

console.log("replace() : ",str.replace("javaScript", "react"))

let extraRext = " - HELLO JS";
console.log("concat : ", str.concat("extraRexta"))

console.log("split :",str.split(" "));