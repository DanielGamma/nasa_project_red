import {BrowserRouter, Routes, Route} from 'react-router-dom';  
import Header from './Components/Header/Header' 
import HomePage from './Components/HomePage/HomePage' 
import MapPage from './Components/MapPage/MapPage.jsx' 
import LandingsPage from './Components/LandingsPage/LandingsPage.jsx' 
import DetailsPage from './Components/DetailsPage/DetailsPage.jsx' 
import FormPage from './Components/FormPage/FormPage.jsx'
import FavouritesPage from './Components/FavouritesPage/FavouritesPage.jsx' 
import CreateForm from './Components/FormPage/CreateForm' 


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
              <Route path='create' element ={<CreateForm />}/>
          </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
