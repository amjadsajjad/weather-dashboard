/* eslint-disable react/prop-types */
import { FavoriteContext } from "../contex"
import { useLocalStorage } from "../hooks"

const FavoriteProvider = ({ children }) => {

    const [favorites, setFavorites] = useLocalStorage('favorites', [])

    const addToFavorites = (longitude, latitude, location) => {

        setFavorites([
            ...favorites,
            { longitude: longitude, latitude: latitude, location: location }
        ])



    }
    const removeFromFavorites = (location) => {
        const filterFavorites =  favorites.filter(fav => fav.location !== location);
        setFavorites(filterFavorites);

    }


    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoriteContext.Provider>
    )

}
export default FavoriteProvider;