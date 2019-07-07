document.addEventListener('DOMContentLoaded', function() {
	console.log('ready!');
	appendJournalist();

	document.getElementsByClassName('slider').slick({
		// normal options...
		infinite: false,

		// the magic
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					infinite: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 300,
				settings: 'unslick' // destroys slick
			}
		]
	});

	function appendJournalist() {
		console.log('trst');
		fetch('/api/examples')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				console.log(data);
				for (let i = 0; i < data.length; i++) {
					var table = document.getElementById('jtable');
					var row = table.insertRow(1);
					var first_name = row.insertCell(0);
					var last_name = row.insertCell(1);
					var age = row.insertCell(2);
					var gender = row.insertCell(3);
					var date_missing = row.insertCell(4);
					var country_origin = row.insertCell(5);
					var organizations = row.insertCell(6);
					first_name.innerHTML = data[i].first_name;
					last_name.innerHTML = data[i].last_name;
					age.innerHTML = data[i].age;
					gender.innerHTML = data[i].gender;
					date_missing.innerHTML = data[i].date_missing;
					country_origin.innerHTML = data[i].country_origin;
					organizations.innerHTML = data[i].organizations;
					// document.getElementById('jtable').append(
					//   document.querySelector('tr').append(
					//     '<td>' + data[i].first_name + '</td>'
					//     // document.querySelectorAll('#jtable td').text(data[i].first_name),
					//     // document.querySelectorAll('#jtable td').text(data[i].last_name),
					//     // document.querySelectorAll('#jtable td').text(data[i].age),
					//     // document.querySelectorAll('#jtable td').text(data[i].gender),
					//     // document.querySelectorAll('#jtable td').text(data[i].date_missing),
					//     // document.querySelectorAll('#jtable td').text(data[i].country_origin),
					//     // document.querySelectorAll('#jtable td').text(data[i].organizations)
					//   )
					// )
				}
			});
		// set up http request
		// var xhr = new XMLHttpRequest()

		// // set up listener to process completed requests
		// xhr.onload = function () {
		//   // process our return data
		//   if (xhr.status >= 200 && xhr.status < 300) {
		//     // request is successful
		//     console.log('success', xhr)
		//     console.log(data)
		//     for (let i = 0; i < data.length; i++) {
		//       document.getElementById('jtable').append(
		//         document.querySelector('tr').append(
		//           document.querySelectorAll('#jtable td').text(data[i].first_name),
		//           document.querySelectorAll('#jtable td').text(data[i].last_name),
		//           document.querySelectorAll('#jtable td').text(data[i].age),
		//           document.querySelectorAll('#jtable td').text(data[i].gender),
		//           document.querySelectorAll('#jtable td').text(data[i].date_missing),
		//           document.querySelectorAll('#jtable td').text(data[i].country_origin),
		//           document.querySelectorAll('#jtable td').text(data[i].organizations)
		//         )
		//       )
		//     }
		//   } else {
		//     // this will run when theres an error
		//     console.log('the request failed')
		//   }
		//   // create get requests here
		//   xhr.open('GET', '/api/journalist')
		//   xhr.send()

		//   appendJournalist()
		//   console.log('i am looking for indexjs file')

		//   // Get references to page elements
		//   var exampleText = document.querySelector('#example-text')
		//   var exampleDescription = document.querySelector('#example-description')
		//   var submitBtn = document.querySelector('#submit')
		//   var exampleList = document.querySelector('#example-list')
		//   /* global fetch, alert */
		//   // The API object contains methods for each kind of request we'll make
		//   class API {
		//     constructor(someDefault = 'defaultVal') {
		//       this.someDefault = someDefault
		//     }

		//     saveExample(example) {
		//       return fetch('api/examples', {
		//         method: 'POST',
		//         headers: {
		//           'Content-Type': 'application/json'
		//         },
		//         body: JSON.stringify(example)
		//       })
		//     }

		//     getExamples() {
		//       return fetch('api/examples')
		//     }

		//     deleteExample(id) {
		//       return fetch('api/examples/' + id, {
		//         method: 'DELETE'
		//       })
		//     }
		//   }

		//   // refreshExamples gets new examples from the db and repopulates the list
		//   var refreshExamples = function () {
		//     let api = new API()

		//     api.getExamples()
		//       .then(results => results.json())
		//       .then(function (data) {
		//         while (exampleList.firstChild) {
		//           exampleList.removeChild(exampleList.firstChild)
		//         }

		//         for (let example of data) {
		//           var aElem = document.createElement('a')
		//           aElem.textContent = example.text
		//           aElem.setAttribute('href', '/example/' + example.id)

		//           var liElem = document.createElement('li')
		//           liElem.classList.add('list-group-item')
		//           liElem.dataset.id = example.id
		//           liElem.appendChild(aElem)

		//           var buttonElem = document.createElement('button')
		//           buttonElem.classList.add('btn', 'btn-danger', 'float-right', 'delete')
		//           buttonElem.textContent = 'ｘ'

		//           liElem.appendChild(buttonElem)

		//           exampleList.appendChild(liElem)
		//         }
		//       })
		//   }

		//   // handleFormSubmit is called whenever we submit a new example
		//   // Save the new example to the db and refresh the list
		//   var handleFormSubmit = function (event) {
		//     event.preventDefault()
		//     let api = new API()

		//     var example = {
		//       text: exampleText.value.trim(),
		//       description: exampleDescription.value.trim()
		//     }

		//     if (!(example.text && example.description)) {
		//       alert('You must enter an example text and description!')
		//       return
		//     }

		//     api.saveExample(example).then(function () {
		//       refreshExamples()
		//     })

		//     exampleText.value = ''
		//     exampleDescription.value = ''
		//   }

		//   // handleDeleteBtnClick is called when an example's delete button is clicked
		//   // Remove the example from the db and refresh the list
		//   var handleDeleteBtnClick = function (event) {
		//     if (event.target.matches('button.delete')) {
		//       let api = new API()

		//       var idToDelete = event.target.parentElement.dataset.id

		//       api.deleteExample(idToDelete).then(function () {
		//         refreshExamples()
		//       })
		//     }
		//   }

		//   // Add event listeners to the submit and delete buttons
		//   submitBtn.addEventListener('click', handleFormSubmit)
		//   exampleList.addEventListener('click', handleDeleteBtnClick)

		//   console.log('hi')
		//   $('#submitButton').click(function (event) {
		//     event.preventDefault()
		//     var firstname = $('#firstname').val()
		//     var lastname = $('#lastname').val()
		//     var age = $('#age').val()
		//     var gender = $("input[name='gender']:checked").val()
		//     var datemissing = $('#dateMissing').val()
		//     var countryoforgin = $('#countySelection').val()
		//     var organizations = $('#org').val()
		//     var newjournalist = {
		//       first_name: firstname,
		//       last_name: lastname,
		//       age: age,
		//       gender: gender,
		//       organizations: organizations,
		//       country_origin: countryoforgin,
		//       date_missing: datemissing
		//     }
		//     console.log(newjournalist)
		//     $.post('/list', newjournalist)
		//   })
		// })
	}
});
