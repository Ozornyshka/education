const arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector(".button")

function Player(player,name,hp,img,weapon){
  this.player = player
  this.name = name;
  this.hp = hp;
  this.img = img;
  this.weapon = weapon;
}

let scorpion = new Player('1', 'Scorpion',100,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',['knife','sword'])
let kitana = new Player('Kitana',100,'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',['knife','sword'])
let liukang = new Player('Liukang',100,'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',['knife','sword'])
let sonya = new Player('2', 'Sonya',100,'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',['knife','sword'])
let subzero = new Player('Subzero',100,'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',['knife','sword'])


function createElement(tag,className){
  const $tag = document.createElement(tag)
if(className){
  $tag.classList.add(className)
}
  return $tag
}

function createPlayer(player,obj){
let playerdiv = createElement('div', player )
let progressbar = createElement('div', `progressbar` )
let lifeHp = createElement('div', `life` )
let playerName = createElement('div', `name` )
let character = createElement("div",'character')
let img = createElement('img')
img.src = `${obj.img}`

lifeHp.style.width = `${obj.hp}`+'%'
playerName.innerText = `${obj.name}`

playerdiv.appendChild(progressbar)
playerdiv.appendChild(character)
progressbar.appendChild(lifeHp)
progressbar.appendChild(playerName)
character.appendChild(img)

return playerdiv
}

function randomDamage(){
  return Math.ceil(Math.random() * 20);
}

function changeHp(player){
  const $playerLife = document.querySelectorAll('.life')
  player[0].hp -= randomDamage()
  player[1].hp -= randomDamage()

  for (let i = 0; i < player.length; i++) {
    if (player[i].hp <= 0 ){
        player[i].hp = 0
      } else if (player[i].hp > 0){
        arenas.appendChild(playerWin(player[i].name))
      }
      console.log(player[i].hp);
      $playerLife[i].style.width = player[i].hp + "%";
  }
}

function playerWin(name){
  const $loseTitle = createElement('div', 'loseTitle')
  $loseTitle.innerText = name + "wins"

  return $loseTitle
}

$randomButton.addEventListener("click", function(){
 changeHp([scorpion,sonya])
})

arenas.appendChild(createPlayer('player1', scorpion))
arenas.appendChild(createPlayer('player2', sonya))

