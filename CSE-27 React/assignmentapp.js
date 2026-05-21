import React from 'react';

const App = () => {
  // Inline CSS Styles
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0', // Light gray background
    margin: 0,
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    width: '350px',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '16px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '10px'
  };

  return (
    <div style={pageStyle}>
      <div style={formStyle}>
        <h2 style={{ color: 'blue', marginBottom: '20px' }}>Student Registration Form</h2>
        <form>
          <input type="text" placeholder="Student Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <input type="text" placeholder="Course" style={inputStyle} />
          <input type="tel" placeholder="Mobile Number" style={inputStyle} />
          <button type="submit" style={buttonStyle}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default App;