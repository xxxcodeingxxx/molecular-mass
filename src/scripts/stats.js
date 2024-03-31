const answers = document.getElementById('answers')
const Cname = document.getElementById('cName')
const pop = document.getElementById('cPop')
const murders = document.getElementById('cMurder')
const submit = document.getElementById('submit')
const Chicago = document.getElementById('shyTown')
const newYork = document.getElementById('newYork')
// Color Variables For Charts

// const cyan300 = 'rgb(103 232 249)'
// const cyan400 = 'rgb(34 211 238)'
const indigo500 = 'rgb(99 102 241)'
const violet400 = 'rgb(167 139 250)'
const fuschia400 = 'rgb(232 121 249)'
const offWhite = '#ededed'

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
        answers.innerHTML = `<i class="fa-solid text-3xl text-white mr-4 fa-triangle-exclamation"></i> Sorry, but you didn't enter enough information! Please try again... <i class="fa-solid text-3xl text-white ml-4 fa-triangle-exclamation"></i>`
        answers.classList.add('text-white', 'font-bold')
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

    new Chart(Chicago, {
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
        { year: 1961, count: 483 },
        { year: 1962, count: 631 },
        { year: 1963, count: 548 },
        { year: 1964, count: 636 },
        { year: 1965, count: 634 },
        { year: 1966, count: 654 },
        { year: 1967, count: 746 },
        { year: 1968, count: 986 },
        { year: 1969, count: 1043 },
        { year: 1970, count: 1117 },
        { year: 1971, count: 1466 },
        { year: 1972, count: 1691 },
        { year: 1973, count: 1680 },
        { year: 1974, count: 1554 },
        { year: 1975, count: 1645 },
        { year: 1976, count: 1622 },
        { year: 1977, count: 1557 },
        { year: 1978, count: 1504 },
        { year: 1979, count: 1733 },
        { year: 1980, count: 1814 },
        { year: 1981, count: 1826 },
        { year: 1982, count: 1668 },
        { year: 1983, count: 1622 },
        { year: 1984, count: 1450 },
        { year: 1985, count: 1384 },
        { year: 1986, count: 1582 },
        { year: 1987, count: 1672 },
        { year: 1988, count: 1896 },
        { year: 1989, count: 1905 },
        { year: 1990, count: 2245 },
        { year: 1991, count: 2154 },
        { year: 1992, count: 1995 },
        { year: 1993, count: 1946 },
        { year: 1994, count: 1561 },
        { year: 1995, count: 1177 },
        { year: 1996, count: 983 },
        { year: 1997, count: 770 },
        { year: 1998, count: 633 },
        { year: 1999, count: 671 },
        { year: 2000, count: 673 },
        { year: 2001, count: 649 },
        { year: 2002, count: 587 },
        { year: 2003, count: 597 },
        { year: 2004, count: 570 },
        { year: 2005, count: 539 },
        { year: 2006, count: 596 },
        { year: 2007, count: 496 },
        { year: 2008, count: 523 },
        { year: 2009, count: 471 },
        { year: 2010, count: 536 },
        { year: 2011, count: 515 },
        { year: 2012, count: 419 },
        { year: 2013, count: 335 },
        { year: 2014, count: 333 },
        { year: 2015, count: 352 },
        { year: 2016, count: 335 },
        { year: 2017, count: 292 },
        { year: 2018, count: 289 },
        { year: 2019, count: 319 },
        { year: 2020, count: 468 },
        { year: 2021, count: 488 },
        { year: 2022, count: 438 },
        { year: 2023, count: 386 },
    ]

    new Chart(newYork, {
        type: 'line',
        data: {
            labels: data.map((row) => row.year),
            datasets: [
                {
                    label: 'NY City Murders Yearly',
                    borderColor: fuschia400,
                    backgroundColor: offWhite,
                    data: data.map((row) => row.count),
                },
            ],
        },
    })
})()
