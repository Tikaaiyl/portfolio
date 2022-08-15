let dogSlidesTimer
let deletePrevBreedSelection

// Fetches data
async function dogList() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        // await prevents anything from below from running until fetch finished
        const data = await response.json()
        dogListHTML(data.message)
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
    }
}
dogList()

// Creates the HTML
function dogListHTML(breedList) {
    document.getElementById("dogBreed").innerHTML = `
        <select onchange="loadByBreed(this.value)">
           <option>Choose a dog breed!</option>
           ${Object.keys(breedList).map(function(dogBreed2) {
                return `<option>${dogBreed2}</option>`
           }).join('')}
        </select>
    `
}

async function loadByBreed(dogBreed3) {
    // if breed does not equal
    if(dogBreed3 != "Choose a dog breed!") {
        const response = await fetch(`https://dog.ceo/api/breed/${dogBreed3}/images`)
        const data = await response.json()
        createDogSlideshow(data.message)
    }
}

function createDogSlideshow(dogImages) {
    let dogPicPosition = 0
        clearInterval(dogSlidesTimer)
        clearTimeout(deletePrevBreedSelection)

    if (dogImages.length > 1) {
        document.getElementById("dogSlideShow").innerHTML = `
        <div class="dogSlide" style="background-image: url('${dogImages[0]}');"></div>
        <div class="dogSlide" style="background-image: url('${dogImages[1]}');"></div>
        `
        dogPicPosition += 2
            if (dogImages.length == 2) dogPicPosition = 0
        dogSlidesTimer = setInterval(dogPicSlide, 3000)

    } else {
         document.getElementById("dogSlideShow").innerHTML = `
        <div class="dogSlide" style="background-image: url('${dogImages[0]}');"></div>
        <div class="dogSlide"></div>
        `
    }


    function dogPicSlide() {
        document.getElementById("dogSlideShow").insertAdjacentHTML("beforeend", `
        <div class="dogSlide" style="background-image: url('${dogImages[dogPicPosition]}');"></div>
        `)

        deletePrevBreedSelection = setTimeout(function(){
            document.querySelector(".dogSlide").remove()
        }, 1000)

        if (dogPicPosition + 1 >= dogImages.length) {
            dogPicPosition = 0
        } else {
            dogPicPosition++
        }

    }
}