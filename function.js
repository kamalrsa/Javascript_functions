function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i); // a prime
  }
}
showPrimes(5);

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
showPrimes(7);

// example of function
let mycar = { make: "Honda", model: "Accord", year: 1998 };
let x, y;
function myFunc(theObject) {
  console.log(mycar.make);
  theObject.make = "Toyota";
}
x = mycar.make; // x gets the value "Honda"
console.log(x);
myFunc(mycar);
y = mycar.make;
console.log(y);

//global and local scope
// The following variables are defined in the global scope
var num1 = 20,
  num2 = 3,
  name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return console.log(num1 * num2);
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return console.log(name + " scored " + (num1 + num2));
  }

  return add();
}

getScore(); // Returns "Chamahk scored 5"

// function wit if condition
const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  let nameStudent = studentName.toLowerCase();
  if (studentName === "") {
    return "This cannot be added.";
  } else if (
    nameStudent === "queen" &&
    !class07Students.includes(nameStudent)
  ) {
    return class07Students.push(studentName);
  } else if (class07Students.includes(studentName)) {
    return `${studentName} is already in the class.`;
  } else if (class07Students.length >= 6) {
    return "Cannot add more students to class 07";
  } else {
    return class07Students.push(studentName);
  }
}
console.log(addStudentToClass("Viral"));
console.log(addStudentToClass("Shruthi"));
console.log(addStudentToClass("Heema"));
console.log(addStudentToClass("Vishal"));
console.log(addStudentToClass("Karolina"));
console.log(addStudentToClass("Pankaj"));
console.log(addStudentToClass("Sowmya"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("queen"));
console.log(addStudentToClass("Queen"));
console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(getNumberOfStudents());

// Removes the name from array
const names = ["peter", "ram", "shyam", "peter"];
nameToRemove = "peter";
const newNames = names.filter((item) => item != nameToRemove);
console.log(newNames);

// add a note in object
const notes = [];

function saveNote(content, id) {
  const note = {
    content: content,
    id: id,
  };
  notes.push(note);
}
saveNote("Pick up groceries", 1);
saveNote("Get milk", 2);
saveNote("Get coffee", 3);

console.log(notes);

//Get a note

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  return "There is an error";
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted();
