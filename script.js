
/*
SLAY THE DRAGON

Text adventure game

Inspired by the Wizard duel game and some internet tutorials/games

This game is about a player who needs to kill the dragon. The player starts with start-player-stats. He can improve those with gold. Gold can be earned by slaying enemies. 

It is a game about making decisions, how the money will be spent.

A simple and easy Text-RPG i would say.
Enjoy playing!

cheat-hint: with 120health and 65dmg you are able to slay the dragon
*/




// declare global variables for the game
let playerHealth;
let playerGold;
let weaponDmg;
let enemyHealth;
let enemyDmg;
let bountyOrc;
let bountyGoblin;
let playerMaxHealth;
let keyOfDestiny;
let upgradeCost;
let orcDmg;
let playerName;


// variables for the HTML Text elements
let playerStatsDiv = document.querySelector('#player-stats')
let playerNameTag = document.querySelector('#playerName')
let playerGoldTag = document.querySelector('#playerGold')
let playerHealthTag = document.querySelector('#playerHealth')
let playerMaxHealthTag = document.querySelector('#playerMaxHealth')
let weaponDmgTag = document.querySelector('#weaponDmg')
let keyTag = document.querySelector('#keyOfDestiny')
let placeTextTag = document.querySelector('#placeText')
let descriptionTextTag = document.querySelector('#descriptionText')
let actionTextTagOptions = document.querySelector('#actionTextOptions')
let actionTextTagOption = document.querySelector('#actionTextOption')
let actionTextTagValues = document.querySelector('#actionTextValues')
let actionTextTagValue = document.querySelector('#actionTextValue')
let actionTextTagDescs = document.querySelector('#actionTextDescs')
let actionTextTagDesc = document.querySelector('#actionTextDesc')
let actionTextUl = document.querySelector('#actionTextUl')


// button variables
let startGameButton = document.querySelector('#buttonStartGame')
let restartGameButton = document.querySelector('#buttonRestartGame')
let visitTownButton = document.querySelector('#buttonVisitTown')
let visitSmithButton = document.querySelector('#buttonVisitSmith')
let visitInnButton = document.querySelector('#buttonVisitInn')
let visitQuestButton = document.querySelector('#buttonVisitQuest')
let visitGoblinButton = document.querySelector('#buttonVisitGoblin')
let visitDragonButton = document.querySelector('#buttonVisitDragon')
let visitOrcButton = document.querySelector('#buttonVisitOrc')
let takeRestButton = document.querySelector('#buttonTakeRest')
let upgradeWeaponButton = document.querySelector('#buttonUpgradeWeapon')
let attackButton = document.querySelector('#buttonAttack')
let increaseHealthButton = document.querySelector('#buttonIncreaseHealth')


// setting up description texts
const innMessage = "Here you can take a rest or increase your max Health. Resting isn't for free like everything in the world!"
const smithMessage = "Here you can upgrade your weapon to slay stronger enemies!"
const questMessage = "Here you can fight different enemies."
const goblinMessage = "Be aware! Goblins are pretty sneaky!"
const orcMessage = "Orcs are stronger than you think!"
const dragonMessage = "Are you strong enough to slay the the dragon?"

//set player stat variables and html tags to new game view -> will also be excecuted when restarting the game
setUpGame()

function setUpGame(){

//set player stat variables and start message

playerStatsDiv.style.display ='none'
hideAllButtons()
startGameButton.style.display = 'inline-block'
playerHealth = 30;
playerGold = 0;
weaponDmg = 5;
enemyHealth;
enemyDmg;
bountyOrc = 50;
bountyGoblin = 21;
playerMaxHealth = 30;
keyOfDestiny = false;
upgradeCost = 15;
orcDmg = 15;
playerName = prompt('Enter your player name')
const startMessage = `Hello <span class="name">${playerName}</span>! Welcome to the game "Slay the Dragon"! You need to slay the dragon to win the game. Make sure you are strong enough to slay it. Maybe you should kill some weaker enemies first! <p>The door to the dragon is locked. You need to find the <span class="key">KEY OF DESTINY</span> to unlock it. Good Luck!`


// setting up welcome text, stats and buttons

playerNameTag.innerHTML = playerName;
playerGoldTag.innerHTML = playerGold;
playerHealthTag.innerHTML = playerHealth
playerMaxHealthTag.innerHTML= playerMaxHealth
weaponDmgTag.innerHTML = weaponDmg;
keyTag.innerHTML = "no"
placeTextTag.innerHTML = "Welcome adventurer!";
descriptionTextTag.innerHTML = startMessage;

}


