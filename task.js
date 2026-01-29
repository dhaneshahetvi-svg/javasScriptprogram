let student ={
    name: "first name",
    email: "USER@GMAIL.COM",
    course: "javaScript,React,Node",
    marks: [45,78,60,90,33],
    hobbies: ["music", "circket", "Reading"],
    address: ["India",'"Gujarat','Ahmedabad'],
};

//string opreations
//removw sapce

console.log("trim() :", student.name);

//convert uparcase

console.log("toUparCasr():", student.name.toLocaleUpperCase());

//email lowecase
console.log("lowercase() :",student.email.toLowerCase());

//check whether courese includes
console.log("includes():",student.course.includes("react"));

//find the index of  "Node" in courese
console.log("indexOf():", student.course.indexOf("Node"));

//replace "javascript" with "25"
console.log("replace() :", student.course.replace("javascript","25"));

//convert courese string into array

//Display the lenght of student name
console