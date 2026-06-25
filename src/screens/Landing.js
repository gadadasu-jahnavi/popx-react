import React from 'react';

export default function Landing({ navigate }) {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', padding: '40px 24px 48px'
    }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, color: '#1D2226', marginBottom: 12 }}>
        Welcome to PopX
      </h1>
      <p style={{ fontSize: 17, color: '#7C8493', lineHeight: 1.5, marginBottom: 40 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button onClick={() => navigate('signup')} style={{
        width: '100%', padding: 16, marginBottom: 16,
        background: '#6C25FF', color: '#fff',
        border: 'none', borderRadius: 6,
        fontSize: 16, fontWeight: 500, fontFamily: 'Rubik, sans-serif', cursor: 'pointer'
      }}>
        Create Account
      </button>
      <button onClick={() => navigate('login')} style={{
        width: '100%', padding: 16,
        background: '#E8D5F5', color: '#1D2226',
        border: 'none', borderRadius: 6,
        fontSize: 16, fontWeight: 500, fontFamily: 'Rubik, sans-serif', cursor: 'pointer'
      }}>
        Already Registered? Login
      </button>
    </div>
  );
}