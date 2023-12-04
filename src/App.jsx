import { useEffect, useState } from 'react';
import './App.css';

const NAVIGATION_EVENT = 'pushstate';

function navigate (href) {
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

function HomePage () {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home Page
        </p>
        <button onClick={() => navigate('/about')}>About</button>
      </header>
    </div>
  );
}
function AboutPage () {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          About Page
        </p>
        <button onClick={() => navigate('/')}>Home</button>
      </header>
    </div>
  );
}
function App () {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <>
      {currentPage === '/' && <HomePage />}
      {currentPage === '/about' && <AboutPage />}
      <script>
        {window.addEventListener(NAVIGATION_EVENT, () => setCurrentPage(window.location.pathname))}
      </script>
    </>
  );
}
export default App;
