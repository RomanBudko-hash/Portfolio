const allOfNavBtns = document.querySelectorAll('.header__item') // <- определение основных конастант и переменных
const playBtn = document.querySelector('.main__play')
const logoBird = document.querySelector('.header__logo')
let isPlay = false
const recordLastBirdType = ['forest']
const audio = new Audio()

allOfNavBtns.forEach((el) => el.addEventListener('click', makeActive)) // <- события
allOfNavBtns.forEach((el) => el.addEventListener('click', changeImage))
allOfNavBtns.forEach((el) => el.addEventListener('click', playSound))
logoBird.addEventListener('click', makeActive)
logoBird.addEventListener('click', changeImage)
logoBird.addEventListener('click', playSound)
playBtn.addEventListener('click', pausePlay)

function makeActive(element){ //                <- функции
  allOfNavBtns.forEach((el) => el.classList.remove('header__nav_active'))
  element.target.classList.add('header__nav_active')
}

function changeImage(element){
  const birdType = element.target.getAttribute('data-bird')
  if(element.target.classList.contains('header__item') || element.target.classList.contains('header__logo')){
  document.getElementsByTagName('main')[0].style.backgroundImage = `url(./assets/img/${birdType}.jpg)`
  recordLastBirdType[0] = (birdType)
}}

function showPlayPause() {
  isPlay? playBtn.classList.add('main__pause') : playBtn.classList.remove('main__pause')
}

function playSound(element){
  audio.src = `./assets/audio/${recordLastBirdType[0]}.mp3`
  audio.currentTime = 0
  audio.play()
  isPlay = true
  showPlayPause()
}

function pausePlay(){
  switch(isPlay){
  case true:
    audio.pause()
    isPlay = false
  break;
  case false:
    playSound()
  break;
  }
  showPlayPause()
}
