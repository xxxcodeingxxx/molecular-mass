const answers = document.getElementById('answers')
const Cname = document.getElementById('cName')
const pop = document.getElementById('cPop')
const murders = document.getElementById('cMurder')
const submit = document.getElementById('submit')

// Color Variables For Charts

const cyan300 = 'rgb(103 232 249)'
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
        { year: 1974, count: 970 },
        { year: 1981, count: 877 },
        { year: 1992, count: 939 },
        { year: 1996, count: 796 },
        { year: 2006, count: 467 },
        { year: 2007, count: 443 },
        { year: 2008, count: 510 },
        { year: 2009, count: 459 },
        { year: 2010, count: 432 },
        { year: 2011, count: 431 },
        { year: 2012, count: 500 },
        { year: 2013, count: 414 },
        { year: 2014, count: 411 },
        { year: 2015, count: 478 },
        { year: 2016, count: 784 },
        { year: 2017, count: 653 },
        { year: 2018, count: 567 },
        { year: 2019, count: 506 },
        { year: 2020, count: 778 },
        { year: 2021, count: 804 },
        { year: 2022, count: 709 },
        { year: 2023, count: 617 },
    ]

    new Chart(document.getElementById('acquisitions'), {
        type: 'line',
        options: {
            animations: {
                tension: {
                    duration: 2000,
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
                    label: 'Chicago Murders Yearly',
                    borderColor: indigo500,
                    backgroundColor: violet400,
                    data: data.map((row) => row.count),
                },
            ],
        },
    })
})()
;(async function () {
    const data = [
        { year: 1928, count: 404 },
        { year: 1929, count: 425 },
        { year: 1930, count: 494 },
        { year: 1931, count: 588 },
        { year: 1932, count: 579 },
        { year: 1933, count: 541 },
        { year: 1934, count: 458 },
        { year: 1936, count: 510 },
        { year: 1939, count: 291 },
        { year: 1940, count: 275 },
        { year: 1941, count: 268 },
        { year: 1942, count: 265 },
        { year: 1943, count: 201 },
        { year: 1944, count: 288 },
        { year: 1945, count: 292 },
        { year: 1946, count: 346 },
        { year: 1947, count: 333 },
        { year: 1948, count: 315 },
        { year: 1949, count: 301 },
        { year: 1950, count: 294 },
        { year: 1951, count: 243 },
        { year: 1952, count: 309 },
        { year: 1953, count: 350 },
        { year: 1954, count: 342 },
        { year: 1955, count: 306 },
        { year: 1956, count: 315 },
        { year: 1957, count: 314 },
        { year: 1958, count: 354 },
        { year: 1959, count: 390 },
        { year: 1960, count: 482 },
    ]

    new Chart(document.getElementById('newYork'), {
        type: 'bar',
        data: {
            labels: data.map((row) => row.year),
            datasets: [
                {
                    label: 'NY City Murders Yearly',
                    borderColor: cyan400,
                    backgroundColor: cyan300,
                    data: data.map((row) => row.count),
                },
            ],
        },
    })
})()