//setting up the HTML with stats and buttons

function startGame(){
    playerStatsDiv.style.display ='flex'
    playerGoldTag.innerHTML = playerGold;
    playerHealthTag.innerHTML = playerHealth;
    playerMaxHealthTag.innerHTML = playerMaxHealth;
    weaponDmgTag.innerHTML = weaponDmg;
    placeTextTag.innerHTML = "Town Square"
    const townMessage = `Hi <span class="name">${playerName}</span>! On the town square you can visit different buildings which help you to improve your character. When you feel strong enough you can go on a quest to kill enemies.`
    descriptionTextTag.innerHTML = townMessage
    hideAllButtons()
    visitInnButton.style.display = 'inline-block'
    visitSmithButton.style.display = 'inline-block'
    visitQuestButton.style.display = 'inline-block'
    restartGameButton.style.display = 'inline-block'

    keyOfDestiny= false
    keyTag.innerHTML ="no"

}


/*
Visit different locations by pressing buttons

 For each location all buttons will be hidden first and then all nessecary buttons will be displayed.
the HTML text elements text will be set. 

With the enemy buttons, the enemy-variables will be set and their stats will be displayed on the HTML.
*/

function visitPlace(place) {




    if (place === 'visitTown') {
        placeTextTag.innerHTML = "Town Square"
        const townMessage = `Hi <span class="name">${playerName}</span>! On the town square you can visit different buildings which help you to improve your character. When you feel strong enough you can go on a quest to kill enemies.`
        descriptionTextTag.innerHTML = townMessage
        hideAllButtons()
        visitInnButton.style.display = 'inline-block'
        visitSmithButton.style.display = 'inline-block'
        visitQuestButton.style.display = 'inline-block'
        restartGameButton.style.display = 'inline-block'


    } else if (place === 'visitInn') {
        placeTextTag.innerHTML = "Inn";
        descriptionTextTag.innerHTML = innMessage
        hideAllButtons()
        visitTownButton.style.display = 'inline-block'
        takeRestButton.style.display = 'inline-block'
        increaseHealthButton.style.display = 'inline-block'
        actionTextUl.style.display = 'flex'
        actionTextTagOptions.innerHTML = `Options`
        actionTextTagOption.innerHTML = `<p>Take Rest</p><p>Increase Health</p>`
        actionTextTagValues.innerHTML = `Costs`
        actionTextTagValue.innerHTML = `<p><span class="gold">10</span></p><p><span class="gold">20</span></p>`
        actionTextTagDescs.innerHTML = `Description`
        actionTextTagDesc.innerHTML = `<p>Heals your character to full life!</p><p>Increases your Health by 5</p>`


    } else if (place === 'visitSmith') {
        placeTextTag.innerHTML = "Smith";
        descriptionTextTag.innerHTML = smithMessage
        hideAllButtons()
        visitTownButton.style.display = 'inline-block'
        upgradeWeaponButton.style.display = 'inline-block'
        actionTextUl.style.display = 'flex'
        actionTextTagOptions.innerHTML = `Options`
        actionTextTagOption.innerHTML = `<p>Upgrade Weapon</p>`
        actionTextTagValues.innerHTML = `Costs`
        actionTextTagValue.innerHTML = `<p><span class="gold">${upgradeCost}</span></p>`
        actionTextTagDescs.innerHTML = `Description`
        actionTextTagDesc.innerHTML = `<p>Increases your Weapon Damage and the Upgrade Costs by 5</p>`


    } else if (place === 'visitQuest') {
        placeTextTag.innerHTML = "Quest";
        descriptionTextTag.innerHTML = questMessage
        hideAllButtons()
        visitTownButton.style.display = 'inline-block'
        visitGoblinButton.style.display = 'inline-block'
        visitOrcButton.style.display = 'inline-block'
        visitDragonButton.style.display = 'inline-block'

    } else if (place === 'visitGoblin') {

        placeTextTag.innerHTML = "Goblin";
        descriptionTextTag.innerHTML = goblinMessage
        enemyHealth = 20
        enemyDmg = 4
        actionTextTagEnemySet()
        actionTextTagValue.innerHTML = `<p><span class="health">${enemyHealth}</span></p><p><span class="damage">${enemyDmg}</span></p><p><span class="gold">${bountyGoblin}</span></p>`
        hideAllButtons()
        actionTextTagDesc.innerHTML ="Goblins don't have any special abilities. However their bounty decreases with each kill. You can't grind them forever my friend. 😉"
        actionTextUl.style.display = 'flex'
        visitQuestButton.style.display = 'inline-block'
        attackButton.style.display = 'inline-block'


    } else if (place === 'visitOrc') {
        placeTextTag.innerHTML = "Orc";
        descriptionTextTag.innerHTML = orcMessage
        enemyHealth = 50
        enemyDmg = 15
        actionTextTagEnemySet()
        actionTextTagValue.innerHTML = `<p><span class="health">${enemyHealth}</span></p><p><span class="damage">${orcDmg}</span></p><p><span class="gold">${bountyOrc}</span></p>`
        hideAllButtons()
        actionTextTagDesc.innerHTML ="Orcs sometimes deal twice their damage. On top of that their Damage increase with each kill. And still they sometimes drop a very rare item."
        actionTextUl.style.display = 'flex'
        visitQuestButton.style.display = 'inline-block'
        attackButton.style.display = 'inline-block'


    } else if (place === 'visitDragon' && keyOfDestiny === true) {
        placeTextTag.innerHTML = "Dragon";
        descriptionTextTag.innerHTML = dragonMessage
        enemyHealth = 100
        enemyDmg = 30
        actionTextTagEnemySet()
        hideAllButtons()
        actionTextTagDesc.innerHTML ="Dragons are very powerful. With each round their damage and health increase depending on their damage. You need to kill it fast!"
        actionTextUl.style.display = 'flex'
        visitQuestButton.style.display = 'inline-block'
        attackButton.style.display = 'inline-block'


    } else if (place === 'visitDragon' && keyOfDestiny === false) {
        descriptionTextTag.innerHTML = "You can't open the door. It is locked. Find something to unlock the door!"
    }


}

