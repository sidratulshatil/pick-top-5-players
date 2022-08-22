const playerList = []


function playerListUpdate(playersName) {


    const playersList = document.getElementById("players-list")
    playersList.innerText = "";
    for (let i = 0; i < playersName.length; i++) {
        // console.log(playerList[i].name)
        const name = playerList[i].name
        const li = document.createElement("li")
        li.innerText = name
        playersList.appendChild(li)
    }
}


function addToPlayerList(input) {
    const playerName = input.parentNode.parentNode.children[0].innerText

    const playerListObj = {
        name: playerName

    }
    // console.log(playerListObj.name)
    playerList.push(playerListObj)
    playerListUpdate(playerList)
    input.disabled = true
    if (input.disabled = true) {
        input.style.backgroundColor = '#46a8fe'
    }
}
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerField = getElementById('per-player-field')
    const playersList = document.getElementById("players-list")
    const playersListLength = playersList.children.length

    const playerExpensesField = getElementByTextId('player-expenses-field')

    const playerExpensesTotal = perPlayerField * playersListLength

    setTextOnTextField('player-expenses-field', playerExpensesTotal)
})
