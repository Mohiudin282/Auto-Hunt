import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { InspectionForm } from './pages/InspectionForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/modals/Login';

import { Signup } from './components/modals/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inspection" element={<InspectionForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
