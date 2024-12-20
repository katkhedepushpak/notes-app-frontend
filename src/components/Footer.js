import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-white text-center py-3 mt-4" style={{ position: 'fixed', bottom: '0', width: '100%', backgroundColor: '#e4a318' }}>
        <div className="container">
          <p>&copy; 2024 Jot-It-down. This is a learning project.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
