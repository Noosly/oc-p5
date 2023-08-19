function action_fleche_gauche(){
	if(selected_slide_index != 0){
		nouveau_selected_slide_index = selected_slide_index -1		
	}
	else{
		nouveau_selected_slide_index = slides.length - 1
	}	
	select_slide(nouveau_selected_slide_index, selected_slide_index)
	changer_banner_img('./assets/images/slideshow/'+ slides[nouveau_selected_slide_index].image)
	changer_banner_txt(slides[nouveau_selected_slide_index].tagLine)
	selected_slide_index = nouveau_selected_slide_index
}

function action_fleche_droite(){
	if(selected_slide_index != slides.length - 1){
		nouveau_selected_slide_index = selected_slide_index + 1
	}
	else{
		nouveau_selected_slide_index = 0
	}	
	select_slide(nouveau_selected_slide_index, selected_slide_index)
	changer_banner_img('./assets/images/slideshow/'+ slides[nouveau_selected_slide_index].image)
	changer_banner_txt(slides[nouveau_selected_slide_index].tagLine)
	selected_slide_index = nouveau_selected_slide_index
}

function select_slide(nouveau_index, ancien_index){
	let ancien_dot =  document.querySelector("#dot" + ancien_index)
	let nouveau_dot = document.querySelector("#dot" + nouveau_index)
	nouveau_dot.classList.add("dot_selected")
	if(nouveau_index != ancien_index){	//cas de l'initialisation	
		ancien_dot.classList.remove("dot_selected")
	}
}

function changer_banner_img(image_src){
	let img = document.querySelector(".banner-img")
	img.setAttribute('src', image_src)
}

function changer_banner_txt(tagLine){
	let p = document.querySelector(".banner-txt")
	p.innerHTML = tagLine 
}



function initialisation(){
	let dots_div = document.querySelector(".dots")
	for(let i = 0; i < slides.length; i++){
		dots_div.innerHTML += `<div class="dot" id="dot${i}"></div>`		
	}
	let dot0_div = document.querySelector("#dot0")
	dot0_div.classList.add("dot_selected")
}


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
let fleche_gauche = document.querySelector(".arrow_left")
fleche_gauche.addEventListener('click', action_fleche_gauche)
let fleche_droite = document.querySelector(".arrow_right")
fleche_droite.addEventListener('click', action_fleche_droite)
initialisation()










