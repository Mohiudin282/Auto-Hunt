//import { useState } from 'react'
import { LandingPage } from './pages/LandingPage';
import { SearchForm } from './pages/SearchForm';
import { InspectionForm } from './pages/InspectionForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/inspection" element={<InspectionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
