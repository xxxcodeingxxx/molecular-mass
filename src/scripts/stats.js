const answers = document.getElementById('answers')
const Cname = document.getElementById('cName')
const pop = document.getElementById('cPop')
const murders = document.getElementById('cMurder')
const submit = document.getElementById('submit')

// Color Variables For Charts

const cyan400 = 'rgb(34 211 238)'
const indigo500 = 'rgb(99 102 241)'
const violet400 = 'rgb(167 139 250)'

function murdChance(population, yrlyMurders) {
    let chance
    let chancePercentage

    chance = yrlyMurders / population

    chancePercentage = chance * 100

    if (population && yrlyMurders) {
        answers.innerHTML = `Chances of Being Murdered in ${
            Cname.value
        } are ${chancePercentage.toFixed(2)}%`
    } else {
        answers.innerHTML = `<i class="fa-solid text-2xl text-orange-600 mr-4 fa-triangle-exclamation"></i> Sorry, but you didn't enter enough information! Please try again... <i class="fa-solid text-2xl text-orange-600 ml-4 fa-triangle-exclamation"></i>`
        answers.classList.add('text-red-600', 'font-bold')
    }
}

submit.addEventListener('click', () => {
    murdChance(pop.value, murders.value)
    answers.classList.remove('hidden')
})

import Chart from 'chart.js/auto'
;(async function () {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
        { year: 2017, count: 10 },
        { year: 2018, count: 20 },
        { year: 2019, count: 15 },
        { year: 2020, count: 25 },
        { year: 2021, count: 22 },
        { year: 2022, count: 30 },
        { year: 2023, count: 28 },
    ]

    new Chart(document.getElementById('acquisitions'), {
        type: 'line',
        options: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true,
                },
            },
        },
        data: {
            labels: data.map((row) => row.year),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    borderColor: indigo500,
                    color: 'white',
                    backgroundColor: violet400,
                    data: data.map((row) => row.count),
                },
            ],
        },
    })
})()
