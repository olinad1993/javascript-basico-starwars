console.log("Olá, javascript")

let userName = "Danilo"

document.getElementById('user-name').innerHTML = userName



// console.log('Olá, javascript');

// let userName = 'Danilo';

// document.getElementById('user-name').innerHTML = userName;

// function boasVindas(nome) {
//   alert(nome + ', Seja bem-vindo(a)');
// }

// boasVindas('Danilo');

var personagagens = [
    'Mestre Yoda',
    'Luke Skywalker',
    'Princesa Leia',
    'Darth Vader',
    'R2D2',
  ];
  
  // FOR EACH
  // personagagens.forEach(function (p) {
  //   console.log(p);
  // });
  
  
  // FOR IN
  // for (var i in personagagens){
  //   console.log(personagagens[i]);
  // }
  
  
  // for (var i = 0; i <= 10; i++){
  //   console.log(i);
  // }
  
  
  // OBJETOS
  
  var yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostrarIdade: function(){
      console.log(`A idade do ${this.nome} é de ${this.idade} anos.`)
    }
  }
  
  console.log(yoda);
  yoda.mostrarIdade();