/*
On attacking enemies it will be checked which enemy is attacked. Then the health and dmg of player and enemy gets evaluated and shown on the HTML
The player recieves gold by killing enemies -> check if enemy is dead and player is alive.
If the player dies the game is over
*/

function attack() {

    if (placeTextTag.innerHTML === "Goblin") {
        enemyHealth -= weaponDmg
        playerHealth -= enemyDmg
        playerHealthTag.innerHTML = playerHealth;
        descriptionTextTag.innerHTML = `The goblin did <span class="damage">${enemyDmg}</span> Damage.`
        actionTextTagValue.innerHTML = `<p><span class="health">${enemyHealth}</span></p><p><span class="damage">${enemyDmg}</span></p><p><span class="gold">${bountyGoblin}</span></p>`

        if (enemyHealth <= 0 && playerHealth >= 0) {
            placeTextTag.innerHTML = "Victory!"
            descriptionTextTag.innerHTML += `<p>You killed the Goblin and recieved <span class="gold">${bountyGoblin}</span> gold!</p>`
            attackButton.style.display = 'none'
            playerGold += bountyGoblin
            bountyGoblin --
            playerGoldTag.innerHTML = playerGold;
        }

        if (playerHealth <= 0) {
            gameOver()
        }
    }

    if (placeTextTag.innerHTML === "Orc") {
        
        enemyDmg = orcDmg
        bountyOrc = 50

        //10% chance of dealing twice damage
        if(Math.random()<=0.1){
            enemyDmg += enemyDmg
        }
        enemyHealth -= weaponDmg
        playerHealth -= enemyDmg
        playerHealthTag.innerHTML = playerHealth;
        descriptionTextTag.innerHTML = `The orc did <span class="damage">${enemyDmg}</span> Damage.`
        actionTextTagValue.innerHTML = `<p><span class="health">${enemyHealth}</span></p><p><span class="damage">${enemyDmg}</span></p><p><span class="gold">${bountyOrc}</span></p>`

        if (enemyHealth <= 0 && playerHealth >= 0) {
            placeTextTag.innerHTML = "Victory!"
            descriptionTextTag.innerHTML += `<p>You killed the Orc and recieved <span class="gold">${bountyOrc}</span> gold!</p>`

            //10% chance of key being dropped by kill an orc
            if(Math.random()<=0.1){
                keyOfDestiny = true
                keyTag.innerHTML = "yes"
                descriptionTextTag.innerHTML += `<p>You killed the Orc and recieved gold and it dropped the <span class="key">KEY OF DESTINY</span>!</p>`
            }
            attackButton.style.display = 'none'
            playerGold += bountyOrc
            playerGoldTag.innerHTML = playerGold;
            orcDmg++
        }

        if (playerHealth <= 0) {
            gameOver()
        }
    }

    if (placeTextTag.innerHTML === "Dragon") {
        
        enemyHealth -= weaponDmg
        playerHealth -= enemyDmg
        playerHealthTag.innerHTML = playerHealth;

        if (enemyHealth <= 0 && playerHealth >= 0) {
            placeTextTag.innerHTML = "Victory!"
            descriptionTextTag.innerHTML = "You killed the Dragon and finished the game!"
            restartGameButton.style.display = 'inline-block'
            visitQuestButton.style.display = 'none'
            attackButton.style.display = 'none'
            actionTextTagValue.innerHTML = `<p><span class="health">${enemyHealth}</span></p><p><span class="damage">${enemyDmg}</span></p>`
        } else if(enemyHealth >0 && playerHealth >=0){
            descriptionTextTag.innerHTML = `The dragon attacked with <span class="damage">${enemyDmg}</span> Damage `
            let dragonDmgIncrease = 0;

            //dragon dmg increases by 1/4 of its damage and the health increases by the amount of its damage
            dragonDmgIncrease += Math.round(enemyDmg/4)
            enemyDmg += dragonDmgIncrease
            descriptionTextTag.innerHTML += `and gained <span class="damage">${dragonDmgIncrease}</span> Damage and <span class="health">${enemyDmg}</span> Health`
            enemyHealth += enemyDmg
            
            actionTextTagValue.innerHTML = `<p><span class="health">${enemyHealth}</span></p><p><span class="damage">${enemyDmg}</span></p>`
        } else if (playerHealth <= 0) {
            gameOver()
        }
    }

}




