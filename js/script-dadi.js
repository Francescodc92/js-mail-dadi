/*
Esercizio 2
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
  - creare due variabili che conterranno i due numeri casuali uno per il pc e uno per l'utente 

2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
  - comparare i due valori 
  - se il valore dell'utente è maggiore l'utente ha vinto
  - se il valore del pc è maggiore il pc ha vinto o l'utente ha perso

3. inserire il processo in un evento legato ad un button nell'html

4. stampare nell'html il risultato del gioco

*/
const startButton = document.querySelector("#start")
const userDisplay = document.querySelector("#user-display")
const cpuDisplay = document.querySelector("#cpu-display")
const winnerDisplay = document.querySelector("#winner")

startButton.addEventListener("click", () => {
  const numberUser = Math.floor(Math.random() * 6 + 1)
  const numberCPU = Math.floor(Math.random() * 6 + 1)

  userDisplay.classList.add("animated")
  cpuDisplay.classList.add("animated")
  setTimeout(() => {
    userDisplay.classList.remove("animated")
    cpuDisplay.classList.remove("animated")
  }, 1000)
  userDisplay.innerHTML = numberUser
  cpuDisplay.innerHTML = numberCPU
  if (numberCPU > numberUser) {
    winnerDisplay.innerHTML = "Cpu"
    userDisplay.style.backgroundColor = "rgba(255, 0, 0, 0.486)"
    cpuDisplay.style.backgroundColor = "rgba(0, 128, 0, 0.521)"
  } else if (numberUser > numberCPU) {
    winnerDisplay.innerHTML = "User"
    userDisplay.style.backgroundColor = "rgba(0, 128, 0, 0.521)"
    cpuDisplay.style.backgroundColor = "rgba(255, 0, 0, 0.486)"
  } else {
    winnerDisplay.innerHTML = "Pareggio"
    userDisplay.style.backgroundColor = "rgba(255, 0, 0, 0.486)"
    cpuDisplay.style.backgroundColor = "rgba(255, 0, 0, 0.486)"
  }
})
