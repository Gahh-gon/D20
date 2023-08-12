class dataStructures{
    numberData = []
    nameData = ''
    
    randomNumber(){
       let dataResult  = this.numberData[Math.floor(Math.random() * this.numberData.length)]
        return dataResult
    }
}
class dataD20 extends dataStructures {
constructor(){
    super()
    this.numberData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    this.nameData = 'D20'
}
}

const btnPlay = document.querySelector('#btnPlay')
const title1 = document.querySelector('#title')
const img = document.querySelector('img')
title1.innerHTML = new dataD20().nameData

btnPlay.addEventListener('click',()=>{
let data = new dataD20
 let randomNumber  =  data.randomNumber()
 title1.textContent = randomNumber
    img.src = 'assets/icosaedro-1--unscreen.gif'
    setInterval(()=>{img.src = './assets/d20.svg'},1000) 
     
})


// let data = new dataD20


// console.log(data.randomNumber())

// let d20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let aleat =d20[Math.floor(Math.random() * d20.length)]
// console.log(aleat)