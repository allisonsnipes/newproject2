console.log('index.js loaded at home page')

// Get references to page elements
/* eslint-disable no-undef */
/* ************ 🌍 Globals 🌏 *************** */
let setMisingButton = document.querySelector('submitButton')
let displayPersons = document.querySelector('journalistInfo')
// Object with all input elements.
let missingData = {
  firstName: document.querySelector('firstname'),
  lastname: document.querySelector('lastname'),
  age: document.querySelector('age'),
  gender: document.querySelector('gend'),
  dateMissing: document.querySelector('dateMissing'),
  country: document.querySelector('countrySelection'),
  organization: document.querySelector('org')

}

// The API object contains methods for each kind of request we'll make
class API {
  // Constructor
  constructor(someDefault = 'defaultVal') {
    this.someDefault = someDefault
  }
  // This will fetch to create a new missing journalist
  saveMissing(data) {
    return fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
  // This will fetch all pets available on database and display on
  // list.html
  getAlljournalists() {
    // GET method is Default on fetch
    return fetch('findAll')
      .then(result => result.json())
      .then(data => {
        for (let journalist of data) {
          displayJournalist(journalist)
        }
      })
  }
  // Thsi will be used to remove a pet from database
  deletePerson(id) {
    return fetch('/list' + id, {
      method: 'DELETE'
    })
  }
}
/**
 *
 * Code used For availablePets.html
 * This will Create a card and add the card to petContainer
 *
 */
function displayJournalist(person) {
  // Code for card (Bootstrap)
  let _colCard =
    `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-7 p-1">
    <div class="card p-1 gif-card">
      <h4 class="card-title text-center p-2 mx-2  bg-primary text-light">${person.first_name}</h4>
          <h2 class="card-title">${person.last_name}</h2>
          <h3 class="card-text">Type: ${person.age}</h3>
          <h3 class="card-text">${person.date_missing} years old</h3>
        </div>
      </div>
  </div>`
  // Insert beforeend
  displayPersons.insertAdjacentHTML('beforeend', _colCard)
}
/*
 ******************* Event Listner ***********************
 */
// Event Listner for setPet
// handleFormSubmit is called whenever we submit a new Pet
// Save the new example to the db and refresh the list
let handleFormSubmit = function (event) {
  event.preventDefault()
  let api = new API()

  // FIXME: Suppose Multer are saiving imgs at public/uploads
  // Generate file path base on Express/Multer settings for static route
  // let imagPath = `/uploads/${getPictName.value.split('\\')[2]}`

  // TODO: Get the pet infoS
  // FIXME: isAdopted
  // TODO: Karina its working on Multer
  let journalistToAdd = {
    firstName: missingData.firstName.value.trim(),
    lastname: missingData.lastname.value.trim(),
    age: missingData.age.value.trim(),
    gender: missingData.gend.value.trim(),
    dateMissing: missingData.dateMissing.value.trim(),
    country: missingData.countrySelection.value.trim(),
    organization: missingData.org.value.trim()

  }

  // Check if All inputs has data
  for (let key in missingData) {
    if (missingData[key].value.trim().length === 0) {
      alert(`'You must enter all data!'`)
      return
    }
  }
  // Save Animals data
  api.saveMising(journalistToAdd).then(function (data) {
    // refreshExamples()
    console.log(data)
  })

  // Rest all fields
  for (let key in missingData) {
    missingData[key].value = ''
  }
}
// FIXME: this is logging error on browser console
let _api = new API()
_api.getAlljournalists()

// Add event listeners to the submit and delete buttons
setMisingButton.addEventListener('click', handleFormSubmit)
