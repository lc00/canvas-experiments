let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

const pauseTime = 0
function pause() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, pauseTime)
    })
  }

class Circle {
    constructor(x,y,dx,dy,radius,color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.color = color
    }
    
    draw() {

        document.addEventListener('mousemove', (e) => { 
            this.x = e.x + this.dx
            this.y = e.y + this.dy
        })

        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.strokeStyle = 'blue'

        c.strokeStyle = 'black'
        c.fillStyle = this.color
        c.fill()
        c.stroke()
        // console.log('draw...')
    }
    update() {
 

    }
}

let arr = []
let offSetDir = null
for(let i = 0; i < 100; i++ ) {
    let x = 0
    let y = 0

    offSetDir = Math.round(Math.random()*1000 % 2) === 0 ? 1 : -1
    let dx = offSetDir * Math.random() * 100

    offSetDir = Math.round(Math.random()*1000 % 2) === 0 ? 1 : -1
    let dy = offSetDir * Math.random() * 100

    let radius = Math.random() * 50

    // let color = getRandomColor()
    let color = getRandomShadesOfGreyColor()
    arr.push(new Circle(x, y, dx, dy, radius, color))
}

animate()

/* The window.requestAnimationFrame() method tells
    the browser that you wish to perform an animation 
    and requests that the browser call a specified 
    function to update an animation before the next repaint. 
    The method takes a callback as an argument to be invoked 
    before the repaint.
    You should call this method whenever you're ready to update
    your animation onscreen. This will request that your animation 
    function be called before the browser performs the next repaint. 
    The number of callbacks is usually 60 times per second, 
    but will generally match the display refresh rate in most web 
    browsers as per W3C recommendation. requestAnimationFrame() 
    calls are paused in most browsers when running in background tabs 
    or hidden <iframe>s in order to improve performance and 
    battery life.
*/
function animate() { 
    c.clearRect(0, 0, innerWidth, innerHeight)
    requestAnimationFrame(animate)

    for(let i=0; i<arr.length; i++) {
        console.log('circle', i, arr[i])
        arr[i].draw() 
    }

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getRandomShadesOfGreyColor() {
var letters = '123';
var color = '#';
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 3)];
}
return color;
}
