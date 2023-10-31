
  export function network(){
	console.log("networlk function is run")
	function imagesToRoundedImages(srcArray, callback) {
		console.log("rounded funtion entered")
		console.log("image src arr: ",srcArray)
		const roundedImages = [];
		let imagesLoaded = 0;
	  
		// Define a function to process each image
		function processImage(src, index) {
		  const img = new Image();
		  img.src = src;
	  
		  img.onload = () => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
	  
			canvas.width = img.width;
			canvas.height = img.width;
	  
			ctx.beginPath();
			ctx.arc( Math.min(img.width, img.height) / 2, Math.min(img.width, img.height) / 2, Math.min(img.width, img.height) / 2, 0, Math.PI * 2);
			ctx.closePath();
			ctx.clip();
	  
			ctx.drawImage(img, 0, 0, img.width, img.height);
	  
			const roundedImageDataURL = canvas.toDataURL('roundedimages');
			roundedImages[index] = roundedImageDataURL;
	  
			imagesLoaded++;
	  
			if (imagesLoaded === srcArray.length) {
			  callback(roundedImages);
			  console.log(roundedImages)
			}
		  };
		}
	  
		// Process each image in the array
		srcArray.forEach((src, index) => {
		  processImage(src, index);
		});
	  }
	  
	  // Example usage:
	  const imageContainer = document.getElementById("demo-basic")
	  const imageSources = ['../img/design8.2e384a27.jpg','../img/design7.051d0492.jpg','../img/Design1.93988ceb.jpg','../img/design2.95a75a2b.jpg'];
	  imagesToRoundedImages(imageSources, (roundedImages) => {
		// roundedImages is an array of rounded image data URLs in PNG format
		console.log(roundedImages);
		let ImageArray = []
		
		roundedImages.forEach(image => {
			let Imageobject = 
				{
					replace_color: true,
					src: image,
				}
			ImageArray.push(Imageobject)
		
		});
		tsParticles
		.load("canvas", {
			fpsLimit: 90,
			interactivity: {
				detectsOn: "canvas",
				events: {
					resize: true,
					onclick: { enable: true, mode: "attract" },
					onhover: {
						enable: true,
						mode: "bubble",
						parallax: {
							enable: false,
							force: 2,
							smooth: 10,
						},
					},
					onDiv: {
						selectors: "#repulse-div",
						enable: false,
						mode: "repulse",
						type: "circle",
					},
				},
				modes: {
					trail: {
						delay: 1,
						pauseOnStop: false,
						quantity: 1,
					},
					attract: {
						distance: 200,
						duration: 0.4,
						easing: "ease-out-quad",
						factor: 1,
						maxSpeed: 50,
						speed: 1,
					},
					bounce: {
						distance: 200,
					},
					bubble: {
						distance: 40,
						duration: 2,
						mix: false,
						opacity: 8,
						size: 16,
						divs: {
							distance: 200,
							duration: 0.4,
							mix: false,
							selectors: {},
						},
					},
					connect: {
						distance: 80,
						links: {
							opacity: 0.5,
						},
						radius: 60,
					},
					grab: {
						distance: 400,
						links: {
							blink: false,
							consent: false,
							opacity: 1,
						},
					},
					push: {
						default: true,
						groups: {},
						quantity: 4,
					},
					remove: {
						quantity: 2,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
						factor: 100,
						speed: 1,
						maxSpeed: 50,
						easing: "ease-out-quad",
						divs: {
							distance: 200,
							duration: 0.4,
							factor: 100,
							speed: 1,
							maxSpeed: 50,
							easing: "ease-out-quad",
							selectors: {},
						},
					},
					slow: {
						factor: 1,
						radius: 0,
					},
					light: {
						area: {
							gradient: {
								start: {
									value: "#ffffff",
								},
								stop: {
									value: "#000000",
								},
							},
							radius: 1000,
						},
						shadow: {
							color: {
								value: "#000000",
							},
							length: 2000,
						},
					},
				},
			},
	
			particles: {
				color: { value: "#2ec4c7" },
				links: {
					color: "#2ed5da",
					distance: 100,
					enable: true,
					opacity: 1,
					width: 1,
				},
				number: { value: 40 },
				move: {
					enable: true,
					speed: 0.2,
				},
				opacity: {
					value: 1,
					random: true,
				},
				shape: {
					character: {
						fill: false,
						font: "Verdana",
						style: "10px",
						value: ["hello", "love you"],
						weight: "3",
					},
					image: ImageArray,
					// polygon: { nb_sides: 3 },
					// polygon: {
					// 	draw: { enable: true, lineColor: "#4b80c2", lineWidth: 0.5 },
					// 	move: { radius: 10 },
					// 	scale: 1,
					// 	type: "none",
					// 	url: "",
					// },
					type: ["circle", "image"],
				},
				stroke: { color: "#21a7e0", width: 1 },
				size: {
					value: 20,
					random: true,
				},
			},
			retina_detect: true,
		})
		.then((container) => {
			tsParticles.setOnClickHandler((e, particles) => {
				for (const p of particles) {
					// let preVelocityHorizontal = p.velocity.horizontal
					// let preVelocityVertical = p.velocity.vertical
					// let preSize = p.size.value
					// let preOpacity = p.size.value
					// console.log(p)
					// p.size.value = 100
					// p.opacity.value = 1
					// p.velocity.horizontal = 0
					// p.velocity.vertical = 0
					// setTimeout(() => {
					// 	p.size.value = preSize
					// 	p.opacity.value = preOpacity
					// 	p.velocity.horizontal = preVelocityHorizontal
					// 	p.velocity.vertical = preVelocityVertical
					// }, 1000);
				}
			});
		});
	  
		// You can display the rounded images or save them as needed.
	  });
	  
  }