// heals back to full life if the player has at least 10 Gold. Else the player hasn't enough gold.

function takeRest() {


    if (playerGold >= 10 && playerHealth !== playerMaxHealth) {
        playerGold -= 10
        playerHealth = playerMaxHealth
        playerHealthTag.innerHTML = playerHealth;
        playerGoldTag.innerHTML = playerGold;
    } else if(playerHealth === playerMaxHealth) {
        descriptionTextTag.innerHTML = "You are already full life!"
    } else {
        descriptionTextTag.innerHTML = "Insufficient Gold!"
    }
}

// upgrades the weapon by 5 and increases the upgrade cost with each successful upgrade.

function upgradeWeapon() {
    if (playerGold >= upgradeCost) {
        playerGold -= upgradeCost
        weaponDmg += 5
        upgradeCost += 5
        playerGoldTag.innerHTML = playerGold;
        weaponDmgTag.innerHTML = weaponDmg;
        actionTextTagValue.innerHTML = `<p><span class="gold">${upgradeCost}</span></p>`
    } else {
        descriptionTextTag.innerHTML = "Insufficient Gold!"
    }
}


//buttons will be hidden and restart button appears
function gameOver() {
    placeTextTag.innerHTML = "GAME OVER"
    descriptionTextTag.innerHTML = "Try again!"
    visitQuestButton.style.display = 'none'
    attackButton.style.display = 'none'
    restartGameButton.style.display = 'inline-block'
}

// all buttons will be hidden
function hideAllButtons() {
    startGameButton.style.display = 'none'
    restartGameButton.style.display = 'none'
    visitTownButton.style.display = 'none'
    visitInnButton.style.display = 'none'
    visitSmithButton.style.display = 'none'
    visitQuestButton.style.display = 'none'
    visitGoblinButton.style.display = 'none'
    visitOrcButton.style.display = 'none'
    visitDragonButton.style.display = 'none'
    takeRestButton.style.display = 'none'
    upgradeWeaponButton.style.display = 'none'
    attackButton.style.display = 'none'
    increaseHealthButton.style.display = 'none'
    actionTextUl.style.display = 'none'
}

//increasing players health by 5
function increaseHealth() {
    if (playerGold >= 20) {
        playerGold -= 20
        playerHealth += 5
        playerMaxHealth += 5
        playerGoldTag.innerHTML = playerGold;
        playerHealthTag.innerHTML = playerHealth;
        playerMaxHealthTag.innerHTML = playerMaxHealth;
    } else {
        descriptionTextTag.innerHTML = "Insufficient Gold!"
    }
}

//showing the Enemy Stats on the HTML
function actionTextTagEnemySet(){
    actionTextTagOptions.innerHTML = `Enemy `
    actionTextTagValues.innerHTML = `Stats`
    actionTextTagOption.innerHTML = `<p>Health:</p><p>Damage:</p><p>Bounty:</p>`
    actionTextTagValue.innerHTML = `<p><span class="health">${enemyHealth}</span></p><p><span class="damage">${enemyDmg}</span></p><p><span class="gold">${bountyOrc}</span></p>`
    actionTextTagDescs.innerHTML = `Speciality`
}