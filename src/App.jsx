
// import './App.css'
import '../src/assets/styles/output.css'
import Header from './components/header/Header'
import WeatherBoard from './components/weather-board/WeatherBoard'

function App() {


  return (
    <div className='grid h-screen place-items-center'>

      <Header></Header>
      <WeatherBoard></WeatherBoard>

    </div>
  )
}

export default App