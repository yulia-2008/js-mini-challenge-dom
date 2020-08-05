/***** Deliverable 1 *****/
const  header = document.querySelector("#header");
console.log(header)


/***** Deliverable 2 *****/


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)



let div = document.querySelector(".player-container")
div.className = "player"

for (let i=0; i < PLAYERS.length; i++ )

{let h = document.createElement('h3')
let img = document.createElement('img')
div.appendChild(h)
div.appendChild(img)
h.innerHTML =  `${PLAYERS[i]["name"]} (<em>${PLAYERS[i]["nickname"]}</em>)`
img.src = `${PLAYERS[i]["photo"]}`
img.alt = `${PLAYERS[i]["name"]}` }


/***** Deliverable 4 *****/
let player = document.getElementsByTagName('h3') 
for (let i=0; i < player.length; i++)
{if (player[i].textContent = "Raheem Sterling") {player[i].remove()}}


