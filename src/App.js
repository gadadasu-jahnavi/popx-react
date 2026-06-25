import React, { useEffect, useState } from 'react';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';

export default function App() {
  const [screen, setScreen] = useState(
    window.location.hash.replace('#', '') || 'landing'
  );

  const navigate = (page) => {
    window.history.pushState({ page }, '', `#${page}`);
    setScreen(page);
  };

  useEffect(() => {
    const handlePopState = () => {
      const page =
        window.location.hash.replace('#', '') || 'landing';
      setScreen(page);
    };

    window.addEventListener('popstate', handlePopState);

    return () =>
      window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="phone-shell">
      {screen === 'landing' && <Landing navigate={navigate} />}
      {screen === 'login' && <Login navigate={navigate} />}
      {screen === 'signup' && <Signup navigate={navigate} />}
      {screen === 'profile' && <Profile navigate={navigate} />}
    </div>
  );
}
