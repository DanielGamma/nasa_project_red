import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, createContext } from "react";
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage'
import MapPage from './Components/MapPage/MapPage.jsx'
import LandingsPage from './Components/LandingsPage/LandingsPage.jsx'
import DetailsPage from './Components/DetailsPage/DetailsPage.jsx'
import FormPage from './Components/FormPage/FormPage.jsx'
import FavouritesPage from './Components/FavouritesPage/FavouritesPage.jsx' 
import CreateForm from './Components/FormPage/CreateForm' 
import Footer from './Components/Footer/Footer.jsx'

export const LandingContext = createContext()
//export const idLandingContext = createContext()

export default function App() {

  const [infoLandings, setInfoLandings] = useState([])
  //const [idLandings, setIdLandings] = useState('')

  useEffect(() => {
    fetch("https://nasa-api-us5g.onrender.com/api/landings")
      .then(res => res.json())
      .then(data => {
        setInfoLandings(data.landings.filter(fireball => fireball.reclat !== undefined || fireball.reclong !== undefined))
       // data.landings.forEach(e => setIdLandings(e._id))
      })
  }, []);

  return (
    <div className="App">
      <BrowserRouter> 
        <LandingContext.Provider value={{ infoLandings }}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='landings' element={<MapPage />} />
            <Route path='landings/list' element={<LandingsPage />} />
            <Route path='landings/details/:id' element={<DetailsPage />} />
            <Route path='landings/create' element={<FormPage />} />
            <Route path='landings/update/:id' element={<HomePage />} />
            <Route path='favourites' element={<FavouritesPage />} /> 
            <Route path='create' element ={<CreateForm />}/>
          </Routes>
          <Footer />
        </LandingContext.Provider>
      </BrowserRouter>

    </div>
  );
}

