// creo oggetto che descrive studente
var studente = {
  'nome':'Marco',
  'cognome':'Rossi',
  'età': 33
};
console.log(studente);
// stampo a schermo tutte le proprietà dello studente
for(var field in studente){
  console.log(studente[field]);
}
// creo una lista di oggetti/studenti
var lista = [
  {'nome':'Daniele',
  'cognome':'Fontana',
  'età': 28
},{
  'nome':'Francesco',
  'cognome':'Riccardi',
  'età': 33
},{
  'nome':'Luigi',
  'cognome':'Bianchi',
  'età': 25}];

  lista.push(studente);
  console.log(lista);
// creo un ciclo che stampi a schermo i nomi e cognomi di tutti gli studenti
for(i=0;i<lista.length;i++){
  console.log(lista[i].nome, lista[i].cognome);
}
// utente inserisce nome, cognome ed età per creare nuovo oggetto studente
var inserito = {
    'nome':'',
    'cognome':'',
    'età':0
  };

var nome_inserito=prompt('inserisci il tuo nome');
var cognome_inserito=prompt('inserisci il tuo cognome');
var età_inserito=parseInt(prompt('inserisci la tua età'));

inserito.nome = nome_inserito;
inserito.cognome = cognome_inserito;
inserito.età = età_inserito;

console.log(inserito);

lista.push(inserito);
console.log(lista);
