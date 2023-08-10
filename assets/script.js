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


var selected_slide_index = 0

function action_fleche_gauche(){
	//alert('Flèche gauche click')
	if(selected_slide_index != 0){
		new_selected_slide_index = selected_slide_index -1		
	}
	else{
		new_selected_slide_index = slides.length - 1
	}
	
	select_slide(new_selected_slide_index, selected_slide_index)
	changer_banner_img('./assets/images/slideshow/'+ slides[new_selected_slide_index].image)
	selected_slide_index = new_selected_slide_index
}

function action_fleche_droite(){
	//alert('Flèche droite click')
	if(selected_slide_index != slides.length - 1){
		new_selected_slide_index = selected_slide_index + 1
	}
	else{
		new_selected_slide_index = 0
	}
	
	select_slide(new_selected_slide_index, selected_slide_index)
	changer_banner_img('./assets/images/slideshow/'+ slides[new_selected_slide_index].image)
	selected_slide_index = new_selected_slide_index
}

let fleche_gauche = document.querySelector(".arrow_left")
fleche_gauche.addEventListener('click', action_fleche_gauche)

let fleche_droite = document.querySelector(".arrow_right")
fleche_droite.addEventListener('click', action_fleche_droite)



function select_slide(new_slide_position, old_selected_slide_index){
	let old_selected_dot =  document.querySelector("#dot" + old_selected_slide_index)
	let new_selected_dot = document.querySelector("#dot" + new_slide_position)
	new_selected_dot.classList.add("dot_selected")
	if(new_slide_position != old_selected_slide_index){		
		old_selected_dot.classList.remove("dot_selected")
	}
}

function changer_banner_img(image_src){
	let img = document.querySelector(".banner-img")
	img.setAttribute('src', image_src)
}



function initialisation(){
	let dots_div = document.querySelector(".dots")
	for(let i = 0; i < slides.length; i++){
		dots_div.innerHTML += `<div class="dot" id="dot${i}"></div>`		
	}
	select_slide(0, selected_slide_index)
	selected_slide_index = 0
}

initialisation()










