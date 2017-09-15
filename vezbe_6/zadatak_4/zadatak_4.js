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


function iskustvo(godine) {
	
	var zbirGodina = 0;

	for (i = 0; i < godine.length; i++) {

		zbirGodina += godine[i].yearsExperience;

	}

	return ("ukupno iskustvo zaposlenih je: " + zbirGodina + " godinu");
}

console.log(iskustvo(people));
