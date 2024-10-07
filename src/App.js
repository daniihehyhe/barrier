import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import './index.css';
import AdminPage from './page/AdminPage';
import MainPage from './page/MainPage';
import EditParkingForm from './page/adminComponents/EditParkingForm';
import EditDPMForm from './page/adminComponents/EditDPMForm';
import TariffSettingsForm from './page/adminComponents/TariffSettingsForm';
import ExportSettingsForm from './page/adminComponents/ExportSettingsForm';
import NetworkSettingsForm from './page/adminComponents/NetworkSettingsForm';
import AdvancedSettingsForm from './page/adminComponents/AdvancedSettingsForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='container max-w-custom mx-auto'>
    <Router>
       <Header setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin/redaktirovaine_parkovki" element={<EditParkingForm />} />
        <Route path="/admin/redaktirovaine_dpm" element={<EditDPMForm />} />
        <Route path="/admin/tarif_settings" element={<TariffSettingsForm />} />
        <Route path="/admin/export_settings" element={<ExportSettingsForm />} />
        <Route path="/admin/network_settings" element={<NetworkSettingsForm />} />
        <Route path="/admin/advanced_settings" element={<AdvancedSettingsForm />} />
        <Route
          path="/admin"
          element={isAuthenticated ? <AdminPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
