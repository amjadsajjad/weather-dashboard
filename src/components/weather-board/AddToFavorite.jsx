import { useContext, useEffect, useState } from "react";
import { FavoriteContext, WeatherContext } from "../../contex";
import HeartIcon from '../../assets/heart.svg'
import RedHeartIcon from '../../assets/heart-red.svg'


const AddToFavorite = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);

    const { weatherData } = useContext(WeatherContext);
    const { longitude, latitude, location } = weatherData;

    useEffect(()=>{
        const found = favorites.find(fav => fav.location === location)
        setIsFavorite(found);

    },[])

    const handleFavorite = () => {

        const found = favorites.find(fav => fav.location === location)

        if (!found) {
            addToFavorites(longitude, latitude, location)
        }
        else{
            removeFromFavorites(location)
        }
        setIsFavorite(!isFavorite)

    }




    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]" onClick={handleFavorite}>
                    <span>{isFavorite? 'Remove From Favorite' : 'Add to Favourite'}</span>
                    <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="" />
                </button>

            </div>
        </div>
    );
};

export default AddToFavorite;