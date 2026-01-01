import { Header } from '../components/Header';
import { ContactStatusBadge } from '../components/StatusBadge';
import { useState } from 'react';

export const Contacts = ({ contacts = [], setContacts }) => {
  const [query, setQuery] = useState('');

  const filtered = contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.email.toLowerCase().includes(query.toLowerCase()));

  const changeStatus = (id, status) => {
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  };

  const deleteContact = id => {
    if (!confirm('Delete this contact?')) return;
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="main-content p-8">
      <Header title="Contacts" subtitle="View and manage your email contacts" action={<input placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} className="input" />} />

      <div className="table-wrapper p-6">
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Last Engagement</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td><ContactStatusBadge status={c.status} /></td>
                  <td>{c.lastEngagement}</td>
                  <td>
                    <div className="campaign-actions">
                      <button onClick={() => changeStatus(c.id, c.status === 'subscribed' ? 'unsubscribed' : 'subscribed')} className="btn">Toggle</button>
                      <button onClick={() => deleteContact(c.id)} className="btn btn-secondary">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
