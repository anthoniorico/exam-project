/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './components/portfolio';
import RepoDetails from './components/RepoDetails';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  return (
    <Router>
      <ErrorBoundary>    
      <Routes>       
        <Route path="/" element={<Portfolio />} />
        <Route path="/repo/:name" element={<RepoDetails />} />
        <Route path="*" element={<NotFound />} />        
      </Routes>     
      </ErrorBoundary>
    </Router>
  );
}

export default App;