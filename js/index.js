const playerList = []


function playerListUpdate(playersName) {
    const playersList = document.getElementById("players-list")
    playersList.innerText = "";
    for (let i = 0; i < playersName.length; i++) {
        const name = playerList[i].name
        const li = document.createElement("li")
        li.innerText = name


        const playersList = document.getElementById("players-list")
        // const playersListLength = playersList.children.length

        // console.log(playersListLength)
        if (playersList.children.length <= 4) {
            playersList.appendChild(li)
        }
        else {

            alert('You Cannot Add More Than 5 Players!!')
            input.disabled = false
        }
    }
}


function addToPlayerList(input) {
    const playerName = input.parentNode.parentNode.children[0].innerText

    const playerListObj = {
        name: playerName
    }
    playerList.push(playerListObj)
    playerListUpdate(playerList)
    input.disabled = true
    if (input.disabled = true) {
        input.style.backgroundColor = '#A2A9AF'
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

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerCost = getElementById('manager-cost')
    const coachCost = getElementById('coach-cost')
    const playerExpensesField = getElementByTextId('player-expenses-field')
    const totalCost = playerExpensesField + managerCost + coachCost

    setTextOnTextField('total', totalCost)

})
