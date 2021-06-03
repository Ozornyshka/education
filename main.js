function Player(name,hp,img,weapon){
  this.name = name;
  this.hp = hp;
  this.img = img;
  this.weapon = weapon;
}

let scorpion = new Player('Scorpion',100,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',['knife','sword'])
let kitana = new Player('Kitana',100,'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',['knife','sword'])
let liukang = new Player('Liukang',100,'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',['knife','sword'])
let sonya = new Player('Sonya',100,'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',['knife','sword'])
let subzero = new Player('Subzero',100,'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',['knife','sword'])


function createPlayer(player,obj){
let playerdiv = document.createElement("div")
playerdiv.className = `${player}`

 
let progressbar = document.createElement("div")
progressbar.className = 'progressbar'

let lifeHp = document.createElement("div")
lifeHp.className = `life`
lifeHp.style.width = `${obj.hp}`+'%'

let playerName = document.createElement("div")
playerName.className = `name`
playerName.innerText = `${obj.name}`

let character = document.createElement("div")
character.className = 'character'

let img = document.createElement('img')
img.src = `${obj.img}`


let arenas = document.querySelector('.arenas')
arenas.appendChild(playerdiv)
playerdiv.appendChild(progressbar)
playerdiv.appendChild(character)
progressbar.appendChild(lifeHp)
progressbar.appendChild(playerName)
character.appendChild(img)

}

createPlayer('player1', scorpion);

createPlayer('player2', sonya);
