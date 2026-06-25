import React from 'react';

export default function Profile({ navigate }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

<div
  style={{
    padding: '20px 24px 16px',
    borderBottom: '1px solid #E5E5E5',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    background: '#fff',
    zIndex: 1
  }}
>        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#1D2226' }}>Account Settings</h2>
      </div>

      <div style={{ padding: '20px 24px', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%', background: '#D4B8E8',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, color: '#7B2FBE', fontWeight: 600
          }}>
            M
          </div>
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: 20, height: 20, borderRadius: '50%', background: '#7B2FBE',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10
          }}>
            📷
          </div>
        </div>
        <div>
          <p style={{ fontSize: 16, fontWeight: 500, color: '#1D2226' }}>Marry Doe</p>
          <p style={{ fontSize: 13, color: '#7C8493', marginTop: 2 }}>Marry@Gmail.Com</p>
        </div>
      </div>

      <div style={{ padding: '20px 24px' }}>
        <p style={{ fontSize: 14, color: '#1D2226', lineHeight: 1.6 }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
          Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      {/* <div style={{ marginTop: 'auto', padding: '0 24px 40px' }}>
        <button
          onClick={() => navigate('landing')}
          style={{
            background: 'none', border: 'none', color: '#7B2FBE',
            fontSize: 14, cursor: 'pointer', fontFamily: 'Rubik, sans-serif'
          }}
        >
          ← Back to Home
        </button>
      </div> */}

    </div>
  );
}