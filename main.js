const arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector(".button")
const $chat = document.querySelector('.chat')

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

function changeHp(player1,player2){
  const $playerLife = document.querySelectorAll('.life')
  player1.hp -= randomDamage(player1)
  player2.hp -= randomDamage(player2)
 if (player1.hp === 0 && player2.hp === 0){
  arenas.appendChild(playerWin(true))
      } else if (player2.hp <= 0){
        player2.hp = 0
        arenas.appendChild(playerWin(player1.name))
      } else if (player1.hp <= 0){
        player1.hp = 0
        arenas.appendChild(playerWin(player2.name))
      }
$playerLife[0].style.width = player1.hp + "%";
$playerLife[1].style.width = player2.hp + "%";
}

function randomDamage(name){
  hit = Math.ceil(Math.random() * 20);
damage(name,hit)
  return hit
}

function damage(name,hit){
  let $hit = createElement('p','hit')
  $hit.innerText = `Игрок ${name.name} получил ${hit} урон, у него осталось ${name.hp - hit }` 
  $chat.appendChild($hit)
}

function playerWin(name){
  const $loseTitle = createElement('div', 'loseTitle')
  if(name == true){
    $loseTitle.innerText = 'Games in a draw'
  } else{
    $loseTitle.innerText = name + " wins"
  }
  $randomButton.disabled = true
  return $loseTitle
}

$randomButton.addEventListener("click", function(){
 changeHp(scorpion,sonya)
})

arenas.appendChild(createPlayer('player1', scorpion))
arenas.appendChild(createPlayer('player2', sonya))

