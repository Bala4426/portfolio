import { navItems } from '../data/nav';
import { profile } from '../data/profile';

export function Header() {
  return (
    <header className="masthead">
      <div className="wrap masthead__inner">
        <a className="masthead__name" href="#top">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <ul className="masthead__nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a className="masthead__cv" href={profile.resumeFile} download={profile.resumeDownloadName}>
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
