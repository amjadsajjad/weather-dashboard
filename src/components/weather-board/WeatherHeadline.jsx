import pinIcon from '../../assets/pin.svg'
import { useContext } from 'react';
import { WeatherContext } from '../../contex';
import { formatDateAndTime } from '../../utils/utils';
import RainIcon from '../../assets/rainy.svg'
import CloudIcon from '../../assets/icons/cloud.svg'
import SnowIcon from '../../assets/icons/snow.svg'
import HazeIcon from '../../assets/haze.svg'
import SunnyIcon from '../../assets/icons/sunny.svg'
import ThunderIcon from '../../assets/thunder.svg'







const WeatherHeadline = () => {
    const { weatherData } = useContext(WeatherContext);
    const { temperature, location, time, climate } = weatherData;

    const getWeatherIcon = (climate) => {
        switch (climate) {
            case "Rain":
                return RainIcon;

            case "Clouds":
                return CloudIcon;

            case "Snow":
                return SnowIcon;

            case "Clear":
                return SunnyIcon;

            case "Haze":
                return HazeIcon;

            case "Fog":
                return HazeIcon;

            case "Mist":
                return HazeIcon;

            case "Thunder":
                return ThunderIcon;
            
            default: SunnyIcon;
        }
    }


    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pinIcon} />
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">{formatDateAndTime(time, 'time')}, {formatDateAndTime(time, 'date')}</p>
        </div>
    );
};

export default WeatherHeadline;