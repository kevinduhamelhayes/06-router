import './App.css';
import AboutPage from './Pages/About.jsx';
import HomePage from './Pages/Home.jsx';
import { Router } from './Router.jsx';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
];

function App () {
  return (
    <>
      <Router routes={routes} />
    </>
  );
}
export default App;
