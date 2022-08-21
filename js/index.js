function addToPlayerList(input) {
    const playerName = input.parentNode.parentNode.childNodes[1].innerText

    const playerList = {
        noOne: playerName
    }

    console.log(playerList)
}