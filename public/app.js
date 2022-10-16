let temp = document.querySelector('.navigation')
console.log(temp)

function onHover() {
	console.log('on')
	let imageChange = document.querySelector('#image-here')
	imageChange.setAttribute('src', './media/contact_twirl.png')
}

function offHover() {
	console.log('off')
	let imageChange = document.querySelector('#image-here')
	imageChange.setAttribute('src', './media/contact.png')
}

function mouseOver(cata) {
	cata.style.color = 'rgb(70, 155, 158)'
}

function mouseLeave(cata) {
	cata.style.color = 'darkgrey'
}

let nav = document.querySelectorAll('.text__media')
console.log(nav)

for (let i = 0; i < nav.length; i++) {
	nav[i].addEventListener('click', colorChange)
}

function colorChange() {
	console.log('lallalll')
}

let img
var song1
var song2
var slider
let c
let reverb
let delay

const closestArea = (...args) => {
	if (args.length > 0) {
		let biggest = args[0]
		for (let i = 0; i < args.length; i++) {
			if (args[i] > biggest) {
				biggest = args[i]
			}
		}
		return biggest
	}
}

let playButton = document.getElementById('beginMusicButton')
console.log(playButton)
playButton.addEventListener('click', playMusic)

// let img;
function preload() {
	song1 = loadSound('./mp3/phalf.mp3')
	console.log(song1)
}

function setup() {
	const myCanvas = createCanvas(900, 600)
	myCanvas.parent('canvas-container')

	img = loadImage('./media/world_map2.png')
	// slider = createSlider(0, 1, 0.7, 0.01)
	// song1.loop()

	reverb = new p5.Reverb()
	reverb.process(song1, 3, 2)

	// delay = new p5.Delay();
	// delay.process(song1, 0.12, 0.7, 2300);
	// c = color(255, 0, 0)
	let temp = closestArea(25, 139, 29, 145)
	console.log(temp)
}

function draw() {
	// background()
	imageMode(CENTER)
	image(img, width / 2, height / 2, 900, 600)
	// ellipses are for locating the locations
	// ellipse(660, 285, 20)
	// ellipse(435, 245, 10)
	// ellipse(200, 280,20)
	// fill(c)

	let chinaVal = map(dist(mouseX, mouseY, 660, 285), 0, width / 8, 1, 0)
	let franceVal = map(dist(mouseX, mouseY, 435, 245), 0, width / 8, 1, 0)
	let usaVal = map(dist(mouseX, mouseY, 200, 280), 0, width / 8, 1, 0)
	let dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1)
	// let delay = constrain(map(mouseX, 0, width, 0,1),0,1);

	let mappedVal = closestArea(chinaVal, franceVal, usaVal)

	if (mappedVal <= 0) {
		mappedVal = 0
	}

	song1.setVolume(mappedVal)
}

function playMusic() {
	// button.remove()
	playButton.style.display = 'none'
	console.log(song1)
	getAudioContext().resume()
	song1.loop()
}



// function mouseClicked() {
// 	if (song1.playing == false) {
// 		userStartAudio()
// 		song1.loop()
// 	}

// 	console.log('hi')
// }
// function touchStarted() {
// 	getAudioContext().resume()
// }
