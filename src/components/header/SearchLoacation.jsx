import { useContext } from 'react';
import searchIcon from '../../assets/search.svg'
import { LocationContext } from '../../contex';
import { getLocationByName } from '../../data/data';
import { useDebounce } from '../../hooks';

const SearchLoacation = () => {

    const { setSearchLocation } = useContext(LocationContext)

    const debounceSearch = useDebounce((searchTerm) => { 
        const searchLocationObject = getLocationByName(searchTerm);
        setSearchLocation(searchLocationObject)
    }, 500)



    const handleChange = (e) => {
        const searchTerm = e.target.value;
        debounceSearch(searchTerm);

    }



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const searchLocationObject = getLocationByName(searchTerm);
    //     setSearchLocation(searchLocationObject)
    //     /**
    //      * For Example:
    //      * 
    //      *  searchLocationObject = {
    //      *   location:London,
    //      *   latitude:43.35l5,
    //      *   longitude:-46.343
    //      *  }
    //      * 
    //      **/
    // }

    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required
                    onChange={handleChange} />
                <button type="submit">
                    <img src={searchIcon} />
                </button>
            </div>
        </form>
    );
};

export default SearchLoacation;