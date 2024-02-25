
// import './App.css'

import Page from './Page'
import { FavoriteProvider, LocationProvider, WeatherProvider } from './provider'

function App() {


  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page></Page>
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App
