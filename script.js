const start = document.getElementById('start')
const stop = document.getElementById('stop')

const randomColor = function(){
  let hex = '0123456789ABCDEF'
  let color = '#'
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
}


let intervalID;

start.addEventListener('click', function(){
  intervalID = setInterval(function(){
    document.body.style.backgroundColor = randomColor()
  }, 1000)
})

stop.addEventListener('click', function(){
  clearInterval(intervalID)
})