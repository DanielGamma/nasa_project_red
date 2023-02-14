import {BrowserRouter, Routes, Route} from 'react-router-dom';  
import './App.css'; 
import Header from './Components/Header/Header' 
import Footer from './Components/Footer/Footer'

import HomePage from './Components/HomePage/HomePage' 
import MapPage from './Components/HomePage/HomePage' 
import LandingsPage from './Components/HomePage/HomePage' 
import DetailsPage from './Components/HomePage/HomePage' 
import FormPage from './Components/HomePage/HomePage'
import FavouritesPage from './Components/HomePage/HomePage' 


function App() { 


  return (
    <div className="App">


      <BrowserRouter> 
      <Header /> 
      <Footer className='bg-background'/>
          <Routes> 
              <Route path='/' element={<HomePage />} /> 
              <Route path='landings' element ={<MapPage />}/> 
              <Route path='landings/list' element ={<LandingsPage />}/> 
              <Route path='landings/details/:id' element ={<DetailsPage />}/>  
              <Route path='landings/create' element ={<FormPage />}/> 
              <Route path='landings/update/:id' element ={<HomePage />}/> 
              <Route path='favourites' element ={<FavouritesPage />}/>
          </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
