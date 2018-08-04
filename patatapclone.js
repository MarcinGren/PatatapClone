var listOfCircles = []

var sound = new Howl({
	src: ['sounds/bubbles.mp3', 'sounds/bubbles.ogg']
})

function onKeyDown(e) {
	console.log(e.key)

	var maxPoint = new Point(view.size.width, view.size.height)
	var randomPlace = Point.random()
	var newPoint = maxPoint * randomPlace
	var newCircle = new Path.Circle(newPoint, 100)
	newCircle.fillColor = 'pink'
	listOfCircles.push(newCircle)

	sound.play()

}

function onFrame(e) {
	listOfCircles.forEach(function (elem) {
		elem.fillColor.hue += 1
		elem.scale(.95)
	})
}
