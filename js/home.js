const makeName = () => {
  const choices = ["a", "o", "i", "ava", "u"]
  const rand = new Array(3).fill('').map(() => {
    return choices[Math.floor(Math.random() * choices.length)]
  })
  return `J${rand[0]}l${rand[1]}d${rand[2]}`
}
const generatedEl = document.querySelector('.generated')
const makeContent = () => {
  generatedEl.innerText = makeName()
}
makeContent()
setInterval(makeContent, 5000)

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