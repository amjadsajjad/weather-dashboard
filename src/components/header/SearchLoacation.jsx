import { useContext, useState } from 'react';
import searchIcon from '../../assets/search.svg'
import { LocationContext } from '../../contex';
import { getLocationByName } from '../../data/data';

const SearchLoacation = () => {
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm)

    const {setSearchLocation } = useContext(LocationContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        const searchLocationObject = getLocationByName(searchTerm);
        /**
         * For Example:
         * 
         *  searchLocationObject = {
         *   location:London,
         *   latitude:43.35l5,
         *   longitude:-46.343
         *  }
         * 
         **/
        setSearchLocation(searchLocationObject)
        // console.log(searchLocationObject)
    }
    // console.log(searchLocation);
    return (
        <form action="#"
            onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required
                    onChange={e => setSearchTerm(e.target.value)} />
                <button type="submit">
                    <img src={searchIcon} />
                </button>
            </div>
        </form>
    );
};

export default SearchLoacation;