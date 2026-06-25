import React, { useState } from 'react';

function Field({ label, type = 'text', placeholder, value, onChange }) {
  return (
    <div
      style={{
        position: 'relative',
        marginBottom: 24,
      }}
    >
      <label
        style={{
          position: 'absolute',
          top: '-8px',
          left: '12px',
          background: '#fff',
          padding: '0 6px',
          fontSize: '12px',
          fontWeight: 500,
          color: '#7B2FBE',
          zIndex: 1,
        }}
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          height: '48px',
          padding: '0 14px',
          border: '1px solid #D9D9D9',
          borderRadius: '6px',
          outline: 'none',
          fontSize: '14px',
          color: '#1D2226',
          fontFamily: 'Rubik, sans-serif',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}   
export default function Login({ navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isReady = email && password;

  return (
    <div style={{ flex: 1, padding: '40px 24px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 600, color: '#1D2226', lineHeight: 1.3, marginBottom: 8 }}>
        Signin to your<br />PopX account
      </h1>
      <p style={{ fontSize: 15, color: '#7C8493', marginBottom: 32, lineHeight: 1.5 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Field label="Email Address" type="email" placeholder="Enter email address"
        value={email} onChange={e => setEmail(e.target.value)} />
      <Field label="Password" type="password" placeholder="Enter password"
        value={password} onChange={e => setPassword(e.target.value)} />

      <button
        onClick={() => isReady && navigate('profile')}
        style={{
          width: '100%', padding: 16,
          background: isReady ? '#7B2FBE' : '#C6C6C6',
          color: '#fff', border: 'none', borderRadius: 6,
          fontSize: 16, fontWeight: 500, fontFamily: 'Rubik, sans-serif',
          cursor: isReady ? 'pointer' : 'default', transition: 'background 0.2s'
        }}
      >
        Login
      </button>
    </div>
  );
}