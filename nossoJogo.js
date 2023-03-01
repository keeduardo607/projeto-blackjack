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

console.log(`Bem vindo(a) ao jogo de BlackJack!`)

if (confirm(`Quer iniciar uma nova jogada?`)) {
   
   //Atribuindo duas cartas ao usuario
   const carta1Usuario = comprarCarta() 
   const carta2Usuario = comprarCarta()
   //Somando o valor das cartas do usuario
   const valorUsuario = carta1Usuario.valor + carta2Usuario.valor

   //Imprimindo no console o valor da carta 1 e seu naipe, valor da carta 2  e seu naipe e a pontuação
   console.log(`Usuário - cartas: ${carta1Usuario.texto} e ${carta2Usuario.texto} - pontuação: ${valorUsuario}`)

   //Atribuindo duas cartas ao computador
   const carta1Computador = comprarCarta() 
   const carta2Computador = comprarCarta()
   //Somando o valor das cartas do computador
   const valorComputador = carta1Computador.valor + carta2Computador.valor

   //Imprimindo no console o valor da carta 1 e seu naipe, valor da carta 2  e seu naipe e a pontuação
   console.log(`Computador - cartas: ${carta1Computador.texto} e ${carta2Computador.texto} - pontuação: ${valorComputador}`)

   //Condicional de acordo de as regras do jogo 21
   if (valorUsuario > valorComputador && valorUsuario <= 21) {
      console.log(`O Usuário Ganhou`)
   } else if (valorComputador > valorUsuario && valorComputador <= 21) {
      console.log(`O Computador Ganhou`)
   } else if (valorUsuario > 21 && valorComputador <= 21) {
      console.log(`O computador Ganhou`)
   }  else if (valorComputador > 21 && valorUsuario <= 21) {
      console.log(`O usuario Ganhou`)
   } else if (valorComputador && valorUsuario)
      console.log(`Empate!`)
} else {
   console.log(`O jogo acabou.`)
} 