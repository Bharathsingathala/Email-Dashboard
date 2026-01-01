import { Header } from '../components/Header';
import { useState, useEffect } from 'react';

export const Settings = () => {
  const [form, setForm] = useState({ name: '', email: '', weeklySummary: true });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('settings');
      if (stored) setForm(JSON.parse(stored));
    } catch (e) {}
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem('settings', JSON.stringify(form));
      alert('Settings saved');
    } catch (e) {
      alert('Unable to save settings');
    }
  };

  return (
    <div className="main-content p-8">
      <Header title="Settings" subtitle="Configure your account and preferences" />

      <div className="table-wrapper p-6">
        <div style={{ maxWidth: 640 }}>
          <h3>Account Settings</h3>
          <div style={{ marginTop: 12 }}>
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="input mt-1" />
          </div>
          <div style={{ marginTop: 12 }}>
            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="input mt-1" />
          </div>
          <div style={{ marginTop: 12 }}>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="weeklySummary" checked={form.weeklySummary} onChange={handleChange} />
              Receive Weekly Summary Emails
            </label>
          </div>
          <div style={{ marginTop: 16 }}>
            <button onClick={handleSave} className="btn btn-primary">Save Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};
