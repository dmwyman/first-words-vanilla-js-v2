// TODO: conditionals if cardCount goes below 0 or above 14, don't let it run.
// Variables
const cardContainer = document.querySelector('.card-container')
const cardWord = document.querySelector('.card-word')
const cardPosition = document.querySelector('.card-position')
const cardImgContainer = document.querySelector('.card-img-container')
const cardImage = document.querySelector('.card-img')
const leftBtn = document.querySelector('#left-btn')
const rightBtn = document.querySelector('#right-btn')

// **************************
// Card Class Constructor & Objects
class Card {
  constructor(word, src, alt, position) {
    this.word = word
    this.src = src
    this.alt = alt
    this.position = position
  }
}

const card_dog = new Card('Dog', 'imgs/img-001_dog.avif', 'image of dog', 1)
const card_car = new Card('Car', 'imgs/img-002_car.avif', 'image of car', 2)
const card_cow = new Card('Cow', 'imgs/img-003_cow.jpg', 'image of cow', 3)
const card_banana = new Card(
  'Banana',
  'imgs/img-004_banana.avif',
  'image of banana',
  4
)
const card_apple = new Card(
  'Apple',
  'imgs/img-005_apple.avif',
  'image of apple',
  5
)
const card_table = new Card(
  'Table',
  'imgs/img-006_table.avif',
  'image of table',
  6
)
const card_window = new Card(
  'Window',
  'imgs/img-007_window.avif',
  'image of window',
  7
)
const card_clock = new Card(
  'Clock',
  'imgs/img-008_clock.avif',
  'image of clock',
  8
)
const card_ball = new Card('Ball', 'imgs/img-009_ball.avif', 'image of ball', 9)
const card_book = new Card(
  'Book',
  'imgs/img-010_book.jpeg',
  'image of book',
  10
)
const card_train = new Card(
  'Train',
  'imgs/img-011_train.avif',
  'image of train',
  11
)
const card_plane = new Card(
  'Plane',
  'imgs/img-012_plane.avif',
  'image of airplane',
  12
)
const card_ear = new Card('Ear', 'imgs/img-013_ear.avif', 'image of ear', 13)
const card_nose = new Card(
  'Nose',
  'imgs/img-014_nose.avif',
  'image of nose',
  14
)
const card_mouth = new Card(
  'Mouth',
  'imgs/img-015_mouth.avif',
  'image of mouth',
  15
)
// *******************
// All Cards Array
const cardStack = [
  card_dog,
  card_car,
  card_cow,
  card_banana,
  card_apple,
  card_table,
  card_window,
  card_clock,
  card_ball,
  card_book,
  card_train,
  card_plane,
  card_ear,
  card_nose,
  card_mouth,
]
// *******************
// Card Display
// *******************
let currentCardCount = 0
const displayCard = (stackIndex) => {
  stackIndex = currentCardCount
  cardWord.textContent = cardStack[stackIndex].word
  cardPosition.textContent = cardStack[stackIndex].position
  cardImage.setAttribute('src', cardStack[stackIndex].src)
  cardImage.setAttribute('alt', cardStack[stackIndex].alt)
}
displayCard()

// *******************
// ***** BUTTONS *****
// *******************
const subtractFromCardCount = () => {
  currentCardCount--
}

const addToCardCount = () => {
  currentCardCount++
}

leftBtn.addEventListener('click', () => {
  subtractFromCardCount()

  displayCard()
})
rightBtn.addEventListener('click', () => {
  addToCardCount()

  displayCard()
})
