const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]




function action_fleche_gauche(){
	alert('Flèche gauche click')
}

function action_fleche_droite(){
	alert('Flèche droite click')
}

let fleche_gauche = document.querySelector(".arrow_left")
fleche_gauche.addEventListener('click', action_fleche_gauche)

let fleche_droite = document.querySelector(".arrow_right")
fleche_droite.addEventListener('click', action_fleche_droite)

