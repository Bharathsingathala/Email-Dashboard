export const StatusBadge = ({ status }) => {
  const styles = {
    active: 'status-active',
    draft: 'status-draft',
    scheduled: 'status-scheduled',
    completed: 'status-completed'
  };

  return <span className={`status-badge ${styles[status]}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>;
};

export const ContactStatusBadge = ({ status }) => {
  const styles = {
    subscribed: 'status-active',
    unsubscribed: 'status-draft',
    bounced: 'status-scheduled'
  };

  return <span className={`status-badge ${styles[status]}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>;
};
