
export function MyScrollReveal(){

//Text Animation
$(document).ready(function () {
	ScrollReveal().reveal('.landing-wrapper',
{
	distance:"0%",
	opacity:1,
	reset: true,
	beforeReveal: function (el) {
	

	}
}
);

	
});

//Scroll Reveal

//class_base
ScrollReveal().reveal('.apply-btn',
{
	delay:750,
	distance: '150%',
    origin: 'bottom',
}
);

ScrollReveal().reveal('.reavel-bottom',
{
	distance: '150%',
    origin: 'bottom',
}
);

ScrollReveal().reveal('.revel-fade',
{
	opecity:.1,
	duration: 2000,
}
);

ScrollReveal().reveal('.revel-right',{
	distance: '150%',
    origin: 'right',
	duration: 1500 
}

)
ScrollReveal().reveal('.revel-left',{
	distance: '150%',
    origin: 'left',
	duration: 1500 
}

)
ScrollReveal().reveal('.revel-up',{
	distance: '150%',
    origin: 'top',
	duration: 1000 
}

)
//component_base
ScrollReveal().reveal('.student_program',{
	// distance: '100%',
	// origin: 'bottom',
	afterReveal:function (ev){
		console.log(ev)
		$(".student_program.title").textillate({
			initialDelay: 100,
			in: {
				effect: "bounceIn",
				delay: "5",
				speed: "1000",
				sync: false,
				shuffle: false,
				reverse: false,
	
			},
		});
	}
})
ScrollReveal().reveal('.it-card',{
	distance: '150%',
	origin: 'right',
	
})
ScrollReveal().reveal("#canvas")

// width_speciphic revel
if(window.outerWidth > 767){
console.log()
}else{

}

setInterval(()=>{
	$(".header1").textillate({
		initialDelay: 0,
		in: {
			effect: "fadeInRight",

			delay: "10",
			speed: "1000",
		},
	});
})
}



