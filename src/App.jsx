import React, { useState } from 'react';
import { Dashboard } from './pages/Dashboard';
import { Campaigns } from './pages/Campaigns';
import { CreateCampaign } from './pages/CreateCampaign';
import { Contacts } from './pages/Contacts';
import { Settings as SettingsPage } from './pages/Settings';
import { Sidebar } from './components/Sidebar';
import { mockCampaigns } from './data/campaigns';
import { useEffect } from 'react';
import { mockContacts } from './data/contacts';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [campaigns, setCampaigns] = useState(() => {
    try {
      const stored = localStorage.getItem('campaigns');
      return stored ? JSON.parse(stored) : mockCampaigns;
    } catch (e) {
      return mockCampaigns;
    }
  });

  useEffect(() => {
    try { localStorage.setItem('campaigns', JSON.stringify(campaigns)); } catch (e) {}
  }, [campaigns]);

  const [contacts, setContacts] = useState(() => {
    try {
      const stored = localStorage.getItem('contacts');
      return stored ? JSON.parse(stored) : mockContacts;
    } catch (e) {
      return mockContacts;
    }
  });

  useEffect(() => {
    try { localStorage.setItem('contacts', JSON.stringify(contacts)); } catch (e) {}
  }, [contacts]);

  return (
    <div className="app">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>
        {currentPage === 'dashboard' && <Dashboard campaigns={campaigns} setCurrentPage={setCurrentPage} />}
        {currentPage === 'campaigns' && <Campaigns campaigns={campaigns} setCurrentPage={setCurrentPage} setCampaigns={setCampaigns} />}
        {currentPage === 'create-campaign' && <CreateCampaign campaigns={campaigns} setCampaigns={setCampaigns} setCurrentPage={setCurrentPage} />}
        {currentPage === 'contacts' && <Contacts contacts={contacts} setContacts={setContacts} />}
        {currentPage === 'settings' && <SettingsPage />}
      </div>
    </div>
  );
};

export default App;
