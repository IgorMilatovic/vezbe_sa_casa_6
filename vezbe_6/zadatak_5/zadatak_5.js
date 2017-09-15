var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

function departments(godine) {

	var IT = 0;
	var Engineering = 0;
	var Management = 0;


	for (i = 0; i < godine.length; i++) {

		if (godine[i].department === 'IT') {
			IT += godine[i].yearsExperience; 
		}

		else if (godine[i].department === 'Engineering') {
			Engineering += godine[i].yearsExperience;
		}

		else {
			Management += godine[i].yearsExperience;
		}
	}
	
	return("{\n" + "Engineering: " + Engineering + "\n" + "IT: " + IT + "\n" + "Management: " + Management + "\n}")
    
}

console.log(departments(people));