import WeatherApp from './Weather';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WeatherApp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
