// exercise 1

const story = "There was once an employee named Dwight. Dwigt was not very smart, but he was loyal. I could have promoted dwight but I did not.";

const wordSearch = /Dwigh?t/gi
const correctedStory = story.replace(wordSearch, 'Jackson')

document.querySelector("#textwrongjs").insertAdjacentHTML("beforeend", story);
document.querySelector("#textcorrectjs").insertAdjacentHTML("beforeend", correctedStory);

// exercise 2

const pets = [
    "cat: Smith, Meowsalot",
    "young dog: Jones, Barksalot",
    "rabbit: Doe, Fluffy"
  ];

  const petPattern = /([a-z\s]+):\s([a-z]+),\s([a-z]+)/i
  const petsUpdated = pets.map(pet => pet.replace(petPattern, '$3 $2 <span class="description">$1</span>'))
  
  document.querySelector("#petliststart").insertAdjacentHTML("beforeend", `
      <ul>
        ${pets.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `
  );
  document.querySelector("#petlistnew").insertAdjacentHTML("beforeend", `
  <ul>
    ${petsUpdated.map(item => `<li>${item}</li>`).join("")}
  </ul>
`
);

// exercise 3

const usernameField = document.querySelector("#username-field");
const usernameRules = document.querySelector(".username-rules");
const usernameSuccess = document.querySelector(".username-success");

usernameField.addEventListener("input", () => usernameChangeHandler(usernameField.value));

// Create a regular expression here that does the following
  // 1. Can only contain letters and the 26 letters of the alphabet
  // 2. Must begin with a letter, not a number
  // 3. Must be atleast 8 characters long, and not more than 30 characters
const usernamePattern = /^[a-z][a-z0-9]{7,29}$/i


function usernameChangeHandler(userInput) {
  // Use your regular expression here to test if userInput is valid or not
  // If it is valid call the showGood function, if not, call the showBad function
  if(usernamePattern.test(userInput)) {
    showGood()
  } else {
    showBad()
  }
}

function showGood() {
  usernameSuccess.classList.remove("hidden");
  usernameRules.classList.add("hidden");
}

function showBad() {
  usernameSuccess.classList.add("hidden");
  usernameRules.classList.remove("hidden");
}


// exercise 4
const numberStory = "There are a lot of phone numbers. One is 5555555555, and another is 123-123-1234. Yet another is 321.321.4321. Another is 555 555 5555. Did you know another phone number is 1 555 555 5555 and my friend has a number of (555) 123 1234. My other friend has a number of 555 555-5555 and another has 1.987.654.3210."

document.querySelector("#numberStory").insertAdjacentHTML("beforeend", numberStory)

const phonePattern = /1?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/g

let results = numberStory.match(phonePattern)
    if (!results) results = []

const resultsUniform = results.map(number => number.replace(phonePattern, '($1) $2-$3'))

document.querySelector("#numberStoryList").insertAdjacentHTML("beforeend", numberStory + `<hr><p>There are ${results.length} phone numbers in the text.</p>
    <ul>
        ${resultsUniform.map(number => `<li>${number}</li>`).join('')}
    </ul>
`)

// more about regular expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions