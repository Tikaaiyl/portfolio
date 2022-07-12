// creating functions
function greet(theName, favColor) {
    console.log("hello my name is " + theName + "." + " My favorite color is " + favColor + "!")
  }
  
  greet("Talha", "black")
  greet("Tikaaiyl", "blue")
  
  function tripleMe(x) {
    return 3 * x
  }
  
  let myFavoriteNumber = tripleMe(12)
  console.log(myFavoriteNumber)
  
  // object containing properties, object within object, and meow method
  let cat = {
    name: "Fluffy",
    age: 4,
    foods: {
      favorite: "Tuna",
      leastFavorite: "Oranges"
    },
    eyeColor: "blue",
    meow() {
      alert("meooooow")
    }
  }
  
  console.log("Name: " + cat.name, cat.age, cat.eyeColor)
  console.log(cat.foods.favorite)
  //cat.meow()
  
  //onClick functionality
  document.addEventListener("click", clickey)
  
  function clickey() {
    alert("hello there")
  }
  
  //Arrays
  let myLeastFavorite = 6
  let myLeastFavorites = [1, 3, 6]
  let myWords = ["red", "orange", "yellow"]
  let myPets = [{name: "Meowsalot", species: "cat"}, {name: "Barksalot", species: "dog"}]
  
  myWords.push("green")
  // splice 0 = "red", 1 = 1 item removed
  myWords.splice(0, 1)
  
  console.log(myWords)
  console.log(myLeastFavorites[1])
  console.log(myPets[1].species)
  
  /* Upper Case function
  let myName = "Talha"
  console.log(myName.toUpperCase()) */
  
  /* Round Up function
  let myNumber = 7.89
  console.log(myNumber.toFixed()) */

  /*let strawberryCount = 14*/

    /*(condition + operator)*/
/*if (strawberryCount > 9) {
 document.write("Congrats!") 
}
else {
  document.write("Sorry, we do not ship orders that small!")
}*/

/*= assign value, == check equality, != true if anything except value*/

// let strawCount = 2

// while strawcount is less than 50
/* while (strawCount <= 50) {
  document.write("There are " + strawCount + " strawberries.<br>")
  strawCount++ */
  // add +1 until 50
//}

// higher-order function accepts functions as argument or return a function
/*document.addEventListener("click", ourAmazingFunction)

function ourAmazingFunction(){
  alert("Thank you for clicking.")
}

function doubleMe(x) {
  return x * 2
}*/

function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier
  }
}

// JS is special cause functions can be returned to functions and be assigned as variables
/*let doubleMe = createMultiplier(2)
let tripleMe = createMultiplier(3)
let quadrupleMe = createMultiplier(4)

document.write(doubleMe(10))
document.write(tripleMe(4))
document.write(quadrupleMe(5))*/

let myColors = ['red', 'orange', 'yellow', 'green', 'purple']

myColors.forEach(saySomethingNice)

function saySomethingNice(color) {
  document.write("The color " + color + " is a great color!<br>")
}

let pets = [
  {name: "Meowsalot", species: "cat", age: 2},
  {name: "Barksalot", species: "dog", age: 3},
  {name: "Purrsloud", species: "cat", age: 8}
]

pets.push({name: "Puppster", species: "dog", age: 1})
let ourTest = pets.map(nameOnly)

function nameOnly(names) {
  return names.name
}

let dogs = pets.filter(speciesFilter)

function speciesFilter(species) {
  return species.species == "dog"
}

function ageFilter(age) {
  return age.age <3
}

let babyDogNames = pets.filter(speciesFilter).filter(ageFilter).map(nameOnly)
document.write("<br>" + babyDogNames + "<br>")

// JS checks levels upwards when scoping for variables (newName)
let newName = "Isao"
  function nameIsao() {
    let newName = "Isao Jr."
      if (2 + 2 == 4) {
        let newName = "Isao the 2nd"
        document.write("Inside the if statement: ", newName, "<br>")
      }
    document.write("Inside the function: ", newName, "<br>")
  }
nameIsao()
document.write("In the Global scope: ", newName, "<br>")

let scopeName = "Isao"
  function globalIsao() {
      if (2 + 2 == 4) {
        scopeName = "Isao the 2nd" // looks at global scope and changes it
        document.write("<br>This allows us to change the variable in global scope: <br>Inside the if statement: ", scopeName, "<br>")
      }
  }
globalIsao()
document.write("In the Global scope: ", scopeName, "<br>")

// difference var and let, let uses block scope while var uses function scope
var varName = "Isao"
  function varIsao() {
      if (2 + 2 == 4) {
        var varName = "Isao the 2nd"
      }
      document.write("<br>Function scope var: <br>Inside the if statement: ", varName, "<br>")
  }
varIsao()
document.write("In the Global scope: ", varName, "<br>")

let Talha = {
  firstName: "Talha",
  lastName: "the JS noob",
  codeJS() {
    //function imAFunctionNotAMethod(){
      //console.log(this) // this points towards object that is executing function
    //}
    //imAFunctionNotAMethod() // automatically points to global object, therefore breaking script
    document.write("<br>" + this.firstName + " " + this.lastName + " is coding Javascript.<br>")
  }
}
Talha.codeJS()
  // this points towards Talha object
function jsNoob() {
  document.write("<br>" + this.firstName + " " + this.lastName + " still a noob in Javascript.<br>")
}
jsNoob.call(Talha) // calls data from the Talha object to work with new function

//anonymous functions
/*document.addEventListener("click", function(){
  alert("Clickedy-click")
})*/

//arrow functions (arrow replaces "function")
/*document.addEventListener("click", () => { 
  alert("Clickedy-click")
})*/

//even cleaner (single line arrow doesnt need curly brackets)
/*document.addEventListener("click", () => alert("Clickedy-click"))*/

//utmost cleanest
let cleanArray = [10, 500, 2000]
let doubledClean = cleanArray.map(cleanNo => " " + cleanNo * 2)
document.write(doubledClean + "<br>")

//function hoisting - usually ordering of lines matters in JS but hoisting allows a work around
cool()
  function cool() {
    document.write("<br><h4>Function Hoisting</h4><br>")
  }

// Template literals
let tempLit = "Talha"
  document.write(`Hello my name is ${tempLit} and I am learning Template Literals!<br>`)

// Semicolons. The period of JS!
let semiLit = "Talha"; document.write(`Hello my name is ${semiLit} and I am learning single line coding with semicolons!<br>`)