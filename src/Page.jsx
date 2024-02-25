import { useContext, useEffect, useState } from 'react';
import '../src/assets/styles/output.css'
import Header from './components/header/Header'
import WeatherBoard from './components/weather-board/WeatherBoard'
import { WeatherContext } from './contex';
import clearImg from './assets/backgrounds/clear-sky.jpg'
import fewCloudImg from './assets/backgrounds/few-clouds.jpg'
import mistImg from './assets/backgrounds/mist.jpeg'
import rainyImg from './assets/backgrounds/rainy-day.jpg'
import scatterCloudImg from './assets/backgrounds/scattered-clouds.jpg'
import showerRainImg from './assets/backgrounds/shower-rain.jpg'
import snowImg from './assets/backgrounds/snow.jpg'
import sunnyImg from './assets/backgrounds/sunny.jpg'
import thunderStormImg from './assets/backgrounds/thunderstorm.jpg'
import winterImg from './assets/backgrounds/winter.jpg'



const Page = () => {
    const {loading, weatherData} = useContext(WeatherContext);
    const [backgroundImage, setBackgroundImage] = useState('');
    const getBackgroundImage = (climate) => {
        switch(climate){
            case 'Sunny':
                return sunnyImg;
            case 'Rain':
                return rainyImg;
            case 'Snow':
                return snowImg;
            case 'Mist':
                return mistImg;
            case 'Thunder':
                return thunderStormImg;
            case 'Clear':
                return clearImg;
            case 'Clouds':
                return scatterCloudImg;
            case 'Haze':
                return fewCloudImg;
            case 'Fog':
                return winterImg;
            default: return showerRainImg;


        }
    }

    useEffect(()=>{
        const bgImage = getBackgroundImage(weatherData.climate);
        setBackgroundImage(bgImage)


    },[weatherData.climate])
    return (
          <>
          {
            loading.state? (<p className='text-center font-semibold text-xl'>{loading.message}</p>): (<div style={{backgroundImage:`url(${backgroundImage})`}}  className='grid h-screen place-items-center bg-cover bg-no-repeat'>

            <Header></Header>
            <WeatherBoard></WeatherBoard>

          </div>)
          }
          
          </>
    );
};

export default Page;