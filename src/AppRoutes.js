import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Dashboad from './pages/dashboad/Dashboad';
import AboutUs from './pages/aboutus/Aboutus';
import Profile from './pages/profile/Profile';
import User from './pages/users/User';
import YourFirstComponent from './pages/learn-react/YourFirstComponent';
import PassingPropToComponent from './pages/learn-react/PassingPropToComponent';
import CardList from './pages/allCards/CardList';
import ConditionRendering from './pages/learn-react/ConditionalRendering';
import RenderingList from './pages/learn-react/RenderingList';
import './App.css';
import State from './pages/state/State';
import Props from './pages/props/Props';
import FormHAndling from './pages/formHandling/FormHAndling';
import Login from './pages/auth/Login';
import CameraCapture from './pages/cameraTask/CameraCaptyreTask'
import Pannels from './pages/panels/DfdPanels';

const AppRouter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize from localStorage or default to false
    return localStorage.getItem('isLogIn') === 'true';
  });

  // Update localStorage when isLoggedIn changes
  useEffect(() => {
    localStorage.setItem('isLogIn', isLoggedIn.toString());
  }, [isLoggedIn]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} isMenuOpen={isMenuOpen} onClick={toggleMenu} />}
      {isLoggedIn &&
        <div className='main-container'>
          <Sidebar isMenuOpen={isMenuOpen} />
          <Routes className='component-container'>
            <Route path='/dashboard' element={<Dashboad className='component-container' />} />
            <Route path='/aboutus' element={<AboutUs className='component-container' />} />
            <Route path='/profile' element={<Profile className='component-container' />} />
            <Route path='/user' element={<User className='component-container' />} />
            <Route path='/learnReact'>
              <Route path='yourfirstcomponent' element={<YourFirstComponent className='component-container' />} />
              <Route path='passingPropToComponent' element={<PassingPropToComponent className='component-container' />} />
              <Route path='conditionRendering' element={<ConditionRendering className='component-container' />} />
              <Route path='renderingList' element={<RenderingList className='component-container' />} />
            </Route>
            <Route path='/cardLists' element={<CardList className='component-container' />} />
            <Route path='/state' element={<State className='component-container' />} />
            <Route path='/props' element={<Props className='component-container' />} />
            <Route path='/formHandling' element={<FormHAndling className='component-container' />} />
            <Route path='/cameraCaptureTask' element={<CameraCapture className='component-container' />} />
            <Route path='/pannels' element={<Pannels className='component-container' />} />
          </Routes>
        </div>
      }
      {!isLoggedIn && <Navigate to='/login' />}
      {!isLoggedIn &&
        <Routes>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        </Routes>
      }
    </Router>
  );
};

export default AppRouter;
