const LocationData = [
    { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 }, // Dhaka, Bangladesh
    { location: "New York", latitude: 40.7128, longitude: -74.0060 }, // New York, USA
    { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 }, // Tokyo, Japan
    { location: "London", latitude: 51.5074, longitude: -0.1278 }, // London, UK
    { location: "Paris", latitude: 48.8566, longitude: 2.3522 }, // Paris, France
    { location: "Sydney", latitude: -33.8688, longitude: 151.2093 }, // Sydney, Australia
    { location: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 }, // Rio de Janeiro, Brazil
    { location: "Cairo", latitude: 30.0330, longitude: 31.2336 }, // Cairo, Egypt
    { location: "Moscow", latitude: 55.7558, longitude: 37.6176 }, // Moscow, Russia
    { location: "Toronto", latitude: 43.6532, longitude: -79.3832 }, // Toronto, Canada
    { location: "Mumbai", latitude: 19.0760, longitude: 72.8777 }, // Mumbai, India
    { location: "Berlin", latitude: 52.5200, longitude: 13.4050 }, // Berlin, Germany
    { location: "Seoul", latitude: 37.5665, longitude: 126.9780 }, // Seoul, South Korea
    { location: "Cape Town", latitude: -33.9180, longitude: 18.4233 }, // Cape Town, South Africa
    { location: "Mexico City", latitude: 19.4326, longitude: -99.1332 }, // Mexico City, Mexico
    { location: "Istanbul", latitude: 41.0082, longitude: 28.9784 }, // Istanbul, Turkey
    { location: "Bangkok", latitude: 13.7563, longitude: 100.5018 }, // Bangkok, Thailand
    { location: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 }, // Buenos Aires, Argentina
    { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 }, // Los Angeles, USA
    { location: "Nairobi", latitude: -1.286389, longitude: 36.817223 }, // Nairobi, Kenya
];

const getLocation = () => {
    return LocationData;
}

const getLocationByName = (searchLocation) => {

    // if (!searchLocation) {
    //     return null;
    // }
    
    const filteredLocation = LocationData.find(item => item.location === searchLocation);
    console.log(filteredLocation);

    if (filteredLocation) {
        return filteredLocation;
    }
    else {
        const defaultLocation = {
            location: 'default',
            latitude: 0,
            longitude: 0
        }
        return defaultLocation;
    }

}

export { getLocation, getLocationByName }
