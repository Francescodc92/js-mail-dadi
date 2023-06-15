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
