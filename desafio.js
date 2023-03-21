/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartasUsuario = []
let cartasComputador = []

if(confirm(`
Bem vindo(a) ao jogo de BlackJack!
Quer iniciar uma nova jogada?`)){

   //Atribuindo duas cartas ao usuario
   cartasUsuario.push(comprarCarta())
   cartasUsuario.push(comprarCarta())

   //Atribuindo duas cartas ao computador
   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())

   //Se as cartas sorteadas forem dois 'A' com valor 11, precisar sortear novamente
   if (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11 || cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) {

   cartasUsuario.push(comprarCarta())
   cartasUsuario.push(comprarCarta())
   
   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())

   }

   //Comprar outra carta
let desejaComprar = true

while (desejaComprar) {
   let textos = " "
   let valores = 0

   // Utilizando o objeto de 'carta' para definir o valor das variaveis textos e valores
   for (let carta of cartasUsuario) {
      textos = textos + carta.texto + " "
      valores = valores + carta.valor
   }

   // Se o valor das cartas for maior que 21, o while desejaComprar será falso, se não, vai confirmar se o usuario deseja comprar uma nova carta
   if (valores > 21) {
   desejaComprar = false
   } else {

   let confirmarCompra = confirm(`
   Suas cartas são ${textos}. A carta revelada do computador é ${cartasComputador[0].texto}.

   Deseja comprar mais uma carta?
   `)

   // Se o usurio responder 'OK' true, vai comprar uma nova carta. Se não deseja comprar será false
   if (confirmarCompra) {

   cartasUsuario.push(comprarCarta())

   } else {

   desejaComprar = false

  }
 }
}
   
// Calcular valor das cartas de usuario e do computador
let valorCartasComputador = 0
let valorCartasUsuario = 0
let textoCartasComputador = " "
let textoCartasUsuario = " "

for (let carta of cartasUsuario) {
   valorCartasUsuario = valorCartasUsuario + carta.valor
   textoCartasUsuario = textoCartasUsuario + carta.texto
}

for (let carta of cartasComputador) {
   valorCartasComputador = valorCartasComputador + carta.valor
   textoCartasComputador = textoCartasComputador + carta.texto
}

// Se o valor das cartas de usuario for menor ou igual a 21, vai verificar se o valor das cartas do computador é menor que o valor das cartas do usuario e menor igual a 21. Se for true, computador vai comprar outra carta.
if (valorCartasUsuario <= 21) {
   while (valorCartasComputador < valorCartasUsuario && valorCartasComputador <= 21) {
     cartasComputador.push(comprarCarta())
     // Zerando o laço para computador comprar novamente se o laço ainda for true
     valorCartasComputador = 0
     textoCartasComputador = " "
     for (let carta of cartasComputador) {
      valorCartasComputador = valorCartasComputador + carta.valor
      textoCartasComputador = textoCartasComputador + carta.texto
  }
 }
}

// Condicional de acordo de as regras do jogo 21 pra verificar quem ganhou
let ganhador = ""

if (valorCartasUsuario > valorCartasComputador && valorCartasUsuario <= 21){
   ganhador = `O usuário venceu a partida!`
} else if (valorCartasComputador > valorCartasUsuario && valorCartasComputador <= 21){
   ganhador = `O computador venceu a partida!`
} else if (valorCartasComputador > 21 && valorCartasUsuario <= 21) { 
   ganhador = `O usuário venceu a partida!`
} else if (valorCartasUsuario > 21 && valorCartasComputador <= 21) {
   ganhador = `O computador venceu a partida!`
} else {
   ganhador = `A partida deu empate!`
}

// Imprimir na tela as cartas de cada jogador e o resultado da partida
alert (

`
 Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${valorCartasUsuario}
 As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${valorCartasComputador}

 ${ganhador}

`)

} 
else {
   alert("O jogo acabou.")
}