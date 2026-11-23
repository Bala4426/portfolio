import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NotFound } from './components/NotFound';
import { Work } from './components/Work';

/** Single page. Any other path renders the 404 page (no router needed). */
function isRoot() {
  if (typeof window === 'undefined') return true;
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const path = window.location.pathname.replace(/\/+$/, '');
  return path === base || path === '' || path.endsWith('/index.html');
}

export default function App() {
  if (!isRoot()) return <NotFound />;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
