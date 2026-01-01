import { BarChart3, Mail, Users, Settings } from 'lucide-react';

export const Sidebar = ({ currentPage, setCurrentPage }) => {
  const NavItem = ({ icon, label, page }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={currentPage === page ? 'nav-btn active' : 'nav-btn'}
    >
      {icon}
      <span style={{ marginLeft: 8 }}>{label}</span>
    </button>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Globopersona</h1>
        <p>Email Marketing Suite</p>
      </div>
      <nav className="flex-1 p-4">
        <NavItem icon={<BarChart3 size={20} />} label="Dashboard" page="dashboard" />
        <NavItem icon={<Mail size={20} />} label="Campaigns" page="campaigns" />
        <NavItem icon={<Users size={20} />} label="Contacts" page="contacts" />
        <NavItem icon={<Settings size={20} />} label="Settings" page="settings" />
      </nav>
    </div>
  );
};
