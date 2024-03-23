const answers = document.getElementById('answers')
const Cname = document.getElementById('cName')
const pop = document.getElementById('cPop')
const murders = document.getElementById('cMurder')
const submit = document.getElementById('submit')

function murdChance(population, yrlyMurders) {
    // const population = 906528 //Columbus Ohio
    // const yrlyMurders = 148 // 2023 Columbus Murders
    let chance
    let chancePercentage

    chance = yrlyMurders / population

    chancePercentage = chance * 100

    console.log(chancePercentage.toFixed(2))
    answers.innerHTML = `Chances of Being Murdered in ${
        Cname.value
    } are ${chancePercentage.toFixed(2)}%`
}
// murdChance(906528, 148)

// // Chicago Pop 2697000
// // '     ' Murders 800

// const ChicagoPop = 2697000
// const murdChicago = 800

// murdChance(ChicagoPop, murdChicago)

submit.addEventListener('click', () => {
    murdChance(pop.value, murders.value)
    answers.classList.remove('hidden')
})
