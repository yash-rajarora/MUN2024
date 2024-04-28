import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MUNConference from './Components/About/MunConference';
import ZeroHourSummit from './Components/About/ZeroHourSummit';
import Agendas from './Components/Agendas';
import Home from './Components/Home/Home';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Registration from './Components/Registration/Registration';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact';
import Sponser from './Components/Sponsers/Sponser';
import Teams from './Components/Team/Teams';
import TechnicalTeams from './Components/Team/TechnicalTeams';
import GalleryZhs from './Components/Gallery/Gallery_zhs';
import Collaboration from './Components/Collaboration';
import Ramanan from './Components/Ramanan';
import Registrationzhs from './Components/Registration/Registrationzhs';
import AboutUs from './Components/About/Aboutus';
import BackgroundGuideZhs from './Components/BackgroundGuide/backgroundzhs';
import Testimonials from './Components/Testimonials';
import PreviousSpeaker from './Components/Speakers';
function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} exact path='/' />
        <Route element={<MUNConference />} exact path='/munconference' />
        <Route element={<ZeroHourSummit />} exact path='/zerohoursummit' />
        <Route element={<AboutUs />} exact path='/AboutUs' />
        <Route element={<BackgroundGuideZhs/>} exact path='/BackgroundGuideZhs' />
        <Route element={<Registration />} exact path='/register' />
        <Route element={<Agendas />} exact path='/agenda' />
        <Route element={<Gallery />} exact path='/gallery' />
        <Route element={<Sponser />} exact path='/sponsers' />
        <Route element={<Contact />} exact path='/contact' />
        <Route element={<Teams />} exact path='/team' />
        <Route element={<PreviousSpeaker />} exact path='/Speakers' />
        <Route element={<TechnicalTeams />} exact path='/technicalteam' />
        <Route element = {<Testimonials />} exact path='/testimonials' />
        <Route element={<GalleryZhs />} exact path='/GalleryZhs' />
        <Route element={<Collaboration />} exact path='/Collaboration' />
        <Route element={<Ramanan />} exact path='/Ramanan' />
        <Route element={<Registrationzhs/>} exact path='/registerzhs'/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
