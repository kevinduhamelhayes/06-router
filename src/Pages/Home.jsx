import { Link } from '../Link.jsx';

export default function HomePage () {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home Page</p>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}
