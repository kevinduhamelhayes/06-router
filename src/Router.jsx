import { EVENTS } from './const';
import { useEffect, useState } from 'react';

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1> 404 </h1> }) {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);
  const Page = routes.find((route) => route.path === currentPage)?.component || DefaultComponent;
  return <Page />;
}
