// Pet Data
let petData = [
	{
		name: 'Einstein',
		breeds: ['British Shorthair'],
		age: 'adult',
		size: 'M',
		gender: 'Male',
		details: ['Other cats ok', 'No dogs'],
		photo: 'images/Einstein.jpg',
	},
	{
		name: 'Lucy',
		breeds: ['Scottish Fold', 'British Shorthair'],
		age: 'adult',
		size: 'M',
		gender: 'Female',
		details: ['No dogs'],
		photo: 'images/Lucy.jpg',
	},
	{
		name: 'Bella',
		breeds: ['Persian'],
		age: 'adult',
		size: 'M',
		gender: 'Female',
		details: ['No cats', 'No dogs'],
		photo: 'images/Bella.jpg',
	},
	{
		name: 'Leo',
		breeds: ['Domestic short-hair'],
		age: 'adult',
		size: 'M',
		gender: 'Male',
		details: ['Other cats ok', 'Dogs ok'],
		photo: 'images/Leo.jpg',
	},
	{
		name: 'Destiny',
		breeds: ['Maincoon'],
		age: 'adult',
		size: 'L',
		gender: 'Female',
		details: ['Other cats ok', 'No dogs'],
		photo: 'images/Destiny.jpg',
	},
	{
		name: 'Max',
		breeds: ['Maincoon'],
		age: 'adult',
		size: 'L',
		gender: 'Male',
		details: ['No cats', 'No dogs'],
		photo: 'images/Max.jpg',
	},
	{
		name: 'Milo',
		breeds: ['Domestic short-hair'],
		age: 'adult',
		size: 'M',
		gender: 'Male',
		details: ['Other cats ok', 'Dogs ok'],
		photo: 'images/Milo.jpg',
	},
	{
		name: 'Pumpkin',
		breeds: ['Domestic long-hair'],
		age: 'adult',
		size: 'L',
		gender: 'Male',
		details: ['Other cats ok', 'No dogs'],
		photo: 'images/Pumpkin.jpg',
	},
	{
		name: 'Shadow',
		breeds: ['Scottish Fold'],
		age: 'adult',
		size: 'M',
		gender: 'Male',
		details: ['No cats', 'No dogs'],
		photo: 'images/Shadow.jpg',
	},
	{
		name: 'Simba',
		breeds: ['Scottish Fold'],
		age: 'young',
		size: 'S',
		gender: 'Male',
		details: ['No cats', 'No dogs'],
		photo: 'images/Simba.jpg',
	},
]
// Create a list of available breeds and how many of each breed there are

let getSummary = function () {
	//Get breeds
	let breeds = petData.reduce(function (breeds, cat) {
		// return breeds to next loop

		cat.breeds.forEach(function (breed) {
			// If breed already exists, increase count
			// Otherwise create it
			if (breeds[breed]) {
				breeds[breed] = breeds[breed] + 1
			} else {
				breeds[breed] = 1
			}
		})

		return breeds
	}, {})

	// Create summary markup
	let summary = ''
	for (let breed in breeds) {
		summary += `<li>${breed} (${breeds[breed]})</li>`
	}

	// Return the markup
	return `
     <h2>Available Breeds</h2>
     <ul>
         ${summary}
     </ul>`
}

// Create a list of adaptable cats
let getCats = function () {
	return petData
		.map(function (cat) {
			let { name, photo, age, size, gender, breeds, details } = cat

			return `
        <h2>${name}</h2>
        <p>
        <img src="${photo}" alt="A photo of ${name}"></p>
    
        <p>
            Age: ${age} <br>
            Size: ${size} <br>
            Gender: ${gender} <br>
            Breeds: ${breeds.join(', ')}
        </p>
    
        <strong>Other details:</strong>
        <ul>
            ${details
							.map(function (detail) {
								if (!detail.length)
									return `<li>
                                <em>No additional details ...</em>
                                </li>`
								return `<li>${detail}</li>`
							})
							.join('')}
        </ul>`
		})
		.join('')
}

// Load list of adaptable cats into the DOM
let catList = document.querySelector('#cats')
catList.innerHTML = getSummary() + getCats()
