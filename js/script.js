/*
Esercizio 1
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

Ragionamento Base
1. creare un form per richiedere all'utente la propria email
  - prendere l'elemento nel js 
  - prendere il valore inserito dall'utente nel form
2. creare una lista(array) di email che possono effettuare l'accesso
  
3. comparare ogni elemento dell'array(lista creata da noi) con il valore inserito dall'utente 
  - assicurarsi che i due valori siano scritte nello stesso modo (trasformare in lowcase il valore inserito dall'utente )
  - se il valore coincide a una delle email nella lista 
        - ridirezionare l'utente ad una pagina per simulare l'accesso a qualche sito, oppure eliminare il form dall'html e inserire un messaggio di benvenuto
  - altrimenti , se il valore non coicide con nessuna delle email presenti nell'array 
        - segnalare all'utente che non ha il permesso di accedere 
        - svuotare il form per permettergli di inserire un nuovo valore 

*/
const registeredUsers = [
  {
    email: "francescodicorpo30@gmail.com",
    password: "12345",
  },
  {
    email: "pinco@gmail.com",
    password: "6789x",
  },
  {
    email: "pallo@gmail.com",
    password: "123456ax",
  },
  {
    email: "hoPocaCreativitaOggi@gmail.com",
    password: "123645abg",
  },
]
const formElement = document.querySelector("#login-form")
formElement.addEventListener("submit", (e) => {
  e.preventDefault()
  const emailInput = document.querySelector("#email")
  const passwordInput = document.querySelector("#password")
  let emailValue = emailInput.value.toLowerCase()
  let passwordValue = passwordInput.value
  const loginResult = document.querySelector("#login-result")
  const errorResult = document.querySelector("#error")
  let authorizedUser = false

  registeredUsers.forEach((user) => {
    const userEmailLower = user.email.toLowerCase()
    if (userEmailLower == emailValue && passwordValue == user.password) {
      authorizedUser = true
    }
  })

  if (authorizedUser == true) {
    formElement.style.display = "none"
    loginResult.innerHTML = " hai effettuato l'accesso"
  } else {
    emailInput.style.outline = "1px solid red"
    passwordInput.style.outline = "1px solid red"
    errorResult.innerHTML = " email o password incorretti"
  }
})
