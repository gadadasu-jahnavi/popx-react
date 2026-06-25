import React, { useState } from 'react';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';

export default function App() {
  const [screen, setScreen] = useState('landing');

  return (
    <div className="phone-shell">
      {screen === 'landing' && <Landing navigate={setScreen} />}
      {screen === 'login'   && <Login   navigate={setScreen} />}
      {screen === 'signup'  && <Signup  navigate={setScreen} />}
      {screen === 'profile' && <Profile navigate={setScreen} />}
    </div>
  );
}