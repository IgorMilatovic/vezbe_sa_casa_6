var testObjekat = {
  naziv: "Startit kurs pravljenja sajtova",
  trajanjeNedelja: 33,
  predavac: {
    ime: "Petar",
    prezime: "Popovic"
  },
  ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
  organizacija: "Startit",
  kursJosTraje: true
};

function ratesOcena(ocene) {

	var skupPoOcenama = [[], [], [], [], [], [], [], [], [], []];
	
	for (n = 1; n <= 10; n++) {
		for (i = 0; i < ocene.length; i++) {

			if (n === ocene[i]) {
				skupPoOcenama[n-1].push(n);
			}
		}
	}

	return skupPoOcenama;
}

function ratesOcenaProba(niz) {
	var n = 1
	var rates_count = [];
	for (i = 0; i < niz.length; i++) {
		rates_count.push("\{rate\_" + n + "\: " + niz[n-1].length + "\}");
		n++;
	}

	return rates_count;
}

console.log(ratesOcenaProba(ratesOcena(testObjekat.ocenePolaznika)));