import {BrowserRouter, Routes, Route} from 'react-router-dom';  
import Header from './Components/Header/Header' 
import HomePage from './Components/HomePage/HomePage' 
import MapPage from './Components/MapPage/MapPage' 
import LandingsPage from './Components/LandingsPage/LandingsPage' 
import DetailsPage from './Components/DetailsPage/DetailsPage' 
import FormPage from "./Components/FormPage/FormPage"
import FavouritesPage from "./Components/FavouritesPage/FavouritesPage" 
import Footer from './Components/Footer/Footer';


function App() { 

  return (
    <div className="App">


      <BrowserRouter> 
      <Header /> 
          <Routes> 
              <Route path='/' element={<HomePage />} /> 
              <Route path='landings' element ={<MapPage />}/> 
              <Route path='landings/list' element ={<LandingsPage />}/> 
              <Route path='landings/details/:id' element ={<DetailsPage />}/>  
              <Route path='landings/create' element ={<FormPage />}/> 
              <Route path='landings/update/:id' element ={<HomePage />}/> 
              <Route path='favourites' element ={<FavouritesPage />}/>
          </Routes> 
          {/* <Footer /> */}
      </BrowserRouter> 

    </div>
  );
}

export default App;
