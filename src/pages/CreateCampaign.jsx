import { Header } from '../components/Header';
import { useState } from 'react';

export const CreateCampaign = ({ campaigns = [], setCampaigns, setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'promotional',
    date: '',
    audience: '',
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const newCampaign = {
      id: Date.now(),
      name: formData.name,
      type: formData.type,
      date: formData.date,
      audience: formData.audience,
      status: formData.date && new Date(formData.date) > new Date() ? 'scheduled' : 'draft',
      sent: 0,
      opened: 0,
      clicked: 0
    };
    const updated = [newCampaign, ...campaigns];
    setCampaigns(updated);
    setCurrentPage('campaigns');
  };

  return (
    <div className="main-content p-8">
      <Header title="Create Campaign" subtitle="Set up a new email campaign" />

      <div className="table-wrapper p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label>Campaign Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input mt-1"
              required
            />
          </div>

          <div>
            <label>Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="input mt-1"
            >
              <option value="promotional">Promotional</option>
              <option value="newsletter">Newsletter</option>
              <option value="announcement">Announcement</option>
              <option value="survey">Survey</option>
            </select>
          </div>

          <div>
            <label>Send Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input mt-1"
            />
          </div>

          <div>
            <label>Audience</label>
            <input
              type="text"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              placeholder="Segment, Tags, etc."
              className="input mt-1"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">Create Campaign</button>
            <button type="button" onClick={() => setCurrentPage('campaigns')} className="btn btn-secondary" style={{ marginLeft: 8 }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
