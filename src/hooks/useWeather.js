import { useState,useEffect } from "react"

const useWeather = () => {

    const [weatherData, setWeatherData] = useState({
        climate: '',
        temperature: '',
        location: '',
        time: '',
        maxTemperature: '',
        minTemperature: '',
        humidityPercentage: '',
        cloudPercentage: '',
        wind: '',
        longitude: '',
        latitude: ''

    })
    const [loading, setLoading] = useState({
        state: false,
        message: ''
    })

    const [error, setError] = useState(null)

    const fetchWeatherData = async (longitude, latitude) => {

        try {
            // when the data is start to fetching then the loading state will be shown:
            setLoading({
                ...loading,
                state: true,
                message: 'Weather data is fetching...'
            })
            // After loading the fetch call is make:
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)

            // if the response is not okay, then throw a message:
            if (!response.ok) {
                const errorMessage = `Weather data fetching failed:${response.status}`;
                throw new Error(errorMessage)
            }
            // if the response is okay, then convert the response in json:
            const data = await response.json();

            const updatedWeatherData = {
                ...weatherData,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                location: data?.name,
                time: data?.dt,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidityPercentage: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                longitude: longitude,
                latitude: latitude

            }

            setWeatherData(updatedWeatherData)


        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading({
                ...loading,
                state: false,
                message: ''
            })

        }

    }

    useEffect(() => {
        setLoading({
            ...loading,
            state:true,
            message:'Finding Location ...'

        })
        navigator.geolocation.getCurrentPosition((position) => {
            fetchWeatherData(position.coords.longitude, position.coords.latitude)

        })

    }, [])

    return {
        weatherData,
        loading,
        error
    }

}

export default useWeather;