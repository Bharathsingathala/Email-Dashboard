export const Header = ({ title, subtitle, action }) => (
  <div className="header p-8 mb-6">
    <div className="flex items-center justify-between">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </div>
  </div>
);
