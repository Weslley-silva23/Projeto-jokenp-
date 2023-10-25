const result = document.querySelector('.result')
const myscore = document.querySelector('#myscore')
const scoreMachine = document.querySelector('#score-machine')


let myscorenumber = 0
let scoreMachinenumber = 0


const playhuman = (humanchoice) => {

    playthegame(humanchoice, playmachine())


}


const playmachine = () => {

    const choices = ['pedra', 'papel', 'tesoura']

    const randomnumber = Math.floor(Math.random() * 3)



    return choices[randomnumber]

}

const playthegame = (human, machine) => {

    console.log("humano:" + human + "maquina:" + machine)



    if (human === machine) {
        result.innerHTML = 'Empate'
    }

    else if (
        (human === 'pedra' && machine === "tesoura") ||
        (human === 'tesoura' && machine === "papel") ||
        (human === 'papel' && machine === "pedra")


    )

      


    {
        myscorenumber++
        myscore.innerHTML = myscorenumber
        
        result.innerHTML = "Voçe Ganhou" }
   


    else {
scoreMachinenumber++
scoreMachine.innerHTML= scoreMachinenumber
    result.innerHTML = "Voçe perdeu para alexa"
}


}