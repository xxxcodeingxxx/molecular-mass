// Scripts
import axios from 'axios'

const zip = document.getElementById('zipCode')

const getGeo = async () => {
    var key = '##############################'
    var cityName = zip.value
    var url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${key}`
    try {
        const response = await axios.get(`${url}`)
        const Llat = response.data[0].lat
        const Llon = response.data[0].lon
        const fetchData = async () => {
            var url = `https://api.openweathermap.org/data/2.5/weather?lat=${Llat}&lon=${Llon}&appid=${key}&units=imperial`
            try {
                const respond = await axios.get(`${url}`)
                const tmp = respond.data
                console.log(tmp)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    } catch (error) {
        console.error(error)
    }
}
const button = document.getElementById('subBtn')

button.addEventListener('click', () => {
    getGeo()
})
