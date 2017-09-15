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

function prosecnaOcena(nizOcene) {

	var zbir = 0;

	for (i = 0; i < nizOcene.length; i++) {

		zbir = (zbir + nizOcene[i]);

	}
	
	return("prosecna ocena je: " + zbir / nizOcene.length);
}

console.log(prosecnaOcena(testObjekat.ocenePolaznika));