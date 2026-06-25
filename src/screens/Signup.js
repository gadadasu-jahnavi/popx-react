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
export default function Signup({ navigate }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes',
  });

  const set = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value });

  return (
    <div
      style={{
        flex: 1,
        padding: '40px 24px 32px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <div>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: '#1D2226',
            lineHeight: 1.3,
            marginBottom: 24,
          }}
        >
          Create your
          <br />
          PopX account
        </h1>

        <Field
          label="Full Name*"
          placeholder="Marry Doe"
          value={form.name}
          onChange={set('name')}
        />

        <Field
          label="Phone number*"
          type="tel"
          placeholder="+91 00000 00000"
          value={form.phone}
          onChange={set('phone')}
        />

        <Field
          label="Email address*"
          type="email"
          placeholder="marry@gmail.com"
          value={form.email}
          onChange={set('email')}
        />

        <Field
          label="Password*"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={set('password')}
        />

        <Field
          label="Company name"
          placeholder="Acme Corp"
          value={form.company}
          onChange={set('company')}
        />

        <div style={{ marginBottom: 32 }}>
          <p
            style={{
              fontSize: 14,
              color: '#1D2226',
              marginBottom: 10,
            }}
          >
            Are you an Agency?*
          </p>

          <label
            style={{
              marginRight: 24,
              fontSize: 15,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === 'yes'}
              onChange={set('agency')}
              style={{ accentColor: '#7B2FBE' }}
            />
            Yes
          </label>

          <label
            style={{
              fontSize: 15,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === 'no'}
              onChange={set('agency')}
              style={{ accentColor: '#7B2FBE' }}
            />
            No
          </label>
        </div>
      </div>

      <button
        onClick={() => navigate('profile')}
        style={{
          width: '100%',
          padding: 16,
          background: '#6C25FF',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          fontSize: 16,
          fontWeight: 500,
          fontFamily: 'Rubik, sans-serif',
          cursor: 'pointer',
          marginTop: 'auto',
        }}
      >
        Create Account
      </button>
    </div>
  );
}