import { Header } from '../components/Header';
import { StatusBadge } from '../components/StatusBadge';

export const Campaigns = ({ campaigns = [], setCurrentPage, setCampaigns }) => {
  const changeStatus = (id, status) => {
    setCampaigns(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  };

  const deleteCampaign = id => {
    if (!confirm('Delete this campaign?')) return;
    setCampaigns(prev => prev.filter(c => c.id !== id));
  };
  return (
    <div className="main-content p-8">
      <Header title="Campaigns" subtitle="Manage all your email campaigns" action={<button onClick={() => setCurrentPage('create-campaign')} className="btn btn-primary">Create Campaign</button>} />

      <div className="table-wrapper p-6">
        <div className="flex items-center justify-between mb-6">
          <h3>All Campaigns</h3>
        </div>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              {campaigns.map(c => {
                const openRate = c.sent ? Math.round((c.opened / c.sent) * 100) : 0;
                const clickRate = c.sent ? Math.round((c.clicked / c.sent) * 100) : 0;
                return (
                  <tr key={c.id}>
                    <td>
                      <div className="campaign-row">
                        <div className="campaign-details">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                              <strong>{c.name}</strong>
                              <div style={{ marginTop: 6 }}><small>{c.type} • {c.date}</small></div>
                            </div>
                            <div className="campaign-actions">
                              <button onClick={() => changeStatus(c.id, c.status === 'active' ? 'completed' : 'active')} className="btn">Toggle</button>
                              <button onClick={() => deleteCampaign(c.id)} className="btn btn-secondary">Delete</button>
                            </div>
                          </div>

                          <div style={{ marginTop: 10 }}>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: 6 }}>
                              <div style={{ width: '120px' }}>
                                <small>Open Rate</small>
                                <div className="progress" style={{ marginTop: 6 }}><div className="progress-bar" style={{ width: `${openRate}%` }} /></div>
                                <small>{openRate}%</small>
                              </div>
                              <div style={{ width: '120px' }}>
                                <small>Click Rate</small>
                                <div className="progress" style={{ marginTop: 6 }}><div className="progress-bar" style={{ width: `${clickRate}%`, background: '#8b5cf6' }} /></div>
                                <small>{clickRate}%</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{ width: 120, textAlign: 'right' }}>
                          <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{(c.sent || 0).toLocaleString()}</div>
                          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Sent</div>
                          <div style={{ marginTop: 8 }}><StatusBadge status={c.status} /></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

