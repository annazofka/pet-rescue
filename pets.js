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
		details: ['Other cats ok', 'No dogs'],
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

// Create a list of cats for adoption
function getCats() {
	return petData
		.map(cat => {
			let { name, breeds, age, size, gender, details, photo } = cat
			return `
            <h2>${name}</h2>
            <p><img alt="A photo of ${name}" src=${photo}></p>
            
            <p>
                    Age: ${age}<br>
                    Size: ${size}<br>
                    Gender: ${gender}<br>
                    Breeds: ${breeds.join(', ')}
            </p>
            
            <strong>Other Details:</strong>
            <ul>
                    <li>${details.join('; ')}</li>
            </ul>`
		})
		.join(' ')
}

// Create a list of breeds and how many of each breed there are
function getSummary() {
	// Template:
	{
		/* <h2>Available Breeds</h2>
    <ul>
         <li>{Breed Name} ({Breed Quantity})</li>
         <li>Ex. Lab (2)</li>
    </ul> */
	}

	return ''
}

// Load the list of cats to DOM
let catList = document.querySelector('#cats')
catList.innerHTML = getSummary() + getCats()
