fetch("data/matches.json")

.then(response => response.json())

.then(data => {

let match = data[0]

document.getElementById("lastMatch").innerHTML =
match.takim1 + " " + match.skor + " " + match.takim2 +
"<br>MVP: " + match.mvp

})