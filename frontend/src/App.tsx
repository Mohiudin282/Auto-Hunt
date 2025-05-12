import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { InspectionForm } from './pages/InspectionForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { useEffect } from 'react';
import { Signup } from './pages/Signup';
import { AdminPanel } from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import { Unauthorized } from './pages/Unauthorized';


function App() {
  useEffect(() => {
    fetch("http://localhost:3000/api/test", {
      method: "GET",
      credentials: "include"
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log("cors error:", err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminPanel />
          </ProtectedRoute>
        } />
        <Route path="/unauthorized" element={<Unauthorized />}/>
        <Route path="/inspection" element={<InspectionForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
