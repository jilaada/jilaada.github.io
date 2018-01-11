// This function will make the randomly generated name
const makeName = () => {
  const choices = ["a", "o", "i", "ava", "u"]
  // In a new array fille with blank and then map to a random value
  const rand = new Array(3).fill('').map(() => {
    return choices[Math.floor(Math.random() * choices.length)]
  })
  return `J${rand[0]}l${rand[1]}d${rand[2]}`
}

// Define the choices 
const helloChoices = ["Hi", "你好"]
let counter = 0

const cycleHello = () => {
  if (counter < helloChoices.length -1) {
    counter++
  } else {
    counter = 0
  }
  return counter
}

const generatedEl = document.querySelector('.generated')

const makeContent = () => {
  generatedEl.innerText = helloChoices[cycleHello()]+", I'm Jilada"
}

makeContent()
setInterval(makeContent, 2000)

class Jilada {
  constructor(props) {
    console.log(props)
    console.log('whatever')
  }
  dog() {
    return 'are you dog?'
  }
}
let jono = new Jilada('some props')
console.log(jono.dog())