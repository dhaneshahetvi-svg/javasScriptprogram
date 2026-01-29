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

// console.log("toUparCasr():", student.name.toLocaleUpperCase());

// //email lowecase
// console.log("lowercase() :",student.email.toLowerCase());

// //check whether courese includes
// console.log("includes():",student.course.includes("react"));

// //find the index of  "Node" in courese
// console.log("indexOf():", student.course.indexOf("Node"));

// //replace "javascript" with "25"
// console.log("replace() :", student.course.replace("javascript","25"));

// //convert courese string into array
// console.log("convert into array :".student.course.split(", "))

// //Display the lenght of student name
// console.log("length() :", student.name.length)

//ARRAY OPERATION //
//Add "Swimming" to hobbies
// student.hobbies.push("Swimming");
// console.log(student.hobbies);
// //Remove the last hobby
// student.hobbies.pop();
// console.log(student.hobbies);

// //Add "Drawing" at the beginning of hobbies
// student.hobbies.unshift("Drawing");
// console.log("student() :", student.hobbies);

// //Remove the first hobby


// //Merage hobbies with

// //check if "react exist"

// //Find index of  "JS" in course array
// console.log("indexOf() :",student.course.indexOf("JS"));

//Extract first two marks
console.log("slice() :",student.marks.slice("20,50"));

//Remove one failed subject mark (less than 40) using splice
console.log("splice() :",student.marks.splice(40))

//COonvert hobbies array into a string
let hobbiesString = student.hobbies.join(", ")
console.log(hobbiesString);

//ARRAY INERATION METHODS

//Use map() to add 5 bonus marks to each mark
console.log("map :", student.marks.map(mark => mark * 5));

//Use filter() to  get only passed marks above (>=40)
 console.log("filter : ",student.marks.filter(marks => marks >=40))

 //Use forEach() to print each hobby
 console.log("forEach :");
student.hobbies.forEach(hobby => console.log(hobby));

//Sort marks in ascending order
let marks = [45,5,21,4,1]
  console.log("sort() :",marks.sort())

//Reverse marks order
console.log("reverse() : ", marks .reverse())

// Flatten the address array


//OBJECT HANDLING

//Add a new property result = "pass" if all msrks are >=40
if (student.marks.every(mark => mark >= 40)) {
  student.result = "pass";
}

console.log(student);

//Print final student object
console.log("Final Student Object:", student);

