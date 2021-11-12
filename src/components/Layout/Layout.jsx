import { Outlet } from 'react-router';
import Navigation from '../Navigation/Navigation';
import './Layout.scss';

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <hr />
        <p> LeroViten, 2021</p>
        <a
          href="https://github.com/LeroViten/SG-testing"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          SourceCode is here
        </a>
      </footer>
    </>
  );
}
