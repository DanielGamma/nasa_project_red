// import {BrowserRouter, Routes, Route} from 'react-router-dom';  
import './App.css'; 
import Logo from "./Components/Logo/Logo" 
import NavButton from './Components/NavButton/NavButton'



function App() {
  return (
    <div className="App">
      <Logo />  

      <NavButton 
        nameLink = 'Home'/> 
      <NavButton 
        nameLink= 'Map' /> 
      <NavButton 
        nameLink= 'Landings' /> 
      <NavButton 
        nameLink= 'Favourites' />

      {/* <BrowserRouter> 
          <Routes> 
              <Route path='/' />
          </Routes>
      </BrowserRouter>  */}

    </div>
  );
}

export default App;
