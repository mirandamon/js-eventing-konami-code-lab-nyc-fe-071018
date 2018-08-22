const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

function onKeyDownHandler(event) {
  const key = parseInt(e.detail || e.which)
  console.log(key)
 if (tracker === code.length) {
    window.alert('You found it!')
    event.preventDefault()
    return
  }
  if (key === code[tracker]) {
    tracker++ 
    if (tracker === code.length) {
      window.alert('You found it!')
    }
  } else {
    console.log('youve messed up!!!!!')
    tracker = 0
  }
}

function init() {
  // tracker keeps track of where we are in the array
  
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler)
}

init()